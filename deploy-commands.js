// Run when there is a new command or when we want to delete or edit 

const { REST, Routes } = require('discord.js')

// DOTENV

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// Commands imports

const fs = require('node:fs') // Node module to deal with files
const path = require('node:path') // Node module to navigate between folders
const commandsPath = path.join(__dirname, 'commands') // Dirname = Directory name
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

const commands = []

for (const file of commandFiles) { 
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
 }

// REST Instance

const rest = new REST({version: "10"}).setToken(TOKEN);

// DEPLOY

(async () => {
    try {
        console.log(`Resentando ${commands.length} comandos...`)
    
        // PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
            console.log("Commands created with sucess!")
    }
    catch (error){
        console.error(error)
    }
})()