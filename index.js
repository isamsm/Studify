// Discord classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

// DOTENV

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// Commands imports

const fs = require('node:fs') // Node module to deal with files
const path = require('node:path') // Node module to navigate between folders
const commandsPath = path.join(__dirname, 'commands') // Dirname = Directory name
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

// Create a new client instance

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command)
	} else {
		console.log (`This command in ${filePath} is without 'data' or 'execute'`)
	}
}

// Bot login

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
});
client.login(TOKEN)

// Interactions listener

client.on(Events.InteractionCreate, async interaction => {
	if(interaction.isStringSelectMenu()) {
		const selected = interaction.values[0]
		switch(selected) {
			case 'javascript':
				await interaction.reply('Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript')
				break;
			case 'bootstrap':
				await interaction.reply('Documentação do Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/introduction/')
				break;
			case 'react':
				await interaction.reply('Documentação do React: https://reactjs.org/docs/getting-started.html')
				break;
			case 'next':
				await interaction.reply('Documentação do Next: https://nextjs.org/docs/getting-started')
				break;
			case 'php':
				await interaction.reply('Documentação do PHP: https://www.php.net/docs.php')
				break;
		}
	}

	if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
	if (!command) {
		console.error('Command not found!')
		return
	}
	try {
		await command.execute(interaction)
	} catch (error) {
		console.error(error)
		await interaction.reply('There was an error when running this command!')
	}
})