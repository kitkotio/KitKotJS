const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
});


(async() => {

    let logged_in = await kitkot.account.login({
        username: config.username,
        password: config.password
    })
    console.log(logged_in)
    
})();