import { Login, GetPort } from "../routes";
import { Owners } from "../../../config.json";

export default async (ctx: { update: any, editMessageText: Function }) => {
    if (Owners.includes(ctx.update.callback_query.from.id)) {
        Login().then((res: { token: string }) => {
            const id = ctx.update.callback_query.data.split('_')[1]
            GetPort(res.token, id).then((res: {
                msg: string
                data: {
                    Name: string,
                    Port: string,
                    Protocol: string,
                    Download: string,
                    Upload: string,
                    Connection: number
                }
            }) => {
                ctx.editMessageText(res.msg, {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: res.data.Name, callback_data: 'X' }, { text: 'نام', callback_data: 'X' }],
                            [{ text: res.data.Port, callback_data: 'X' }, { text: 'پورت', callback_data: 'X' }],
                            [{ text: res.data.Protocol, callback_data: 'X' }, { text: 'پروتکل', callback_data: 'X' }],
                            [{ text: res.data.Download, callback_data: 'X' }, { text: 'مجموعه دانلود', callback_data: 'X' }],
                            [{ text: res.data.Upload, callback_data: 'X' }, { text: 'مجموعه آپلود', callback_data: 'X' }],
                            [{ text: ' دستگاه های متصل : ' + res.data.Connection, callback_data: 'IPS_' + res.data.Port }],
                            [{ text: '❌ غیرفعال سازی ❌', callback_data: `Disable_${id}_${res.data.Port}` }],
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