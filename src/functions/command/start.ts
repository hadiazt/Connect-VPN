export default async (ctx: { reply: Function }) => {
    ctx.reply('👨🏻‍💻 لطفا گزینه مورد نظر خود را انتخاب کنید.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '👨🏻‍💻 مشخصات سرویس 👨🏻‍💻', callback_data: 'SearchService' }],
                [{ text: '💻 پنل مدیریت 💻 ', callback_data: 'AdminPanel' }],
                [{ text: '🌐 کانال 🌐', url: 'https://google.com' }]
            ]
        }
    })
}