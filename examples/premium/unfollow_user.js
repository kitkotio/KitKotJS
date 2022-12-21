const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let unfollowed_user = await kitkot.account.unfollow_user({
        sec_user_id: "MS4wLjABAAAArWlYK5GczYmUgiHipPfplbY1tvsqhCH08Usg1zWCEwPhbdm64wle7U-TYdyYQNxF"
    })
    console.log(unfollowed_user)
    
})();