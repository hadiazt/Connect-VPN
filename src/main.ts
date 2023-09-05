import { BotToken } from './data/config.json';

import { Telegraf, session } from 'telegraf';
import { AdminPanel, Moderation, SearchService, Start, Home, RemoveAdmin, AddAdmin, ConnectionLimit } from './functions/routes';
import { AdminAdd, AdminRem, SetConnectionLimit } from './functions/api/public';

const { Scenes } = require('telegraf');
const bot = new Telegraf(BotToken);
bot.use(session());
bot.launch();


const AdminAQ = new Scenes.BaseScene('AdminAQ');
const AdminRQ = new Scenes.BaseScene('AdminRQ');
const ConnectionLimitQ = new Scenes.BaseScene('ConnectionLimitQ');

AdminAQ.enter((ctx: { reply: Function }) => { ctx.reply('لطفا ایدی عددی کاربر را ارسال کنید') });
AdminRQ.enter((ctx: { reply: Function }) => { ctx.reply('لطفا ایدی عددی کاربر را ارسال کنید') });
ConnectionLimitQ.enter((ctx: { reply: Function }) => { ctx.reply('لطفا عدد محدودیت را وارد کنید') });


AdminAQ.on('text', async (ctx: any) => {
    const ID = ctx.session.token = ctx.message.text;
    AdminAdd(ID).then((res: { msg: string }) => {
        ctx.reply(res.msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
                ]
            }
        })
        return ctx.scene.leave();
    }).catch((e: { msg: string }) => {
        ctx.reply(e.msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
                ]
            }
        })
    })
});

AdminRQ.on('text', async (ctx: any) => {
    const ID = ctx.session.token = ctx.message.text;
    AdminRem(ID).then((res: { msg: string }) => {
        ctx.reply(res.msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
                ]
            }
        })
        return ctx.scene.leave();
    }).catch((e: { msg: string }) => {
        ctx.reply(e.msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
                ]
            }
        })
    })
});

ConnectionLimitQ.on('text', async (ctx: any) => {
    const Count = ctx.session.token = ctx.message.text;
    SetConnectionLimit(Count).then((res: { msg: string }) => {
        ctx.reply(res.msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
                ]
            }
        })
        return ctx.scene.leave();
    }).catch((e: { msg: string }) => {
        ctx.reply(e.msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
                ]
            }
        })
    })
});

const stage = new Scenes.Stage([AdminAQ, AdminRQ, ConnectionLimitQ]);
bot.use(stage.middleware());

bot.command('start', Start);

bot.action('Home', Home)
bot.action('AdminPanel', AdminPanel);
bot.action('Moderation', Moderation);
bot.action('SearchService', SearchService);

bot.action('AddAdmin', AddAdmin);
bot.action('RemoveAdmin', RemoveAdmin);
bot.action('ConnectionLimit', ConnectionLimit)