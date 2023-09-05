import { message } from 'telegraf/filters';
import { Telegraf, session } from 'telegraf';
import { Start } from './functions/routes';

const { Scense } = require('telegraf');
const bot = new Telegraf('1683067885:AAEGPizLkGN8kLwouFheSS1IguUbEzN8EhY');

bot.use(session());
bot.launch();

// bot.use(stage.middleware());

bot.command('start', Start)