// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1655281641',
  channelSecret: '4e5a3650b83aa1d5d7228ff7139b70b4',
  channelAccessToken: 'VrDlsLfoo4TNd5kLfvQFM810g45eXCdOtKh3+iB/BnkXm87m7VQEfXKgcPQufSKcXP8fnSdbkSkK8zMkxdx4JLfPJV0a8z7+wrTNW3OqHMnNmDo01WzoHUGTC4LBj6S81TwLxt/KG0zbef73148EpQdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});