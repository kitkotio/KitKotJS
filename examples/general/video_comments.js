const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {

    let video_comments = await kitkot.video.comments({
        query: "https://www.tiktok.com/@tiktok/video/7174475464457588011",
        count: 6
    })
    console.log(video_comments)
    
})();