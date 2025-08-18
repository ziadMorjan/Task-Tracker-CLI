import { existsSync, mkdirSync } from "fs";
import fs from "fs/promises";

const DATA_DIR = './data';
const DATA_FILE = `${DATA_DIR}/data.json`;

export const readDataFromFile = async () => {
	if (!existsSync(DATA_DIR)) {
		mkdirSync(DATA_DIR);
	}

	if (!existsSync(DATA_FILE)) {
		await fs.writeFile(DATA_FILE, JSON.stringify([]));
		return [];
	}

	const fileContent = await fs.readFile(DATA_FILE);
	const data = JSON.parse(fileContent);
	return data;
};

export const writeDataToFile = async (data) => {
	if (!existsSync(DATA_DIR)) {
		mkdirSync(DATA_DIR);
	}

	if (!existsSync(DATA_FILE)) {
		await fs.writeFile(DATA_FILE, JSON.stringify([]));
	}

	const fileContent = JSON.stringify(data, null, 2);
	await fs.writeFile(DATA_FILE, fileContent);
};
