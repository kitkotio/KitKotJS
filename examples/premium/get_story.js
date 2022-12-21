const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let user_stories = await kitkot.user.get_story({
        user_id: "86888400535834624",
    })
    console.log(user_stories)
    
})();