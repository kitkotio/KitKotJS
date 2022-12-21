const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let updated_self = await kitkot.account.edit({
        unique_id: "tiktok"
    })
    console.log(updated_self)
    
})();