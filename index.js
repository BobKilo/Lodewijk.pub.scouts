require("dotenv").config()
require('events').EventEmitter.defaultMaxListeners = 20
const Discord = require('discord.js')
const {Client, MessageAttachment} = require('discord.js');
const client = new Discord.Client()


// het bericht in cmd als alles werkt
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}! We hebben er zin an!`)
})


//intro
client.on("message", msg => {
  if (msg.content === "!Lodewijk"){
    msg.reply("Hoi, ik ben Lodewijk de virtuele elandbot. Dit is een beknopte lijst met mijn functies:   //flauwe reacties op willekeurige woorden//    //de (oude) Scoutingwet//   //ongepaste woorden verwijderen//    //je helpen met artikelen op wikipedia zoeken//")
  }

})

//ping
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong!")
  }
})

//pindakaas
client.on("message", msg => {
  if (msg.content === "helaas") {
    msg.reply("pindakaas")
  }
})

//Job
client.on("message", msg => {
  if (msg.content.includes("bestaat mijn baan straks nog?")) {
    msg.reply("denk het niet Job!")
  }
})

//hekkie
client.on("message", msg => {
  if (msg.content.includes("hekkie") || msg.content === "#") {
    msg.reply("ik heb helemaal geen Hekkie, ik woon op de vierde etage.")
  }
})

//help
client.on("message", msg => {
  if (msg.content === "help" || msg.content === "!help") { 
    msg.reply("Lodewijk is een bot. Dat betekent dat hij alleen een paar voorgeprogrammeerde dingen kan. Mocht er iets stuk zijn, ga dan naar Bop")
   }
})

//Wonderwall
client.on("message", msg => { 
  if (msg.content === "anyway") {
    msg.reply("here's wonderwall: https://bit.ly/2VKATEv")
    console.log(`Wonderwall`)    }
})


//rickroll
client.on("message", msg => { 
  if (msg.content.includes("rick")) {
    msg.reply("https://bit.ly/2Dj15gq")
    console.log(`Rickroll`)    }
})

//huidige scoutingwet. let op de spelling
client.on("message", msg => {
  if (msg.content.includes("scoutingwet")) {
    msg.reply("Een scout trekt er samen met anderen op uit om de wereld te ontdekken en deze meer leefbaar te maken. Een scout is eerlijk, vriendelijk en zet door. Een scout is trouw, waardebewust en zorgt goed voor de natuur. Een scout is behulpzaam en respecteert zichzelf en anderen.")
  }
}) 

//oude scoutswet. let op de spelling.
client.on("message", msg => {
  if (msg.content.includes("oude scoutswet")) {
    msg.reply("Een scout trekt er samen met anderen op uit om de wereld om zich heen te ontdekken en deze meer leefbaar te maken. Een scout is eerlijk, vriendelijk, trouw, spaarzaam, sober en zorgt goed voor de natuur. Een scout respecteer zichzelf en anderen.")
  }
}) 

//klopklop
client.on("message", msg => {
  if (msg.content.includes("klop klop")) {
    msg.reply("wie is daar?")
  }
})

//wikipedia2.0
client.on("message", msg => {
  if (msg.content.includes("wiki/") && !msg.content.includes(".org")) {
    const wikilinkEmbed = new Discord.MessageEmbed()
      .setColor('WHITE')
      .setTitle('Wikipedia met Lodewijk')
      .setURL(`https://nl.wikipedia.org/${msg.content}`)
      .setAuthor('Lodewijk', `https://www.schoolplaten.com/afbeelding-eland-dm10791.jpg`)
      .setThumbnail(`https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png`)
      .setTimestamp() 
      .setDescription(`Klik op 'Wikipedia met Lodewijk' om naar de wikipediapagina te gaan!`)
  msg.reply(wikilinkEmbed)
      }
})

//censureren
client.on('message', message => {
   if (message.content === 'lenny') {
 	message.delete() //This is the original message that triggered the message event.
 	message.channel.send("( ͡° ͜ʖ ͡°)") //Send a lenny face in response to the user saying "lenny"
     }	
 });//ik heb natuurlijk wel even netjes alle scheldwoorden eruit gehaald hoor jongens :). hierboven staat wel de code waarop ik de censuurfunctie van Lodewijk heb gebaseerd.
//ik heb alleen ipv `message.content ===` het volgende gebruikt zodat het ook in een zin werkt: `message.content.includes ()`

//koffie
client.on('message', message => {
    if (message.content.includes('!koffie')) {
       const attachment = new MessageAttachment('https://i.imgur.com/Y1Ozlix.png');
    message.channel.send(attachment)
    
  }
});

//thee.gif
client.on('message', message => {
  if (message.content.includes('!thee')) {
     const attachment = new MessageAttachment('https://i.imgur.com/bXcJN1e.gif');
  message.channel.send(attachment)
 
}
});

//koekjes
client.on('message', message => {
  if (message.content.includes('!koekjes')) {
     const attachment = new MessageAttachment('https://i.imgur.com/z5d6fDL.jpg');
  message.channel.send(attachment);
  
}
});


// de login voor de bot op de server heb ik er natuurlijk ook niet in laten staan :)
client.login(process.env.BOT_TOKEN)