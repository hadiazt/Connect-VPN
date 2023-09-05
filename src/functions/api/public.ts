import { Database } from 'beta.db';
const db = new Database('./src/data/config.json');

export const AdminAdd = (ID: any) => {
    return new Promise((resolve, reject) => {
        try {
            if (db.get('Admins').includes(ID)) {
                reject({ msg: 'لطفا ایدی عددی را بصورت صحیح وارد کنید' })
            } else {
                db.push('Admins', ID)
                resolve({ msg: "با موفقیت انجام شد" })
            }
        } catch (error) {
            reject({ msg: 'درانجام فرایند خطایی رخ داده است' + error })
        }
    })
}


export const AdminRem = (ID: any) => {
    return new Promise((resolve, reject) => {
        try {
            // if (!db.get('Admins').includes(ID)) {
                // reject({ msg: 'لطفا ایدی عددی را بصورت صحیح وارد کنید' })
            // } else {
                db.delete('Admins', ID)
                // resolve({ msg: "با موفقیت انجام شد" })
            // }
        } catch (error) {
            reject({ msg: 'درانجام فرایند خطایی رخ داده است' + error })
        }
    })
}
export const SetConnectionLimit = (Count: string) => {
    return new Promise((resolve, reject) => {
        try {
            db.set('ConnectionLimit', Count)
            resolve({msg:`محدودیت اتصال باموفقیت به ${Count} تغییر پیدا کرد`})
        } catch (error) {
            reject({ msg: 'درانجام فرایند خطایی رخ داده است' + error })
        }
    })
}