const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let video_unliked = await kitkot.account.unlike_video({
        aweme_id: "7151962979972451627"
    })
    console.log(video_unliked)
    
})();