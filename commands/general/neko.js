module.exports = {
    name: "neko",
    aliases: [],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 0,
    exec: async (client, message, args) => {
        /*const randomPuppy = require('random-puppy');
        const Discord = require('discord.js');
        const subReddits = ["awwnime"]
        //const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(subReddits);
    
        const embed = new Discord.MessageEmbed()
        .setImage (img)
        .setTitle (`**__This command is much better than Aka's!__**`)
        .setURL (`https://reddit.com/r/${subReddits}`)
        .setFooter (`From r/${subReddits}`)
    
        message.channel.send(embed);
        */
       const Discord = require('discord.js');
       const superagent = require('superagent');
       
        let { body } = await superagent
        .get('https://nekos.life/api/v2/img/neko');

        const embed = new Discord.MessageEmbed()
        .setTitle(`**Here is a neko! UwU`)
        .setImage(body.url)
        .setFooter('Powered by nekos.life')

        message.channel.send(embed);

    },
};
