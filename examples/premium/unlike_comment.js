const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let comment_unliked = await kitkot.video.unlike_comment({
        cid: "7176694602354803499",
        aweme_id: "7165097076676726021"
    })
    console.log(comment_unliked)
    
})();