const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
});


(async() => {

    let session_info = await kitkot.get_sessions()
    console.log(session_info)

})();