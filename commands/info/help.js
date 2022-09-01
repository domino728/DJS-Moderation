const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix, BotName } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`⚙️ List Of Commands:`)
    .setAuthor(`${BotName} - Help Menu`, 'https://media.discordapp.net/attachments/922145225491767346/922539704996491264/2021-12-20_18_11_11-Window.png', 'https://discord.gg/7zrFC2NPrd')
    .setDescription(`**Commands:**Use ${Prefix}Help <Command Name> For More Command Information!` + `\n\n**Prefix:** ${Prefix}` + `\n**Embed Color:** ${Color}` + "\n\n😉 __Fun:__\n```yml\nascii: Generate a funny ascii text!\navatar: Show your discord avatar!\ncoinflip: Head or Tails?\nhack: Hack someone!\nhowgay: Test a user how gay is he!\nmeme: Show a random meme!\nrandomnumber: A random number just appeared!\nrate: The bot will rate something!\n```" + "\n\n" + "⚒ __Moderation:__\n```yml\nban: Ban someone on the server!\nclear: Clear/Purge a number of messages!\nkick: Kick a Member!\nmute: Mute a rules breaker!\nunban: Unban someone on the server!\nunmute: Let the member to chat again!\nwarn: Warn a user!\nwarnings: Check the user's warnings!\n```" + "\n\n"+
    "ℹ️ __Information:__\n```yml\nhelp: Show the help menu!\nping: Check the status responding of the bot!\nserverinfo: Read the server's info!\nuserinfo: Read the user's info!\nweather: Check the weather in your country!\n```")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
