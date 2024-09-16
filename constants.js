import chalk from 'chalk';

export const tastFilename = 'tasks.json';

export const header = [
	`#${'#'.padStart(59, '=')}`,
	`|${'|'.padStart(59)}`,
	`|${`Welcome to ${chalk.underline('Task Tracker')}!`.padStart(50)}${'|'.padStart(18)}`,
	`|${'|'.padStart(59)}`,
	`|${`Made with ❤️ by ${chalk.greenBright('Yuriy Kvartsianiy')}.`.padStart(57)}${'|'.padStart(13)}`,
	`|${'|'.padStart(59)}`,
	`#${'#'.padStart(59, '=')}`,
];