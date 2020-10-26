/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
Hi User!!

  You Are Here, It Means You Like Our Hard Work & You Want To Donate Some Money For Our Work....

  We Will Appreciate You Small Donation..

Send  /donate to check further steps..

Hello {update.message.chat.first_name}\n_Im a simple cricbuzz bot by @W4RR10R which let you know the live cricket score and updates from_ `cricbuzz.com` _within the telegram. \n/cricbuzz - to get all available options._",

           reply_markup = InlineKeyboardMarkup([

             [ InlineKeyboardButton(text=f"Source code",url="https://github.com/CW4RR10R/CircBuzz-bot"),

              InlineKeyboardButton(text=f"Me",url="https://t.me/W4RR10R")],

              [InlineKeyboardButton(text=f"Take me there",callback_data="take_me_there")]

          ]),

  ANSWER
  keyboard: 
  aliases: 
CMD*/

