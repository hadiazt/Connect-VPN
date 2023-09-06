import { Telegraf } from 'telegraf';
import { BotToken } from '../config.json';
import { AutoPortChecker } from './functions/public';
import { Start, Home, PanelStatus, PortStatus, PortsStatus,IPS } from './functions/routes';

const bot = new Telegraf(BotToken);
bot.launch();

AutoPortChecker(bot)
bot.command('start', Start);


bot.action(/IPS_/, IPS);
bot.action('Home', Home);
bot.action(/Port_/, PortStatus);
bot.action('PortStatus', PortsStatus);
bot.action('PanelStatus', PanelStatus);