import { Telegraf } from 'telegraf';
import { BotToken } from '../config.json';
import { Start, Home, PanelStatus, PortStatus } from './functions/routes';

const bot = new Telegraf(BotToken);
bot.launch();


bot.command('start', Start);


bot.action('Home', Home);
bot.action('PortStatus', PortStatus);
bot.action('PanelStatus', PanelStatus);