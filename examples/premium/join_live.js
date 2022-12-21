const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let live_joined = await kitkot.live.join({
        room_id: "7176990787404565254",
    })
    console.log(live_joined)
    
})();