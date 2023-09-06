import { Telegraf } from 'telegraf';
import { BotToken } from '../config.json';
import { AutoPortChecker } from './functions/public';
import { Start, Home, PanelStatus, PortStatus, PortsStatus, DisablePort, IPS } from './functions/routes';

const bot = new Telegraf(BotToken);
bot.launch();

setInterval(() => {
    AutoPortChecker(bot);
}, 180000);

bot.command('start', Start);
bot.action(/IPS_/, IPS);
bot.action('Home', Home);
bot.action(/Port_/, PortStatus);
bot.action(/Disable_/, DisablePort);
bot.action('PortStatus', PortsStatus);
bot.action('PanelStatus', PanelStatus);

process.on('unhandledRejection', (err: { name: string, message: string }) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(formattedDate + err)
});