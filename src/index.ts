import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { exec } from 'node:child_process';
import { QUIT_COMMAND, SHUTDOWN_COMMAND, STARTUP_COMMAND, STATUS_COMMAND } from './names';
import * as sudoers from "../sudoers.json" 

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	// Sudoers.json is a file containing a single JSON array containing a list of discord user IDs.
	if (interaction.user.id in sudoers) {
		switch (interaction.commandName) {
			case STATUS_COMMAND:
				await interaction.reply("Swordsage is running fine.");
				break;
			case STARTUP_COMMAND:
				exec("pkill ngrok", (s, o, e) => { console.log(o); console.log(e) })
				exec("pkill foundry", (s, o, e) => { console.log(o); console.log(e) })
				exec("/home/arkevorkhat/src/docker/foundryServer/run.sh", (_, __, e) => { console.log(e) })
				await interaction.reply({ content: "Launching foundry VTT, await a message from the webhook." })
				break;
			case QUIT_COMMAND:
				await interaction.reply({ content: "Shutting down Sword Sage...", ephemeral: true })
				await client.user?.setStatus("invisible")
				client.destroy()
				break;
			case SHUTDOWN_COMMAND:
				exec("pkill ngrok", (s, o, e) => { console.log(o); console.log(e) })
				exec("pkill foundry", (s, o, e) => { console.log(o); console.log(e) })
				await interaction.reply({ content: "Foundry VTT shutting down. Thanks for playing tonight. The above link will not work in future." })
				break;
			default:
				break;
		}
	} else {
		switch (interaction.commandName) {
			case STATUS_COMMAND:
				await interaction.reply("Swordsage is running fine.");
				break;
		}
	}
});

client.login(process.env.DiscordToken);