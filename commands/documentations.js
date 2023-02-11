const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js')

const row = new ActionRowBuilder()
    .addComponents (
        new StringSelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('Nada selecionado')
            .addOptions(
            {
                label: 'javascript',
                description: 'Veja a documentação do JavaScript',
                value: 'javascript'
            },
            {
                label: 'bootstrap',
                description: 'Veja a documentação do Bootstrap',
                value: 'bootstrap'
            },
            {
                label: 'react',
                description: 'Veja a documentação do REACT',
                value: 'react'
            },
            {
                label: 'next',
                description: 'Veja a documentação do NEXT',
                value: 'next'
            },
            {
                label: 'php',
                description: 'Veja a documentação do PHP',
                value: 'php'
            }
        )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName('docs')
        .setDescription('Documentação de suas tecnologias preferidas'),

    // Run when user interacts with bot

    async execute(interaction) {
        await interaction.reply({content: 'Selectione uma das tecnologias abaixo: ', components: [row]})
    }
}