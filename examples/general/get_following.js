const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {
    
    let following = await kitkot.user.get_following({
        sec_user_id: "MS4wLjABAAAAiLwMOpjDhEKvOyh_Pjs6iO2ZbubBfunynLQrBgnf3uDKK0GXxWLvCaA4yi7sWD6a",
        count: 20
    })
    console.log(following)
})();