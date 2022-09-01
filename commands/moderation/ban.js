const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ban",
  aliases: [],
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `:x: You Don't Have Permission To Use This Command!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `:x: Please Mention A Member That You Want To Ban!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`:x: Please Mention A Valid Member!`);

    if (Member.id === message.author.id)
      return message.channel.send(`:x: You Can't Ban Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`:x: You Can't Ban Bots!`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`:x: You Can't Ban Owner Of Server!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`:x: I Can't Ban That Member!`);

    try {
      console.log(`✅ Member Is Going To Get Ban!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`🔨 Member Banned!`)
        .addField(`-Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`-Banned Member`, `${Member.tag} (${Member.id})`)
        .addField(`-Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `:warning: You Have Been Banned From **${message.guild.name}** For ${Reason ||
            "No Reason Provided!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Just Got Banned From ${
          message.guild.name
        } For ${Reason || "No Reason Provided!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `:x: I Can't Ban That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};
