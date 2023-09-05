import { Telegraf } from 'telegraf';
import { BotToken } from '../config.json';
import { Start, PanelStatus } from './functions/routes';

const bot = new Telegraf(BotToken);
bot.launch();


bot.command('start', Start);
bot.action('PanelStatus', PanelStatus);