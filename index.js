const Discord = require('discord.js') //定義Discord需要用到discord.js
const client = new Discord.Client() //定義client為新的discord client || client跟bot是一樣的意思
const config = require('./config.json') //定義config需要config.json

client.on('ready', () => { //這裡是指client ready的時候
    console.log(`已登入 ${client.user.tag}!`) //傳到log說 已登入
})

client.login(config.token)
