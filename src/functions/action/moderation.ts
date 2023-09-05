export default async (ctx: { editMessageText: Function }) => {
    ctx.editMessageText('👨🏻‍💻 لطفا گزینه مورد نظر خود را انتخاب کنید.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '👤 افزودن ادمین 👤', callback_data: 'AddAdmin' }],
                [{ text: '👤 حذف ادمین  👤', callback_data: 'RemoveAdmin' }],
                [{ text: '🏚️ منوی اصلی 🏚️', callback_data: '' }],
            ]
        }
    })
}