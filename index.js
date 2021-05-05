const Discord = require('discord.js');
const client = new Discord.Client();

const {prefix,token} = require('./config.json');

client.once('ready', () => {
    console.log("im getting bitches tonight");
});

client.login(token)

client.on('message', message => {
    if(message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        if(command == "roll"){
            rollDice(message);
        }
    }
})

const rollDice = (message) =>{
    diceState = [0,0,0,0,0];
    diceState[0] = rollWildDice();
    diceState.forEach((currentValue, index) => {
        if(currentValue == 0){
            value = Math.floor(Math.random() * (7-1) +1);
            value = correctDie(value, false);
            diceState[index] = value;
        }
    });
    sendDice(message, diceState);
}
const rollWildDice = () => {
    value = Math.floor(Math.random() * 6);
    value = correctDie(value, true);
    return value;
}
const sendDice = (message, dice) =>{
    message.channel.send(dice);
}
const correctDie = (value, isWild) =>{
    if(value == 1){
        return":keycap_ten:";        
    }
    else if(value == 2){
        return ":two:";
    }
    else if(value == 3 && !isWild){
        return ":three:";
    }
    else if(value == 3 && isWild){
        return ":sunny:";
    }
    else if(value == 4){
        return ":four:";
    }
    else if(value == 5){
        return ":five:";
    }
    else if(value == 6){
        return ":six:";
    }
    console.log(value);
    return value;
}

/*
start game command with a goal points in the arguments

*/