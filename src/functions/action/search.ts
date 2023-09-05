export default async (ctx: { editMessageText: Function }) => {
    ctx.editMessageText('🤔 لطفا روش مورد نظر خود را برای دریافت اطلاعات سرویس انتخاب کنید.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '📝 توسط نام 📝', callback_data: '' }],
                [{ text: '🔗 توسط لینک 🔗', callback_data: '' }],
                [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
            ]
        }
    })
}