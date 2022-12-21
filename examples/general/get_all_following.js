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
    while (following.has_more) {
        let following_list = following.follower_list;
        for(let i = 0; i < following_list.length; i++) {
            console.log(following_list[i].unique_id)
        }
        following = await kitkot.user.get_following({
            sec_user_id: "MS4wLjABAAAAiLwMOpjDhEKvOyh_Pjs6iO2ZbubBfunynLQrBgnf3uDKK0GXxWLvCaA4yi7sWD6a",
            count: 20,
            page_token: following.page_token
        })
    }
})();