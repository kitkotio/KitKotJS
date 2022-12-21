const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {

    let user = await kitkot.user.get_user({
        sec_user_id: "MS4wLjABAAAAkFVyrSUGWHr-qq58EJJuJIH6w1A6DcTs0kTYm4EOxNqBUI301xjFBEvOVdkh2Rjx"
    })
    console.log(user)
})();