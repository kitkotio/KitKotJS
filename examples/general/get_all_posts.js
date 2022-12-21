const config = require('../config.json')
const KitKot = require('../../lib/index')
const kitkot = new KitKot({
    api_key: config.api_key
});


(async() => {

    let posts = await kitkot.user.get_posts({
        sec_user_id: "MS4wLjABAAAArRp_172tu_6FPXgBOlFFjD6ar53pErSc8sSqvpM8r2v8BYIiM4lcaELAYpzk-emc",
        count: 10
    })

    while(posts.has_more) {

        for(let i = 0; i < posts.posts.length; i++) {
            console.log(posts.posts[i].desc)
        }
        posts = await kitkot.user.get_posts({
            sec_user_id: "MS4wLjABAAAArRp_172tu_6FPXgBOlFFjD6ar53pErSc8sSqvpM8r2v8BYIiM4lcaELAYpzk-emc",
            count: 10,
            max_cursor: posts.max_cursor
        })

    }
    
})();