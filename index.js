const { Client } = require('discord.js-selfbot-v13');
const client = new Client({intents:[32767],checkUpdate:false})

client.on("messageCreate",async(message) => {
if(message.content == "sahinthread" && message.author.id == "Owner ID") {
for(var i=1;i<=70;i++){  //70 yerine kaç tane açmasını istiyorsanız onu yazın
    message.guild.channels.cache.filter(x => x.type === "GUILD_TEXT").forEach(async(x) => await x.threads.create({name:"Thread Kanal İsmi"}))
}
//ravenn#0247
}    
})

client.on("ready" , async() => {
console.log("Giriş yapıldı!")
})
client.login("")//Token(Bot tokeni değil kullanıcı tokeni)
