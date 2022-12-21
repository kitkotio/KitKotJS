const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
});


(async() => {
        
    let user_ids = await kitkot.user.get_user_ids({
        id: "lover"
    })
    console.log(user_ids)


})();