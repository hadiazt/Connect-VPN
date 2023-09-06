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
    const command = `netstat -n | grep :${port} | awk \'{print $5}\' | cut -d: -f1 | sort | uniq`;
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
