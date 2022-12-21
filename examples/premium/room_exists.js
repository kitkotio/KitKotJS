const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let room_exists = await kitkot.live.room_exists({
        room_ids: "adsadsad"
    })
    console.log(room_exists)
    
})();