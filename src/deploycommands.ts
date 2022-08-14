import { REST } from "@discordjs/rest";
import { Routes, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js"
import { QUIT_COMMAND, SHUTDOWN_COMMAND, STARTUP_COMMAND, STATUS_COMMAND } from "./names";

const slashCommands = [
	new SlashCommandBuilder()
		.setName(STARTUP_COMMAND)
		.setDescription("Start Foundry. Only usable by the owner of this bot.")
		.toJSON(),
	new SlashCommandBuilder()
		.setName(SHUTDOWN_COMMAND)
		.setDescription("Shutdown foundry, only usable by the owner of this bot.")
		.toJSON(),
	new SlashCommandBuilder()
		.setName(STATUS_COMMAND)
		.setDescription("Check the status of the Swordsage bot.")
		.toJSON(),
	new SlashCommandBuilder()
		.setName(QUIT_COMMAND)
		.setDescription("Shuts the entire bot down")
		.toJSON()
];

(() => {
	if (process.env.DiscordToken == null || process.env.ClientID == null) {
		console.log("Environment variables not set. Please check the .env file for DiscordToken and ClientID")
		return;
	}
	new REST({ version: '10' }).setToken(process.env.DiscordToken).put(Routes.applicationCommands(process.env.ClientID), { body: slashCommands })
})()