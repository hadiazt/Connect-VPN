import { Database } from 'beta.db';
const db = new Database('./src/data/config.json');

export default async (ctx: any) => {        
    if (db.get('Admins').includes(String(ctx.update.callback_query.from.id))) {
        ctx.scene.enter('ConnectionLimitQ')
    } else {
        ctx.editMessageText('❌ شمادرسترسی ندارید ❌', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏚️ منوی اصلی 🏚️', callback_data: 'Home' }],
                ]
            }
        })
    }
}