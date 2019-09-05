const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 1,
     name: 'قصتي',
     details: `غلطة بحق اعز ناس عندي  `,
     url: 'http://twitch.tv/iizervxyt',
     state: ` ونفسي يسامحوني بس الفرص راحت `,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'My Best Friends',
        large_image: `377480353259978752`,
        large_text: ` Im Sorry` }

    
    
    
    
    
 

    
    
    
    
    
    
  }
    });
});





client.login("NDMxNTUzMTE1MjkzMjIwODc2.XXFpdw.uVKSQwtXk-y3wDZSS0BzipPIE4g");
