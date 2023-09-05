export default async (ctx: { editMessageText: Function }) => {
    ctx.editMessageText('🤔 لطفا روش مورد نظر خود را برای دریافت اطلاعات سرویس انتخاب کنید.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '📝 توسط نام 📝', callback_data: 'userpage' }],
                [{ text: '🔗 توسط لینک 🔗', callback_data: 'uservouchers' }],
                [{ text: '🏚️ بازگشت 🏚️', callback_data: 'linkinfo' }],
            ]
        }
    })
}