const TelegramBot = require('node-telegram-bot-api'); 
 const token = '1232353735:AAFNjH0Ybv_26WHgZ4Bw-q8v-vmOxVWEL4U'; 
const Promise = require('bluebird'); Promise.config({ cancellation: true });
const bot = new TelegramBot(token, {polling: true}); 

bot.onText(/\/start/, (msg) => { bot.sendMessage(msg.chat.id , "*🗯️ To send Message to Promise Imoniye use /admin*", {parse_mode:"markdown"}); });
    
bot.onText(/\/admin/, function (message) { if( message.chat.type == "private") { bot.sendMessage(message.chat.id, "*🗯️ Helo* [" + message.chat.first_name + "](tg://user?id=" + message.chat.id + ")\n\n*💌 Enter Message for Promise Imoniye*", {parse_mode:"markdown"}).then(function () { answerCallbacks[message.chat.id] = function (answer) { var name = answer.text;  bot.sendMessage(message.chat.id, "📬 Message sent : *" + name + "*" , {parse_mode:"markdown"});
    var id = 1397249906 ; bot.sendMessage(id, "💹 New Message From : [" + message.chat.first_name + "](tg://user?id=" + message.chat.id + ")\n\n*📮 User Id :* " + message.chat.id + "\n\n📩 Message : *" + name + "*\n\n✏️ Reply to User : */Reply*" , {parse_mode:"markdown"});} }); }else{ bot.sendMessage(msg.chat.id , "Write me personal" , { parse_mode : "markdown" }); }});

var answerCallbacks = {}; bot.on('message', function (message) { var callback = answerCallbacks[message.chat.id]; if (callback) { delete answerCallbacks[message.chat.id]; return callback(message); } });

bot.onText(/\/Reply/, function (message,match) { bot.sendMessage(message.chat.id, "*♻️ Enter User ID here*" , {parse_mode:"markdown"}).then(function () { answerCallbacks[message.chat.id] = function (answer) { var name = answer.text;
     bot.sendMessage(message.chat.id, "*📢 Enter your Reply here*" , {parse_mode:"markdown"}).then(function () { answerCallbacks[message.chat.id] = function (answer) { var ans = answer.text;
          bot.sendMessage(message.chat.id, "*✅ Replied to* " + name + " *as* " + ans + " *Success*" , {parse_mode:"markdown"});
       
bot.sendMessage( name , "<b>💹 New Message From Promise Imoniye\n\n📩 Reply Message :</b> <pre>" + ans + "</pre>\n\n<b>💌 Next Question ? /admin</b>" , {parse_mode:"HTML"});} }); } }); });

var answerCallbacks = {}; bot.on('message', function (message) { var callback = answerCallbacks[message.chat.id]; if (callback) { delete answerCallbacks[message.chat.id]; return callback(message); } });



bot.on("polling_error", (msg) => console.log(msg));