# An Telegram Bot For Connect-VPN Written With Telegraf.js
For Managing Panel Status/Users/IPs In [3x-ui](https://github.com/MHSanaei/3x-ui) Panel
- [API Postman Export](https://google.com/)
- [Panel](#panel)
- [Test Server](#test-server)
- [Installing Node.js Vx.x.x](#installing-nodejs)
- [Running](#running)

## Installing Node.js

```
sudo apt update && sudo apt upgrade
```

```
wget https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh
bash install.sh
```

```
source ~/.bashrc
```

```
nvm -v
0.39.1
```

```
nvm list-remote 
.......
        v17.7.0
        v17.7.1
        v17.7.2
        v17.8.0
        v17.9.0
        v18.0.0
```

```
nvm install v18
```

```
nvm install node
```

```
node -v
v18.0.0
```

```
nvm use 18
```

```
nvm alias default 18
```

## Running

set your data in config.json

install net tools
`sudo apt-get install net-tools`

install pm2 as global

`npm install -g pm2`

got to bot dir and run 

`npm install`

`npm run build`

`pm2 start`
