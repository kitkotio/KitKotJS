const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {

    let video_details = await kitkot.video.details({
        query: "7614424255222"
    })
    console.log(video_details.video_details)
    
})();