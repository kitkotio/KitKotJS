const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {
    let posted = await kitkot.account.comment({
        text: "omg vad händer",
        aweme_id: "7143480086447033605"
    })
    console.log(posted.code)
    
})();