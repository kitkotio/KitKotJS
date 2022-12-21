const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key,
    session_key: config.session_key
});


(async() => {

    let room_info = await kitkot.live.get_room_by_user({
        sec_user_id: "MS4wLjABAAAAVkI0XaBSrRk646dj5ebA9o3TNPCDe1NFvSZkvqxRaeiyEsT_hjtWzgc4VFOCGrPW"
    })
    console.log(room_info)
    
})();