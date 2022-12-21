const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let comment_deleted = await kitkot.account.delete_comment({
        cid: "7146688615413777198",
    })
    console.log(comment_deleted)
    
})();