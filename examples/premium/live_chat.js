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
    console.log(live_joined)    
})();