const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {

    let video_comment_replies = await kitkot.video.comment_replies({
        comment_id: "7156349305510773510",
        count: 3,
    })
    console.log(video_comment_replies)
    
})();