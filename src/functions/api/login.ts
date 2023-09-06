import axios from 'axios';
import { Panel } from '../../../config.json';

export default async () => {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: Panel.BaseURL + 'login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                username: Panel.UserName,
                password: Panel.Password
            }
        };
        axios.request(config).then((response) => {
            const token = response.headers['set-cookie'][0].split(';')[0];        
            resolve({ msg: 'عملیات با موفقیت انجام شد', token });
        }).catch((error) => {
            reject({ msg: 'عملیات با خطا مواجه شد\n' + error });
        });
    });
}