import { taskService } from './task.service.js';
import {
	log,
	printTasksList,
	validateTaskId,
	validateDescription,
	validateTaskStatus,
} from '../utils.js';
import { MESSAGES } from '../constants/messages.constants.js';

class CommandService {
	async add(args) {
		const [_, description] = args;
	
		validateDescription(description);
	
		const task = await taskService.add(description);
		log(MESSAGES.TASK_ADDED(task.id));

		return task;
	}

	async update(args) {
		let [_, taskId, description] = args;
		taskId = Number(taskId);

		validateTaskId(taskId);
		validateDescription(description);
	
		const task = await taskService.update(taskId, { description });
		log(MESSAGES.TASK_UPDATED(task.id));

		return task;
	}

	async delete(args) {
		let [_, taskId] = args;
		taskId = Number(taskId);

		validateTaskId(taskId);

		const task = await taskService.delete(taskId);
		log(MESSAGES.TASK_DELETED(task.id));
	}

	async mark(args, status) {
		let [_, taskId] = args;
		taskId = Number(taskId);

		validateTaskId(taskId);

		const task = await taskService.update(taskId, { status });
		log(MESSAGES.TASK_MARKED(task.id, status));
	}

	async list(args) {
		const [_, status] = args;

		if (status) {
			validateTaskStatus(status);
		}
		
		const tasks = await taskService.getTasks(status);
		printTasksList(tasks);

		return tasks;
	}
}

export const commandService = new CommandService(); 