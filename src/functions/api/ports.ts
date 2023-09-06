import axios from 'axios';
import { Panel } from '../../../config.json';

export default async (token: string) => {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: Panel.BaseURL + 'panel/inbound/list',
            headers: {
                'Content-Type': 'application/json',
                Cookie: token
            }
        };

        axios.request(config).then((response: { data: { obj: Array<{}> } }) => {
            console.log();
            resolve({ msg: 'وضعیت پورت های شما', data: response.data.obj })
        }).catch((error) => {
            reject({ msg: 'عملیات با خطا مواجه شد\n' + error })
        })
    });
}