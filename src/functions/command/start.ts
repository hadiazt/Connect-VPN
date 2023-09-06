export default async (ctx: { reply: Function }) => {
    ctx.reply('به ربات مدیریت  پنل xui خوش آمدید: ', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '💻 وضعیت پنل 💻 ', callback_data: 'PanelStatus' }],
                [{ text: '📊 آمار سرویس ها  📊 ', callback_data: 'PortStatus' }],
            ]
        }
    });
}