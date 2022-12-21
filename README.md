

<p align="center"><img src="https://kitkot.io/img/logo.png?width=128&height=128" alt="kitkot_image"/></p>

---
<h3 align="center">
	<p>
	NodeJS Package For The <a url="https://kitkot.io">KitKot</a> API
	</p>
</h3>

`npm install kitkot`

📘 For more examples please check the examples folder [here](https://github.com/kitkotio/KitKotJS/tree/main/examples), documentation can also be found [here](https://docs.kitkot.io/)
```js
const KitKot = require('kitkot');

const kitkot = new KitKot({
    api_key: "my-api-key",
});

(async() => {
    const user_ids = await kitkot.user.get_user_ids({
        id: "tiktok"
    })
    const user = await kitkot.user.get_user({
        sec_user_id: user_ids.sec_user_id
    })
    console.log(user)
})();
```
---
<h3 align="center">
	<p>
		⚙️ Library Methods
	</p>
</h3>

- [x] Follow Users
- [x] Like Videos
- [x] Post Comments
- [x] Scrape Information (User, Video, etc)
- [x] Join lives & talk/fetch live messages
