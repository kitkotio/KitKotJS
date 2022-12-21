const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {

    let fyp = await kitkot.account.fyp({
        count: 1
    })
    console.log(fyp)
})();