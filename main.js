import{ Telegraf } from "telegraf";
import { InlineKeyboard } from "grammy";

const token = '7687859291:AAG88xEGgswq4_LBmyxNRtPtJdJTsQ2OvgY';

const bot = new Telegraf(token, {polling: true});

bot.command("start", (ctx) =>{
    ctx.reply('Всех приветсвую');
});


 
bot.launch();