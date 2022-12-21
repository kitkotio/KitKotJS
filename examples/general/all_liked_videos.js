const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {

    let liked_videos = await kitkot.user.liked_videos({
        sec_user_id: "MS4wLjABAAAA7PDfcKFW64woTgWh2_kN4N4BXBWKOPgOonH3J4JVDcxDrjk3cGK_ZH6LTypbmrOP",
        count: 3
    })
    
    while (liked_videos.has_more) {
        let vids = liked_videos.aweme_list;
        for(let i = 0; i < vids.length; i++) {
            console.log(vids[i].desc)
        }
        liked_videos = await kitkot.user.liked_videos({
            sec_user_id: "MS4wLjABAAAA7PDfcKFW64woTgWh2_kN4N4BXBWKOPgOonH3J4JVDcxDrjk3cGK_ZH6LTypbmrOP",
            count: 3,
            max_cursor: liked_videos.max_cursor
        })
    }
})();