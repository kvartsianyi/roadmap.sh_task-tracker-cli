#!/usr/bin/env node

import { commandService } from './services/command.service.js';
import { TASK_STATUSES, CLI_COMMANDS } from './constants/common.constants.js';
import { log } from './utils.js';

const args = process.argv.slice(2);
const [command] = args;

try {
	switch (command) {
		case CLI_COMMANDS.ADD:
			await commandService.add(args);
			break;
		case CLI_COMMANDS.UPDATE:
			await commandService.update(args);
			break;
		case CLI_COMMANDS.DELETE:
			await commandService.delete(args);
			break;
		case CLI_COMMANDS.MARK_IN_PROGRESS:
			await commandService.mark(args, TASK_STATUSES.IN_PROGRESS);
			break;
		case CLI_COMMANDS.MARK_DONE:
			await commandService.mark(args, TASK_STATUSES.DONE);
			break;
		case CLI_COMMANDS.LIST:
			await commandService.list(args);
			break;
		default:
			throw new Error('Unknown command');
	}
} catch (e) {
	log(e.message);
}
