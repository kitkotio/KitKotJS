const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let message_sent = await kitkot.live.send_message({
        room_id: "7176967647337253638",
        content: "hey!"
    })
    console.log(message_sent)
    
})();