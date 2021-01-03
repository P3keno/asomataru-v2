module.exports = {
    name: 'profile',
    aliases: ['stats'],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 0,
    exec: async (client, message, args) => {
      const { userProfile } = require('../../scripts/profile/newProfile.js')
      const Discord = require('discord.js');

      let member = message.guild.member(message.mentions.users.first() || message.author)
      if(member.user.bot) return message.reply(`That is a bot.`)
    
  
      const userStats = [
        `Balance: ${userProfile.profile.coins} Coins`,
        `HP: ${userProfile.stats.hp} Health`,
        `Level: ${userData.experience.level}`,
        `XP: ${userData.experience.xp} XP`,
        `XP to Level Up: ${userData.experience.xptoNextLevel}`,
        ` `,
       /* `**Fish**`,
        `Salmon: ${userData.fish.salmon}`,
        `Bass: ${userData.fish.bass}`,
        `Eels: ${userData.fish.eel}`,
        `Pufferfish: ${userData.fish.pufferfish}`
        */
      ]
      

      const embed = new Discord.MessageEmbed()
      .setTitle(`${member.user.username}'s Stats`)
      .setDescription(userStats)
      .setFooter('Asomataru RPG System v0.2 Beta!')
      message.channel.send(embed)
      }
    }