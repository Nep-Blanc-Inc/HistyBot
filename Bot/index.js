const Discord = require('discord.js');
const bot = new Discord.Client({
    commandPrefix: 'histy',
    owner: '220737168857890816',
    disableEveryone: true,
    unknownCommandResponse: false
});
const { prefix, token , badwords } = require('./config.json');

var privateMode = false;
var lastBadWord = "nothing";

//welcome message for B.L.A.N.C.
bot.on('guildMemberAdd', member => {
	let welcomeChannel = member.guild.channels.cache.get('670096957515104270');
	welcomeChannel.send(`Welcome ${member.user} :sparkling_heart:`);
	welcomeChannel.send("https://media.discordapp.net/attachments/685898272308461596/685898914351546388/SPOILER_unknown.png");
});

//histy say commands
bot.on('message', message => {
	if (message.content.toLowerCase().startsWith(`${prefix}`) && (!privateMode || (message.author.id == "220737168857890816"))){
		var msg = message.content.split(" ");
		let guild = message.member.guild;
		if(msg.length > 4 && msg.length < 32){ //4+ words, can either be say or say in general
			if(msg[0].toLowerCase() == "histy" && msg[1].toLowerCase() == "say"){
				if(msg[2].toLowerCase() == "in" && msg[3].toLowerCase() == "general"){ //say in general
					msg[0] = " ";
					msg[1] = " ";
					msg[2] = " ";
					msg[3] = " ";
					guild.channels.cache.get('670096957515104270').send(msg.join(" "));
				}
				else{ //just say
					msg[0] = " ";
					msg[1] = " ";
					message.channel.send(msg.join(" "));
				}
				message.delete();
			}
		}
		else if (msg.length <= 4){ //4 or less words, this is say
			if(msg[0].toLowerCase() == "histy" && msg[1].toLowerCase() == "say")
			{
				msg[0] = " ";
				msg[1] = " ";
				message.channel.send(msg.join(" "));
				message.delete();
			}
		}
	}
});

//private histy toggle
bot.on('message', message => {
    if((message.content.toLowerCase() == "private histy" || message.content.toLowerCase() == "shut up histy") && (message.author.id == "220737168857890816" || message.author.id == "306801255274250243")) {
        if (!privateMode)
		{
			privateMode = true;
			message.channel.send(":x");
		}
		else
		{
			privateMode = false;
			message.channel.send(":)");
		}
    }
	else if((message.content.toLowerCase() == "public histy" || message.content.toLowerCase() == "ok histy") && (message.author.id == "220737168857890816" || message.author.id == "306801255274250243"))
	{
		privateMode = false;
		message.channel.send(":)");
    }
});

//warning for telling histy to say bad words :c
bot.on('message', message => {
	if(message.author.id == "683354722501001359")
	{
		var msg = message.content.split(" ");
		for (var i = 0; i < msg.length; i++) {
			if(msg[i].toLowerCase() != lastBadWord && badwords.includes( msg[i].toLowerCase() ))
			{
				lastBadWord = msg[i];
				message.channel.send("Waaah!! <@220737168857890816> someone made me say a really bad word... *sob*");
			}
			else if (msg[i].toLowerCase() == "love" || msg[i].toLowerCase() == "luv") {
				message.channel.send("BTW I dont.");
			}
			else if (msg[i].toLowerCase()  == "kiss") {
				message.channel.send("EWWW >_<");
			}
		}
	}
});

//asking for bad word
bot.on('message', message => {
	if(message.author.id == "220737168857890816") {
		if(message.content.toLowerCase() == "what word" && lastBadWord != "nothing") {
			message.channel.send("Forced me to say......");
			message.channel.send(lastBadWord);
			message.channel.send(">_<");
		}
	}
});

//reactions
bot.on('message', message => {
	switch(message.content.toLowerCase()){
		case 'hi histy':
			message.channel.send('Hello... You know my name is Histoire, right?');
			break;
		case 'histy!':
		case 'no you are histy':
			message.channel.send("<:histymad:681138315205804041>");
			break;
		case 'nya':
		case ':3':
			message.channel.send('Nya, cute kitty!');
			break
			break;
		case 'pat':
		case 'headpat':
		case 'headpats':
		case '<:tanyapat:680448819292667924>':
			message.channel.send('Headpats?');
			break;
		case 'bad histy':
			message.channel.send('Meanie :(');
			break;
		case '<:whiteanger:683041842513838116>':
		case '<:blancrage:670104377029033985>':
		case '<:blancmad:681139377795367029>':
		case '<:whiteanger:684377105047486485>':
			message.channel.send('WAIT! Calm down Blanc!');
			break;
		case '<:blancsad:670104422147424279>':
			message.channel.send(':c');
			break;
		case 'histy is cute':
		case 'cute histy':
		case 'nice histy':
			message.channel.send("<:misakamad:679417727114280973>");
			break;
		case 'poor histy':
		case 'thanks histy':
		case 'thank you histy':
		case 'ty histy':
		case 'thx histy':
		case 'good job histy':
		case 'gj histy':
			message.channel.send("It's OK. I'm glad I could be of help! :)");
			break;
		case 'histy dab':
		case 'histy use dab':
			message.channel.send("<:histydab:684513384267644932>");
			break;
		case 'histy >_<':
		case 'histy ree':
			message.channel.send("<:histyree:685173298853838958>");
			break;
		case 'nepu':
			if(message.author.id == "306801255274250243" || message.author.id == "220737168857890816") {
				message.channel.send("<:whitenya:670104377239011339>");
				message.channel.send("BLANCU!!!");
			}
			else if (message.author.id == "179544858590052353"){
				message.channel.send("Veru..");
				message.channel.send("<:nowastare:679419478752100353>");
			}
			else if (message.author.id == "696761279754272825"){
				message.channel.send("nepupu");
				message.channel.send("<:tanyadab:680448098232696842>");
			}
			else if (message.author.id == "224498530209890306"){
				message.channel.send("ne.... puuu");
				message.channel.send("<:pluuthappy:684371067359330304>");
			}
			else {
				message.channel.send("<:nephaha:679419479289233428>");
				message.channel.send("NEPU!");
			}
		break;
		case 'histy die':
			if(message.author.id == "306801255274250243" || message.author.id == "220737168857890816") {
				message.channel.send(">_<");
				bot.destroy();
			}
		break;
		
		case "histy pat me":
			if(message.author.id == "306801255274250243" || message.author.id == "220737168857890816") {
				message.channel.send("gives pats");
			}
			else message.channel.send("I don't pat strangers. Get lost.");
		break;
		
		//team rocket motto
		case 'prepare for trouble':
			message.channel.send("Make it double!");
		break;
		case 'to protect the world from devastation':
			message.channel.send("To unite all peoples within our nation!");
		break;
		case 'to denounce the evils of truth and love':
			message.channel.send("To extend our reach to the stars above!");
		break;
		case 'team rocket blast off at the speed of light':
			message.channel.send("Surrender now, or prepare to fight!");
			message.channel.send("Meow! That's right!");
		break;
		
		//archer chant
		case 'i am the bone of my sword':
			message.channel.send("Steel is my body and fire is my blood.");
		break;
		case 'i have created over a thousand blades':
			message.channel.send("Unknown to death, nor known to life.");
		break;
		case 'have withstood pain to create many weapons':
			message.channel.send("Yet, those hands will never hold anything.");
		break;
		case 'so as i pray':
			message.channel.send("Unlimited Blade Works!");
		break;
		
		//castlevania
		case 'die monster you dont belong in this world':
			message.channel.send("It was not by my hand that i was given flesh once again. I was brought here by HUMANS who wish to pay me tribute.");
		break;
		case 'tribute? you steal men soul and make them your slaves':
			message.channel.send("Perhaps the same could be said about all religions.");
		break;
		case 'your words are as empty as your soul mankind ill needs a savior such as you':
			message.channel.send("What is a man??!! But a miserable little pile of secrets. But enough talk. Have at you!");
		break;
		
		//castlevania uno run
		case 'i dont have it i have the strongest whip known to man':
			message.channel.send("No you dont, I got mine day one you fucking fleaman.");
		break;
		case 'well i didnt get it and':
			message.channel.send("You have UNO you FUCKING DICK");
		break;
		case 'i dont have it you fucking monster':
			message.channel.send("YOU HAVE UNO!!!");
		break;
		case 'i dont have fucking uno motherfucker i dont have two':
			message.channel.send("Ritcher!! *throws glass* Go into an arcade and you will be able to download it for free,");
		break;
		case 'i dont have three i dont have fucking four five six':
			message.channel.send("You know what? I dont give a fuck, its a fucking card game!");
		break;
		case 'seven eight nine ten or eleven or fucking uno i dont have uno i dont have it':
			message.channel.send("Its fucking UNO. Its free. ITS FREE!! FUCK!!!!");
		break;
		
		
		//song
		case 'almost heaven, west virginia':
			message.channel.send("Blue Ridge Mountains, Shenandoah River");
		break;
		case 'life is old there, older than the trees':
			message.channel.send("Younger than the mountains, growin' like a breeze");
		break;
		case 'country roads, take me home':
			message.channel.send("To the place I belong");
		break;
		case 'west virginia, mountain mama':
			message.channel.send("Take me home, country roads");
		break;
		case "all my memories gather 'round her":
			message.channel.send("Miner's lady, stranger to blue water");
		break;
		case 'dark and dusty, painted on the sky':
			message.channel.send("Misty taste of moonshine, teardrop in my eye");
		break;
		case 'country roads, take me home':
			message.channel.send("To the place I belong");
		break;
		case "i hear her voice in the mornin' hour, she calls me":
			message.channel.send("The radio reminds me of my home far away");
		break;
		case "drivin' down the road, i get a feelin'":
			message.channel.send("That I should've been home yesterday, yesterday");
		break;
		case "country roads, take me home":
			message.channel.send("To the place I belong");
		break;
		case "take me home, (down) country roads":
			message.channel.send("Take me home, (down) country roads");
		break;
	}
});

bot.login(token);