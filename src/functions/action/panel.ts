import login from "../api/login"
import { Status } from "../routes"
export default async (ctx: { editMessageText: Function }) => {
    login().then((res: { token: string }) => {
        Status(res.token).then((res: {
            msg: string, data: {}
        }) => {
            console.log(res.data);
            // ctx.editMessageText(res.msg, {
            //     reply_markup: {
            //         inline_keyboard: [
            //             [{ text: 'CPU Speed', callback_data: 'X' }, { text: 'CPU Core', callback_data: 'X' }, { text: 'CPU Usage', callback_data: 'X' },],
            //             [{ text: res.data.cpuSpeedMhz, callback_data: 'X' }, { text: res.data.cpuCores, callback_data: 'X' }, { text: res.data.cpu, callback_data: 'X' },],
            //         ]
            //     }
            // })

        }).catch((e: { msg: string }) => {
            ctx.editMessageText(e.msg)
        })
    }).catch((e: { msg: string }) => {
        ctx.editMessageText(e.msg)
    })
}