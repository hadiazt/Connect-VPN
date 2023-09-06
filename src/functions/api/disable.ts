import axios from 'axios';
import { Panel } from '../../../config.json';
import { CheckPort, ConvertBytes } from '../public';

export default async (token: string, id: string, port: string) => {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: Panel.BaseURL + 'panel/inbound/update/' + id,
            headers: {
                'Content-Type': 'application/json',
                Cookie: token
            },
            data: {
                enable: false,
                remark: 'BANNED (Over Connection)',
                port
            }
        };

        axios.request(config).then((response: any) => {
            resolve({ msg: 'عملیات با موفقیت انجام شد' })
        }).catch((error) => {
            reject({ msg: 'عملیات با خطا مواجه شد\n' + error });
        });
    });
}