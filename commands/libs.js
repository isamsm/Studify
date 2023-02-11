//  Libs i like to use

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const libsEmbed = new EmbedBuilder()
	.setColor('Green')
	.setTitle('Libs')
	.addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'react-elastic-carousel', value: 'Criação de carousel no react: https://www.npmjs.com/package/react-elastic-carousel', inline: true },
		{ name: 'react icons', value: 'Icones react: https://react-icons.github.io/react-icons/', inline: true }
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('libs')
        .setDescription('Bibliotecas mais utilizadas'),

    // Run when user interacts with bot

    async execute(interaction) {
        await interaction.reply({ embeds: [libsEmbed] })
    }
}