import login from "../api/login"

export default async (ctx: { editMessageText: Function }) => {
    login().then((res: { msg: string }) => {

    }).catch((e: { msg: string }) => {
        ctx.editMessageText(e.msg)
    })
}