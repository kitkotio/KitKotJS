const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {
    
    let followers = await kitkot.user.get_followers({
        sec_user_id: "MS4wLjABAAAAiLwMOpjDhEKvOyh_Pjs6iO2ZbubBfunynLQrBgnf3uDKK0GXxWLvCaA4yi7sWD6a",
        count: 20
    })
    while (followers.has_more) {
        let follower_list = followers.follower_list;
        for(let i = 0; i < follower_list.length; i++) {
            console.log(follower_list[i].unique_id)
        }
        followers = await kitkot.user.get_followers({
            sec_user_id: "MS4wLjABAAAAiLwMOpjDhEKvOyh_Pjs6iO2ZbubBfunynLQrBgnf3uDKK0GXxWLvCaA4yi7sWD6a",
            count: 20,
            page_token: followers.page_token
        })
    }
})();