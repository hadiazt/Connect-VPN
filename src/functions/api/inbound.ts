import axios from 'axios';
import { Panel } from '../../../config.json';
import { CheckPort, ConvertBytes } from '../public';

export default async (token: string, id: string) => {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: Panel.BaseURL + 'panel/api/inbounds/get/' + id,
            headers: {
                'Content-Type': 'application/json',
                Cookie: token
            }
        };

        axios.request(config).then((response: {
            data: {
                obj: {
                    up: number,
                    down: number,
                    remark: string,
                    port: number,
                    protocol: string
                }
            }
        }) => {
            CheckPort(response.data.obj.port).then((res: any) => {
                if (!res[1]) res = 0; else res = res.length
                const data = {
                    Name: response.data.obj.remark,
                    Port: response.data.obj.port,
                    Protocol: response.data.obj.protocol,
                    Download: ConvertBytes(response.data.obj.down),
                    Upload: ConvertBytes(response.data.obj.up),
                    Connection: Number(res)
                }

                resolve({ msg: `وضعیت پورت شماره ${data.Port}\nبرای دیدن ایپی کاربران متصل روی دکمه آن کلیک کنید`, data });
            }).catch((error: { msg: string }) => {
                reject({ msg: 'عملیات با خطا مواجه شد\n' + error });
            });
        }).catch((error) => {
            reject({ msg: 'عملیات با خطا مواجه شد\n' + error });
        });
    });
}