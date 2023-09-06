import { Telegraf } from 'telegraf';
import { BotToken } from '../config.json';
import { Start, Home, PanelStatus, PortStatus, PortsStatus } from './functions/routes';

const bot = new Telegraf(BotToken);
bot.launch();


bot.command('start', Start);


bot.action('Home', Home);
bot.action(/Port_/, PortStatus);
bot.action('PortStatus', PortsStatus);
bot.action('PanelStatus', PanelStatus);