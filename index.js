#!/usr/bin/env node
import {
	addTask,
	list,
	updateTask,
	deleteTask,
	markInProgress
} from "./controller.js"

const [, , comand] = process.argv;

(async () => {
	try {
		switch (comand) {
			case 'add':
				await addTask();
				break;
			case 'update':
				await updateTask();
				break;
			case 'delete':
				await deleteTask();
				break;
			case 'mark-in-progress':
				await markInProgress();
				break;
			case 'mark-done':
				console.log(`${comand} comand`);
				break;
			case 'list':
				await list();
				break;

			default:
				throw new Error("Unknown command!\nAvailable: add, update, delete, mark-in-progress, mark-done, list");
		}
	} catch (error) {
		console.error(error.message);
	}
})();