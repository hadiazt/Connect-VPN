# Connect-VPN
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

## Panel 
```
http://t1.connectvpn.tech:8080/
mani
mani
```

## Test Server
```
89.185.84.230
22
root
Mani@78007800
```

## Running

do not do change config.json data

install net tools
`sudo apt-get install net-tools`

install pm2 as global

`npm install -g pm2`

got to bot dir and run 

`npm install`

`npm run build`

`pm2 start`