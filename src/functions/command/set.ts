import { Database } from 'beta.db';
const db = new Database('limit.json');
import { Owners } from '../../../config.json';

export default async (ctx: { message: any, reply: Function }) => {
    if (!Owners.includes(ctx.message.from.id)) return;

    const msg = ctx.message.text.split(' ');
    const Port = msg[1];
    const Limit = msg[2];
    if (!Port || !Limit) return ctx.reply(`لطفا ورودی هارا به طور کامل وارد کنید`);
    
    db.set(Port, Number(Limit));
    return ctx.reply(`لیمیت پورت ${Port} با موفقیت به  ${Limit} ادیت شد`);
}