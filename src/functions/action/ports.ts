import { Login, GetPorts } from "../routes";
import { Owners } from "../../../config.json";

export default async (ctx: { update: any, editMessageText: Function }) => {
    if (Owners.includes(ctx.update.callback_query.from.id)) {
        Login().then((res: { token: string }) => {
            GetPorts(res.token).then((res: {
                msg: string, data: Array<{
                    id: number, remark: string, port: number, protocol: string
                }>
            }) => {
                const Headers = [{ text: 'پورت', callback_data: 'X' }, { text: 'پروتکل', callback_data: 'X' }, { text: 'نام', callback_data: 'X' }];

                const Ports = res.data.map((item: { id: number, protocol: string, remark: string, port: number }) => [
                    { text: item.port, callback_data: `Port_${item.id}` },
                    { text: item.protocol, callback_data: `Port_${item.id}` },
                    { text: item.remark, callback_data: `Port_${item.id}` },
                ]);

                const Footer = [{ text: '🏠 منوی اصلی 🏠', callback_data: 'Home' }];


                ctx.editMessageText(res.msg, {
                    reply_markup: {
                        inline_keyboard: [
                            Headers,
                            ...Ports,
                            Footer
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
    } else {
        ctx.editMessageText('شما درسترسی استفاده ندارید', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🏠 منوی اصلی 🏠', callback_data: 'Home' }]
                ]
            }
        });
    }
}