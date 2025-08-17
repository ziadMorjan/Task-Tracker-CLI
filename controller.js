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