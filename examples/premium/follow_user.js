const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let followed_user = await kitkot.account.follow_user({
        sec_user_id: "MS4wLjABAAAAehhNFG8Qmiib9XVh6PrHRCleKY1qqA7hQSYDzJ0nBxHqg2ICuCAqYLWLM4x9B1C0"
    })
    console.log(followed_user)
    
})();