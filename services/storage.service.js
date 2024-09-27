import fs from 'node:fs/promises';

export const tastFilename = 'tasks.json';

class StorageService {
	filename;

	constructor(filename) {
		this.filename = filename;
	}

	async read() {
		const content = await fs.readFile(this.filename);

		return JSON.parse(content);
	}

	async write(content) {
		return fs.writeFile(this.filename, JSON.stringify(content, null, 2));
	}
}

export const storageService = new StorageService(tastFilename); 