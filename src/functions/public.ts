export const CPUPercent = (Entry: number) => {
    const Usage = (Entry.toFixed(1)) + "%";
    return Usage;
}

export const CPUSpeed = (Entry: number) => {
    const SpeedGhz = (Entry / 1000).toFixed(2) + " GHz";
    return SpeedGhz;
}

export const ConvertBytes = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const formattedSize = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
    return `${formattedSize} ${sizes[i]}`;
}

export const convertSecondsToDays = (time: number) => {
    const days = Math.round(time / (24 * 60 * 60));
    return days;
}


import { exec } from 'child_process';

export const CheckPort = (port: number) => {
    const command = `netstat -n | grep :${port} | awk "{print $5}" | cut -d: -f1 | sort | uniq`;
    return new Promise((resolve, reject) => {
        exec(command, (error: any, stdout: any, stderr: any) => {

            if (error) {
                reject({ msg: `Error executing command: ${error}` })
            }

            if (stderr) {
                reject({ msg: `Error executing command: ${stderr}` })
            }

            const IPS = stdout.trim().split('\n');
            resolve(IPS)
        });
    });
}

import { GetPorts, Login } from './routes';
import { Owners, DefaultLimit } from '../../config.json';
import { Database } from 'beta.db';
const db = new Database('limit.json');

export const AutoPortChecker = (bot: { telegram: { sendMessage: Function } }) => {
    var limit: number;
    Login().then((res: { token: string }) => {
        GetPorts(res.token).then((res: { data: Array<{ port: number, id: number }> }) => {
            res.data.forEach(ports => {
                CheckPort(ports.port).then((ip: Array<{}>) => {
                    if (db.get(String(ports.port))) limit = db.get(String(ports.port)); else limit = DefaultLimit;
                    if (ip[0] && Number(ip.length) > Number(limit)) {
                        Owners.forEach((Owner: number) => {
                            bot.telegram.sendMessage(Owner, `تعداد کاربران متصل به پورت ${ports.port} بیش از ${limit} است\n مشخصات : \n${ip.join("\n")}\nبرای غیرفعال کردن پورت روی دکمه زیر کلیک کنید`, {
                                reply_markup: {
                                    inline_keyboard: [
                                        [{ text: '❌ غیرفعال سازی ❌', callback_data: `Disable_${ports.id}_${ports.port}` }]
                                    ]
                                }
                            })
                        });
                    }
                }).catch((e: { msg: string }) => {
                    Owners.forEach((Owner: number) => {
                        bot.telegram.sendMessage(Owner, e.msg)
                    });
                })
            });
        }).catch((e: { msg: string }) => {
            Owners.forEach((Owner: number) => {
                bot.telegram.sendMessage(Owner, e.msg)
            });
        });
    }).catch((e: { msg: string }) => {
        Owners.forEach((Owner: number) => {
            bot.telegram.sendMessage(Owner, e.msg)
        });
    });
}
