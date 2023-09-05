import { BotToken } from './data/config.json';

import { message } from 'telegraf/filters';
import { Telegraf, session } from 'telegraf';
import { AdminPanel, Moderation, SearchService, Start ,Home} from './functions/routes';

const { Scense } = require('telegraf');
const bot = new Telegraf(BotToken);
bot.use(session());
bot.launch();

// bot.use(stage.middleware());

bot.command('start', Start);

bot.action('Home',Home)
bot.action('AdminPanel', AdminPanel);
bot.action('Moderation', Moderation);
bot.action('SearchService', SearchService);