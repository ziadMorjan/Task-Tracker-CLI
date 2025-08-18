import { readDataFromFile, writeDataToFile } from "./fileOperations.js";
import crypto from "crypto";

export const addTask = async () => {
	const [, , , description] = process.argv;
	if (!description)
		throw new Error("The description of the task is required");

	const tasks = await readDataFromFile();
	const newTask = {
		id: crypto.randomBytes(4).toString("hex"),
		description,
		status: "todo",
		createdAt: new Date(Date.now()),
	};
	tasks.push(newTask);
	await writeDataToFile(tasks);
	console.log(`Task added successfully (ID: ${newTask.id})`);
};

export const list = async () => {
	const [, , , status] = process.argv;
	let tasks = await readDataFromFile();

	if (status) {
		if (!["todo", "in-progress", "done"].includes(status))
			throw new Error("Unknown status!\nAvailable: todo, in-progress, done");
		tasks = tasks.filter((task) => task.status === status);
		if (tasks.length === 0) {
			console.log(`There are no tasks with status: ${status}.`);
			return;
		}
	}

	if (tasks.length === 0) {
		console.log(`There are no tasks.`);
		return;
	}

	tasks.forEach((t) => {
		let log = `[${t.id}] ${t.description} | ${t.status} | created: ${t.createdAt}`;
		if (t.updatedAt) {
			log += ` | updated: ${t.updatedAt}`;
		}
		console.log(log);
	});
};

export const updateTask = async () => {
	const [, , , id, newDesc] = process.argv;
	if (!id || !newDesc)
		throw new Error(
			"Invalid update command!\nUsage: update 'taskId' 'new description'"
		);

	const tasks = await readDataFromFile();
	const task = tasks.find((t) => t.id === id);

	if (!task) throw new Error(`No task found with id: ${id}`);

	task.description = newDesc;
	task.updatedAt = new Date(Date.now());

	await writeDataToFile(tasks);
	console.log(`Task updated successfully (ID: ${task.id})`);
};

export const deleteTask = async () => {
	const [, , , id] = process.argv;
	if (!id)
		throw new Error("Invalid delete command!\nUsage: delete 'taskId'");

	let tasks = await readDataFromFile();
	const task = tasks.find((t) => t.id === id);

	if (!task) throw new Error(`No task found with id: ${id}`);

	tasks = tasks.filter((t) => t.id !== id);

	await writeDataToFile(tasks);
	console.log(`Task deleted successfully (ID: ${id})`);
};

export const markStatus = async (status) => {
	const [, , , id] = process.argv;
	if (!id)
		throw new Error(`Invalid mark-${status} command!\nUsage: mark-${status} 'taskId'`);

	const tasks = await readDataFromFile();
	const task = tasks.find((t) => t.id === id);

	if (!task) throw new Error(`No task found with id: ${id}`);

	task.status = status;
	task.updatedAt = new Date(Date.now());

	await writeDataToFile(tasks);
	console.log(`Task marked ${status} successfully (ID: ${task.id})`);
};
