console.log('illya ready'); 
const Discord = require('discord.js');
const bot = new Discord.Client();
//const config = require('./config.json');
var hate = ["./image/hate1.gif","./image/hate2.gif","./image/hate3.jpeg"];
var mad = ["./image/mad1.gif","./image/mad2.jpg","./image/mad3.jpg"];
var surprise = ["./image/surprise1.jpg","./image/surprise2.jpg"];

bot.on('ready', () =>{
	bot.user.setActivity('bot en heroku', {type: 'WATCHING'});
	bot.user.setActivity("Fate Grand Order");
})

bot.on('message', (message) =>{
	if (message.author.bot) return;

	
	if (message.channel.id ==="232105489440178176") {
		if(message.content.startsWith("https") || message.content.startsWith("http")){
			message.delete()
			message.channel.send('en este canal no se pueden enviar videos, ni noticias, ni tampoco memes.... ¿de acuerdo? '+ message.author.username )
			message.channel.sendFile("./image/surprise1.png")
		}
	}

	if(message.content == 'hola illya' || message.content == 'Hola illya' || message.content == "Hola Illya" || message.content == "hola Illya " ){
		message.channel.send('Hola! '+message.author.username+' :D');
	}

	if(message.content =='User1' && message.author.username == "Aozora"){
		message.channel.send("User1...Kabumm ");
		message.channel.sendFile("./image/User_death.gif");
	}

	if(message.content =='User dejalo'){
		message.channel.send("User...Deja de molestar lo demas miembros del server... ¿si?");
		message.channel.sendFile("./image/User_death.gif");
	}
	
	if(message.content == '.hate'){
		var seleccionHate = (Math.floor(Math.random() * hate.length));
		message.channel.sendFile(hate[seleccionHate]);
	}  

	if(message.content == '.mad'){
		var seleccionMad = (Math.floor(Math.random() * mad.length));
		message.channel.sendFile(mad[seleccionMad]);
	} 

	if(message.content == '.surprise'){
		var seleccionSurprise = (Math.floor(Math.random() * surprise.length));
		message.channel.sendFile(surprise[seleccionSurprise]);
	} 

	if(message.content.startsWith('.avatar')){

		let img = message.mentions.users.first()
		if (!img) {
  
			const embed = new Discord.RichEmbed()
			.setImage(`${message.author.avatarURL}`)
			.setColor(0x66b3ff)
			.setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
			message.channel.send({ embed });
  
		} else if (img.avatarURL === null) {
  
			message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");
  
		} else {
  
			const embed = new Discord.RichEmbed()
			.setImage(`${img.avatarURL}`)
			.setColor(0x66b3ff)
			.setFooter(`Avatar de ${img.username}#${img.discriminator}`);
			message.channel.send({ embed });
  
		};
  
	}

	if (message.content.startsWith(".ping")) {

		let ping = Math.floor(message.client.ping);
		message.channel.send(":ping_pong: Pong!")
		.then(m => {
			
			m.edit(`:incoming_envelope: Ping Mensajes: \`${m.createdTimestamp - message.createdTimestamp} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
		});
		
	}

	if(message.content.startsWith('.decir')){
		const content = message.content.split(' ').slice(1);
		const args = content.join(' ');
				
		if(!args) return message.channel.send(`Escriba un contenido pára decir.`);
		message.channel.send(`${args}`);
	}

	if(message.content.startsWith('¿Cual es la informacion del servidor illya?')){

		var server = message.guild;
	  
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
		.setAuthor(server.name, server.iconURL)
		.addField('ID', server.id, true)
		.addField('Region', server.region, true)
		.addField('Creado el', server.joinedAt.toDateString(), true)
		.addField('El master del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
		.addField('Masters convocados', server.memberCount, true)
		.addField('Roles', server.roles.size, true)
		.setColor(0x66b3ff)
		
	   message.channel.send({ embed });
	
	}
	
	if(message.content.startsWith('.master')){
		let userm = message.mentions.users.first()
		if(!userm){
		  var user = message.author;
		  
			const embed = new Discord.RichEmbed()
			.setThumbnail(user.avatarURL)
			.setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
			.addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
			.addField('ID', user.id, true)
			.addField('Estado', user.presence.status, true)
			.addField('Apodo', message.member.nickname, true)
			.addField('Cuenta Creada', user.createdAt.toDateString(), true)
			.addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
			.addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
			.setColor(0x66b3ff)
			
		   message.channel.send({ embed });
		}else{
		  const embed = new Discord.RichEmbed()
		  .setThumbnail(userm.avatarURL)
		  .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
		  .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
		  .addField('ID', userm.id, true)
		  .addField('Estado', userm.presence.status, true)
		  .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
		  .setColor(0x66b3ff)
		  
		 message.channel.send({ embed });
		}
		
	  }

  	if(message.content === '.help illya'){
  		message.channel.sendMessage({embed: {
			color:3447003,
			author: {
				name: bot.user.username,
				icon_url: bot.user.avatarURL
			},
			title: "Comandosl",
			fields:[{
				name:"Hechizo de comando 1",
				value: "**.avatar** / Soy capaz de mostrar tu imagen en el chat",
			},{
				name:"Hechizo de comando 2",
				value: "**.mad, .hate, .surprise**/ Te enseño uns descripción gráfica de lo que representan esas situaciones :D ",
			},{
				name:"Hechizo de comando 3",
				value:"**.master**/ Dare información del master que ejecute este hechizo de comando",
			}],
			timestamp: new Date(),
     		 footer: {
        	icon_url: bot.user.avatarURL,
        	text: "Creador Aozora"
     		}
		  }
		});
  	}
	
});

bot.on('guildMemberAdd', member =>{
	const channel = member.guild.channels.find('name', 'bienvenida');
	 if (!channel) return;
	 channel.send(`Bienvenido al server, ${member}`);
});

bot.login(process.env.TOKEN);