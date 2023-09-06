import { Telegraf } from 'telegraf';
import { BotToken } from '../config.json';
import { Start, Home, PanelStatus, PortStatus, PortsStatus,IPS } from './functions/routes';

const bot = new Telegraf(BotToken);
bot.launch();


bot.command('start', Start);


bot.action('Home', Home);
bot.action(/IPS_/, IPS);
bot.action(/Port_/, PortStatus);
bot.action('PortStatus', PortsStatus);
bot.action('PanelStatus', PanelStatus);