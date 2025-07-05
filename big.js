   
import 'dotenv/config'; // carrega o .env automaticamente
	
import { REST, Routes } from 'discord.js';
			
	import {Client,Events ,GatewayIntentBits } from 'discord.js';





	
		const commands =

[ {


			name:"bot",
			description:'Replies with Pong!'


		}
]


		const rest = new REST({version:'10'}).setToken(process.env.DISCORD_TOKEN);



		try{


			console.log('Started');


		await rest.put(Routes.applicationCommands("1390261631589814342"), {body:commands})

	console.log("Sucesso")



			}catch(error){


			console.log(error);
		}


	const client = new Client ({intents: [GatewayIntentBits.Guilds] });


	client.on(Events.ClientReady , readyClient => {

	console.log (` Logged in as ${readyClient.user.tag}!`);
		
	})


	client.on(Events.InteractionCreate,async interaction =>{

		if(!interaction.isChatInputCommand()) return ;

		
	if(interaction.commandName === 'bot'){
	
	await interaction.reply('Cara vai arranjar o que fazer nao enche ');

}


	});



client.login(process.env.DISCORD_TOKEN)