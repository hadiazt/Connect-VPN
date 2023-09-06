import { Telegraf } from 'telegraf';
import { BotToken } from '../config.json';
import { Start,Home, PanelStatus } from './functions/routes';

const bot = new Telegraf(BotToken);
bot.launch();


bot.command('start', Start);
bot.action('Home', Home)
bot.action('PanelStatus', PanelStatus);