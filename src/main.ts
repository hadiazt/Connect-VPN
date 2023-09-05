import { BotToken } from './data/config.json';

import { message } from 'telegraf/filters';
import { Telegraf, session } from 'telegraf';
import { SearchService, Start } from './functions/routes';

const { Scense } = require('telegraf');
const bot = new Telegraf(BotToken);
bot.use(session());
bot.launch();

// bot.use(stage.middleware());

bot.command('start', Start);

bot.action('SearchService', SearchService);