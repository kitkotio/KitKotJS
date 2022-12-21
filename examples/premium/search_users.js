const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let result = await kitkot.search.users({
        keyword: "lover"
    })
    console.log(result)

})();