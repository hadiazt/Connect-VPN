import { CheckPort } from "../public";

export default async (ctx: { update: any, editMessageText: Function }) => {
    const port = ctx.update.callback_query.data.split('_')[1]

    CheckPort(port).then((res: any) => {
        let message = `ایپی های متصل به پورت ${port}\n`
        if (!res[1]) message = 'این پورت اتصالی ندارد'; else 
        res.forEach((a: string) => {
            message += a + '\n'
        });
        ctx.editMessageText(message, {
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
}