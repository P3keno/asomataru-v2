module.exports = {
    name: 'adventure',
    aliases: ['adventure'],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 60,
    exec: async (client, message, args) => {
        const User = require('../../models/userModel.js');
        const Discord = require("discord.js");

        let randomAmount = Math.floor(Math.random()* Math.floor(15)) // 1-15

        let data = await User.findOne({userID: message.author.id })
  
        if(!data) return message.channel.send('Please use the profile command to register for the bot.');
        else {

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} traveled and did some bounties!`)
        .setDescription(`${message.author.username} has earned ${randomAmount} credits.`)
        .setFooter('Asomataru RPG System v0.1 Beta!')

        message.channel.send(embed);
        
        data.account.coins = data.account.coins + randomAmount 
        data.save()
        }
    }
}