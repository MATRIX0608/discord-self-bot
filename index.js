// import of files,lib
// const { Client , GatewayIntentBits } = require('discord.js-selfbot-v13');






//                    IMPORT OF LIB  
const { Client } = require('discord.js-selfbot-v13');
const { connecttovc } = require('./command/voice')
const { playmusic } = require('./media/media')





















// connection 
console.log('Starting bot...');

























// create a class 
const client = new Client();



























// temp 
/*
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

*/















//         create function 
client.on('ready', async () => {








  // function to tell 
  console.log(`Logged in as ${client.user.tag}`);










  // connect vc  function here
  // await connecttovc(client,"1502337192461074494","1502337193459449879");












  // connect vc with speak

  const connection = connecttovc(client,'1502337192461074494','1502337193459449879');






  //        play music
  if (connection) {
    playmusic(connection);
  } else {
    console.error("Failed to connect to voice channel");
  }






});








// login
client.login("MTM2OTMzNzY3MTE5Mjk0MDY4NQ.GbNknM.kLSR5tQCrE0OKrRPdnSrIhHUQwuHGRx9Op2VMM")

    