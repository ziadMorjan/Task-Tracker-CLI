import { readDataFromFile, writeDataToFile } from "./fileOperations.js";
import crypto from "crypto"

export const addTask = async () => {
	const [, , , description] = process.argv;
	if (!description)
		throw new Error("The description of the task is requierd");
	const tasks = await readDataFromFile();
	const newTask = {
		id: crypto.randomBytes(2).toString('hex'),
		description,
		status: 'todo',
		createdAt: new Date(Date.now())
	}
	tasks.push(newTask);
	await writeDataToFile(tasks);
	console.log(`Task added successfully (ID: ${newTask.id})`);
}

export const list = async () => {
	const [, , , status] = process.argv;
	let tasks = await readDataFromFile();
	if (status) {
		if (!['todo', 'in-progress', 'done'].includes(status))
			throw new Error("Unknown status!\nAvailable: todo, in-progress, done");
		tasks = tasks.filter(task => task.status === status);
		if (tasks.length === 0) {
			console.log(`There is no tasks with status: ${status}.`);
			return;
		}
	}
	if (tasks.length === 0) {
		console.log(`There is no any task.`);
		return;
	}
	console.log(tasks);
}

export const updateTask = async () => {
	const [, , , id, newDesc] = process.argv;
	if (!id || !newDesc)
		throw new Error("Invalid update command!\nUpdate command must be like: update 'taskId' 'new description'");

	const tasks = await readDataFromFile();
	const index = tasks.findIndex(task => task.id === id);

	if (index === -1)
		throw new Error(`No task found with id: ${id}`);

	tasks[index].description = newDesc;
	tasks[index].updatedAt = new Date(Date.now());

	await writeDataToFile(tasks);
	console.log(`Task updated successfully (ID: ${tasks[index].id})`);
}

export const deleteTask = async () => {
	const [, , , id] = process.argv;
	if (!id)
		throw new Error("Invalid delete command!\nDelete command must be like: delete 'taskId'");

	let tasks = await readDataFromFile();
	const index = tasks.findIndex(task => task.id === id);

	if (index === -1)
		throw new Error(`No task found with id: ${id}`);

	tasks = tasks.filter(task => task.id !== id);

	await writeDataToFile(tasks);
	console.log(`Task deleted successfully (ID: ${id})`);
}