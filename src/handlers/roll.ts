import { ChatInputCommandInteraction, CacheType } from "discord.js";
import { stringify } from "querystring";
import { commandObject } from "../commandObject";
export class roll extends commandObject {
    override name = "roll";
    override description = "rolls dice based on roll20 syntax";
    override run(interaction: ChatInputCommandInteraction<CacheType>): void {
        const input = interaction.options.getString("parameter") ?? ""
        const regexp = /(\d+)(d)(\d+)([k\+])?(\d*)/
        let match = regexp.exec(input);
        console.log(match)
        match?.forEach((val)=>console.log(val));
        }
    }
