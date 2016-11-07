var TelegramBot = require('node-telegram-bot-api');
var token = 'YOUR TOKEN HERE'; //Token here
//var exec = require('child_process').exec;
var bot = new TelegramBot(token, {polling: true});
var fs = require('fs');
var spawn = require('child_process').spawn;

//NSLookup
bot.onText(/\/nslookup (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var messageId = msg.message_id;
    var domain =  match[1];
    //var output = exec("nslookup " + domain, s);
    //var data = fs.readFileSync("nslookup.txt");
    var nslookup = spawn("nslookup", [domain]);


    nslookup.stdout.on('data', (data) => {

        console.log(domain);


        bot.sendMessage(chatId, data, {
        reply_to_message_id: messageId
    });


});


});

//NSLookup - SOA
bot.onText(/\/nslookupsoa (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var messageId = msg.message_id;
    var domain =  match[1];
    //var output = exec("nslookup " + domain, s);
    //var data = fs.readFileSync("nslookup.txt");
    var nslookup = spawn("nslookup", ["-type=soa", domain]);


    nslookup.stdout.on('data', (data) => {

        console.log(domain);


    bot.sendMessage(chatId, data, {
        reply_to_message_id: messageId
    });


});


});

//NSLookup - MX
bot.onText(/\/nslookupmx (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var messageId = msg.message_id;
    var domain =  match[1];
    //var output = exec("nslookup " + domain, s);
    //var data = fs.readFileSync("nslookup.txt");
    var nslookup = spawn("nslookup", ["-type=mx", domain]);


    nslookup.stdout.on('data', (data) => {

        console.log(domain);


    bot.sendMessage(chatId, data, {
        reply_to_message_id: messageId
    });


});


});

//NSLookup - TXT
bot.onText(/\/nslookuptxt (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var messageId = msg.message_id;
    var domain =  match[1];
    //var output = exec("nslookup " + domain, s);
    //var data = fs.readFileSync("nslookup.txt");
    var nslookup = spawn("nslookup", ["-type=txt", domain]);


    nslookup.stdout.on('data', (data) => {

        console.log(domain);


    bot.sendMessage(chatId, data, {
        reply_to_message_id: messageId
    });


});


});

//NSLookup - ALL
bot.onText(/\/nslookupall (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var messageId = msg.message_id;
    var domain =  match[1];
    //var output = exec("nslookup " + domain, s);
    //var data = fs.readFileSync("nslookup.txt");
    var nslookup = spawn("nslookup", ["-type=txt","-type=mx","-type=soa", domain]);


    nslookup.stdout.on('data', (data) => {

        console.log(domain);


    bot.sendMessage(chatId, data, {
        reply_to_message_id: messageId
    });


});


});


//Ping
bot.onText(/\/ping (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var messageId = msg.message_id;
    var domain =  match[1];
    //var output = exec("nslookup " + domain, s);
    //var data = fs.readFileSync("nslookup.txt");
    var ping = spawn("ping", ["-c","3", domain]);


    ping.stdout.on('data', (data) => {

    bot.sendMessage(chatId, data);

    console.log("ping:" + domain);
});


});

