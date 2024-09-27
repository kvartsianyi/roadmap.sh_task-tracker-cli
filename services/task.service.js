import { storageService } from './storage.service.js';
import { TASK_STATUSES } from '../constants/common.constants.js';
import { MESSAGES } from '../constants/messages.constants.js';

class TaskService {
	storage;

	constructor(storage) {
		this.storage = storage;
	}

	async getTasks(status) {
		let tasks = await this.#readTasksFromStorage();

		if (status) {
			tasks = tasks.filter(task => task.status === status);
		}

		return tasks;
	}

	async add(description) {
		const tasks = await this.#readTasksFromStorage();

		const task = {
			id: this.#generateUniqueId(tasks),
			description,
			status: TASK_STATUSES.TODO,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		await this.storage.write([...tasks, task]);

		return task;
	}

	async update(taskId, { description, status }) {
		const tasks = await this.#readTasksFromStorage();
		const task = tasks.find(task => task.id === taskId);

		if (!task) {
			throw new Error(MESSAGES.TASK_NOT_EXIST);
		}

		if (description) {
			task.description = description;
		}

		if (status) {
			task.status = status;
		}

		await this.storage.write(tasks);

		return task;
	}

	async delete(taskId) {
		let tasks = await this.#readTasksFromStorage();
		const task = tasks.find(task => task.id === taskId);

		if (!task) {
			throw new Error(MESSAGES.TASK_NOT_EXIST);
		}

		tasks = tasks.filter(task => task.id !== taskId);

		await this.storage.write(tasks);

		return task;
	}

	async #readTasksFromStorage() {
		try {
			let tasks = await this.storage.read();

			return tasks;
		} catch (e) {
			// File does not exist. Skip error.
			return [];
		}
	}

	#generateUniqueId(tasks) {
		if (!tasks.length) 
			return 1;
		
		return tasks.reduce((acc, task) => task.id > acc ? task.id : acc, 0) + 1;
	}
}

export const taskService = new TaskService(storageService); 