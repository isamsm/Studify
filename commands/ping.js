// Verify if bot is online. We ask 'ping' and it responds 'pong'

const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com pong'),

    // Run when user interacts with bot

    async execute(interaction) {
        await interaction.reply('Pong')
    }
}