const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let videos = await kitkot.search.videos({
        keyword: "hello"
    })
    console.log(videos)

})();