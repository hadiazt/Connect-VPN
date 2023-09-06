import { Status ,Login } from "../routes";
import { Owner } from "../../../config.json";

export default async (ctx: { update: any, editMessageText: Function }) => {
    if (Owner.includes(ctx.update.callback_query.from.id)) {
        Login().then((res: { token: string }) => {
            Status(res.token).then((res: {
                msg: string, data:
                {
                    CPU: string,
                    CPUSpeed: string,
                    CPUCore: number,
                    MemoryUsage: string,
                    MemoryTotal: string,
                    DiskUsage: string,
                    DiskTotal: string,
                    Uptime: string,
                    TotalSend: string,
                    TotalRecv: string,
                    IPV4: string,
                    IPV6: string,
                    Xray: {
                        MemoryUsage: string,
                        Threads: number,
                        Uptime: string,
                        State: string,
                        Version: string
                    }
                }
            }) => {
                ctx.editMessageText(res.msg, {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🟢 System 🟢', callback_data: 'X' }],
                            [{ text: 'CPU Usage', callback_data: 'X' }, { text: 'CPU Speed ', callback_data: 'X' }, { text: 'CPU Core ', callback_data: 'X' }],
                            [{ text: res.data.CPU, callback_data: 'X' }, { text: res.data.CPUSpeed, callback_data: 'X' }, { text: res.data.CPUCore, callback_data: 'X' }],
                            [{ text: 'Uptime ' + res.data.Uptime, callback_data: 'X' }],
                            [{ text: '-------------------------', callback_data: 'X' }],
                            [{ text: 'Memory Total ', callback_data: 'X' }, { text: 'Memory Usage ', callback_data: 'X' }],
                            [{ text: res.data.MemoryTotal, callback_data: 'X' }, { text: res.data.MemoryUsage, callback_data: 'X' }],
                            [{ text: '-------------------------', callback_data: 'X' }],
                            [{ text: 'Disk Total ', callback_data: 'X' }, { text: 'Disk Usage ', callback_data: 'X' }],
                            [{ text: res.data.DiskTotal, callback_data: 'X' }, { text: res.data.DiskUsage, callback_data: 'X' }],
                            [{ text: '-------------------------', callback_data: 'X' }],
                            [{ text: 'Total Send ', callback_data: 'X' }, { text: 'Total Recived ', callback_data: 'X' }],
                            [{ text: res.data.TotalSend, callback_data: 'X' }, { text: res.data.TotalRecv, callback_data: 'X' }],
                            [{ text: '-------------------------', callback_data: 'X' }],
                            [{ text: 'IPV4 ', callback_data: 'X' }, { text: 'IPV6', callback_data: 'X' }],
                            [{ text: res.data.IPV4, callback_data: 'X' }, { text: res.data.IPV6, callback_data: 'X' }],
                            [{ text: '🟢 Xray 🟢', callback_data: 'X' }],
                            [{ text: 'State ', callback_data: 'X' }, { text: res.data.Xray.State, callback_data: 'X' }],
                            [{ text: 'Uptime ', callback_data: 'X' }, { text: res.data.Xray.Uptime, callback_data: 'X' }],
                            [{ text: 'Memory Usage ', callback_data: 'X' }, { text: res.data.Xray.MemoryUsage, callback_data: 'X' }],
                            [{ text: 'Version ', callback_data: 'X' }, { text: res.data.Xray.Version, callback_data: 'X' }],
                            [{ text: 'Threads ', callback_data: 'X' }, { text: res.data.Xray.Threads, callback_data: 'X' }],
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