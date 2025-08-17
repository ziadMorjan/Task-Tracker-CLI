import { existsSync } from "fs";
import fs from "fs/promises";

export const readDataFromFile = async () => {
	if (!existsSync('./data.json')) {
		await fs.writeFile('./data.json', JSON.stringify([]));
		return [];
	}
	const fileContent = await fs.readFile('./data.json');
	const data = JSON.parse(fileContent);
	return data;
}

export const writeDataToFile = async (data) => {
	if (!existsSync('./data.json')) {
		await fs.writeFile('./data.json', JSON.stringify([]));
	}
	const fileContent = JSON.stringify(data);
	fs.writeFile('./data.json', fileContent);
}
