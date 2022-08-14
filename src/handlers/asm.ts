import { ChatInputCommandInteraction } from "discord.js";
import { commandObject } from "../commandObject";

export class asm extends commandObject {
    override name = "asm";
    override description = "Saves and runs stored procedures written in swordsage assembly."
    run(interaction:ChatInputCommandInteraction){
        
    }
}