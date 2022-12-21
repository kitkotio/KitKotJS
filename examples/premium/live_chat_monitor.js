const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let live_joined = await kitkot.live.chat({
        room_id: "7178581766553930501",
    })
    
    while(true) {
        let chat = live_joined.messages;
        for(let i = 0; i < chat.length; i++) {
            console.log(`${chat[i].user.username}: ${chat[i].text}`)
        }
        live_joined = await kitkot.live.chat({
            room_id: "7178581766553930501",
            cursor: live_joined.cursor,
            internalExt: live_joined.internalExt
        })
        await kitkot.sleep(live_joined.fetchInterval)
    }
    
})();