#!/usr/bin/env node
import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline/promises';

import { header, tastFilename } from './constants.js';

const rl = readline.createInterface({ input, output });

console.log(header.join('\n'));