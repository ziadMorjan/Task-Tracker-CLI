#!/usr/bin/env node
import {
	addTask
} from "./controller.js"

const [, , comand] = process.argv;

(async () => {
	try {
		switch (comand) {
			case 'add':
				await addTask()
				break;
			case 'update':
				console.log(`${comand} comand`);
				break;
			case 'delete':
				console.log(`${comand} comand`);
				break;
			case 'mark-in-progress':
				console.log(`${comand} comand`);
				break;
			case 'mark-done':
				console.log(`${comand} comand`);
				break;
			case 'list':
				console.log(`${comand} comand`);
				break;

			default:
				throw new Error("Unknown command!\nAvailable: add, update, delete, mark-in-progress, mark-done, list");
		}
	} catch (error) {
		console.error(error);
	}
})();