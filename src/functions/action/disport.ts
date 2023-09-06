import { DisablePortAPI, Login } from "../routes";

export default async (ctx: { update: any, editMessageText: Function }) => {
    Login().then((res: { token: string }) => {
        const id = ctx.update.callback_query.data.split('_')[1]
        const port = ctx.update.callback_query.data.split('_')[2]

        DisablePortAPI(res.token, id, port).then((res: { msg: string }) => {
            ctx.editMessageText(res.msg, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🏠 منوی اصلی 🏠', callback_data: 'Home' }]
                    ]
                }
            });
        }).catch((e: { msg: string }) => {
            ctx.editMessageText(e.msg, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🏠 منوی اصلی 🏠', callback_data: 'Home' }]
                    ]
                }
            });
        });
    }).catch((e: { msg: string }) => {
        ctx.editMessageText(e.msg, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏠 منوی اصلی 🏠', callback_data: 'Home' }]
                ]
            }
        });
    });
}