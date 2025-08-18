#!/usr/bin/env node
import {
	addTask,
	list,
	updateTask,
	deleteTask,
	markStatus,
} from "./controller.js";

const [, , command] = process.argv;

(async () => {
	try {
		switch (command) {
			case "add":
				await addTask();
				break;
			case "update":
				await updateTask();
				break;
			case "delete":
				await deleteTask();
				break;
			case "mark-in-progress":
				await markStatus("in-progress");
				break;
			case "mark-done":
				await markStatus("done");
				break;
			case "list":
				await list();
				break;
			default:
				throw new Error(
					"Unknown command!\nAvailable: add, update, delete, mark-in-progress, mark-done, list"
				);
		}
	} catch (error) {
		console.error(error.message);
	}
})();
