import { TASK_STATUSES } from './constants/common.constants.js';
import { MESSAGES } from './constants/messages.constants.js';

export const log = message => console.log(message);

export const printTasksList = tasks => {
	log('ID | Status       | Description');
	log('---|--------------|----------------');
	tasks.forEach(({ id, status, description }) => {
		log(`${id}  | ${status.padEnd(12)} | ${description}`);
	});
}

export const validateDescription = description => {
	if (!description || description.length < 3) {
		throw new Error(MESSAGES.TASK_DESCRIPTION_INVALID);
	}

	return true;
}

export const validateTaskId = id => {
	if (!Number.isInteger(id)) {
		throw new Error(MESSAGES.TASK_ID_INVALID);
	}

	return true;
}

export const validateTaskStatus = status => {
	if (!Object.values(TASK_STATUSES).includes(status)) {
		throw new Error(MESSAGES.TASK_STATUS_INVALID);
	}

	return true;
}