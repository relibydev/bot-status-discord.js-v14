const { Client, GatewayIntentBits, ActivityType } = require("discord.js");


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
})

client.on("ready", () => {
    client.user.setActivity("put the status here", { type: ActivityType.Playing });
    console.log("bot starts");

});

client.login("token here");