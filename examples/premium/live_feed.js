const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let live_feed = await kitkot.live.feed()
    console.log(live_feed)
    
})();