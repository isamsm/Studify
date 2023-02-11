const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Minha playlist'),

    // Run when user interacts with bot

    async execute(interaction) {
        await interaction.reply('https://open.spotify.com/playlist/48YP07c0BEYnFrAx1BNyfL?si=791ccdba74e84c57')
    }
}