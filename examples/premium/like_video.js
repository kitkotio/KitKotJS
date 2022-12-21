const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {
    let video_liked = await kitkot.account.like_video({
        aweme_id: "7172325949344582918"
    })
    console.log(video_liked)
    
})();