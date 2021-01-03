module.exports = {
    name: "cat",
    aliases: ['meow'],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 0,
    exec: async (client, message, args) => {
        const Discord = require('discord.js');
        const superagent = require('superagent');

        let {body} = await superagent
        .get("https://dog.ceo/api/breeds/image/random");

        const embed = new Discord.MessageEmbed()
        .setTitle (`**__Who is a good cuddly kitten!__**`)
        .setImage (body.url)
        .setFooter (`Powered by dog.ceo API`)
    
        message.channel.send(embed);
        },
    };