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