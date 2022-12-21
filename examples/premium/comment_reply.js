const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {
    let posted = await kitkot.account.comment_reply({
        text: "hello this is a test.",
        reply_id: "7176694602354803499",
        aweme_id: "7165097076676726021"
    })
    console.log(posted)
    
})();