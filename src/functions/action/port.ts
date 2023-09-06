import { Login, GetPorts } from "../routes";
import { Owner } from "../../../config.json";

export default async (ctx: { update: any, editMessageText: Function }) => {
    if (Owner.includes(ctx.update.callback_query.from.id)) {
        Login().then((res: { token: string }) => {
            GetPorts(res.token).then((res: { msg: string, data: {} }) => {
                console.log(res.data);
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


    // ctx.editMessageText('به ربات مدیریت  پنل xui خوش آمدید: ', {
    //     reply_markup: {
    //         inline_keyboard: [
    //             [{ text: '💻 وضعیت پنل 💻 ', callback_data: 'PanelStatus' }],
    //             [{ text: '📊 آمار پورت ها  📊 ', callback_data: 'PortStatus' }],
    //         ]
    //     }
    // });
}