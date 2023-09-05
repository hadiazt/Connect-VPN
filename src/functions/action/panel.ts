export default async (ctx: { editMessageText: Function }) => {
    ctx.editMessageText('👨🏻‍💻 لطفا گزینه مورد نظر خود را انتخاب کنید.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🌐 مشاهده سرویس 🌐', callback_data: 'x' }],
                [{ text: '📱 ساخت vless 📱', callback_data: 'x' }, { text: '📱 ساخت vmess 📱', callback_data: 'x' }],
                [{ text: '👨‍💻 مدیریت 👨‍💻', callback_data: 'Moderation' }],
                [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
            ]
        }
    })
}