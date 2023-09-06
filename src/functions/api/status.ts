

import axios from 'axios';
import { Panel } from '../../../config.json';
import { ConvertBytes, CPUPercent, CPUSpeed, convertSecondsToDays } from '../public';

export default async (token: string) => {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: Panel.BaseURL + 'server/status',
            headers: {
                'Content-Type': 'application/json',
                Cookie: token
            },

        };
        axios.request(config).then((response: {
            data: {
                obj: {
                    cpu: number
                    cpuCores: number,
                    cpuSpeedMhz: number,
                    mem: {
                        current: number,
                        total: number
                    },
                    disk: {
                        current: number,
                        total: number
                    },
                    xray: {
                        state: string,
                        version: string
                    },
                    netTraffic: {
                        sent: number,
                        recv: number
                    },
                    publicIP: {
                        ipv4: string,
                        ipv6: string
                    },
                    appStats: {
                        threads: number,
                        mem: number,
                        uptime: number
                    }
                    uptime: number,

                }
            }
        }) => {
            const data = {
                CPU: CPUPercent(response.data.obj.cpu),
                CPUSpeed: CPUSpeed(response.data.obj.cpuSpeedMhz),
                CPUCore: response.data.obj.cpuCores,
                MemoryUsage: ConvertBytes(response.data.obj.mem.current),
                MemoryTotal: ConvertBytes(response.data.obj.mem.total),
                DiskUsage: ConvertBytes(response.data.obj.disk.current),
                DiskTotal: ConvertBytes(response.data.obj.disk.total),
                Uptime: convertSecondsToDays(response.data.obj.uptime) + 'd',
                TotalSend: ConvertBytes(response.data.obj.netTraffic.sent),
                TotalRecv: ConvertBytes(response.data.obj.netTraffic.recv),
                IPV4: response.data.obj.publicIP.ipv4,
                IPV6: response.data.obj.publicIP.ipv6,
                Xray: {
                    MemoryUsage: ConvertBytes(response.data.obj.appStats.mem),
                    Threads: response.data.obj.appStats.threads,
                    Uptime: convertSecondsToDays(response.data.obj.appStats.uptime) + 'd',
                    State: response.data.obj.xray.state,
                    Version: response.data.obj.xray.version
                }
            }
            resolve({ msg: 'وضعیت پنل xui شما', data })
        }).catch((error) => {
            reject({ msg: 'عملیات با خطا مواجه شد\n' + error })
        });
    });
}