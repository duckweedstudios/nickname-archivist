import * as dotenv from 'dotenv';
dotenv.config();

import { Client } from "discord.js";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
client.login(process.env.token);

console.log(client);