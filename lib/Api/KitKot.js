/* Libs */
const fetch = require('node-fetch')

/* Api categories */
const User = require('./User');
const Account = require('./Account');
const Video = require('./Video');
const Music = require('./Music');
const Live = require('./Live');
const Search = require('./Search');

class KitKot {
    /**
     * @example new KitKot({api_key: "...", session_key: "..."})
     * @param {Object} api_credentials - Core credentials to use our API
     * @param {string} api_credentials.api_key - API Authorization Key, this should always be set otherwise every request will return 401 unauthorized
     * @param {string} api_credentials.session_key - Session_key returned from our login endpoint
    */
    constructor(api_credentials={}) {
        this.key = api_credentials.api_key;
        this.session_key = api_credentials.session_key;
        this.baseURL = "https://kitkot.xyz/api"
        this.baseParams = `?api_key=${this.key}`
        if (this.session_key) {
            this.baseParams += `&session_key=${this.session_key}`
        }
        this.user = new User(this.key, this)
        this.account = new Account(this.key, this)
        this.video = new Video(this.key, this)
        this.music = new Music(this.key, this)
        this.live = new Live(this.key, this)
        this.search = new Search(this.key, this)
    }

    async get_request(path, params={}, headers=null) {
        if (Object.keys(params).length > 0) {
            params = this.baseParams+"&"+new URLSearchParams(params).toString();
        } else {
            params = this.baseParams;
        }
        let url = `${this.baseURL}${path}${params}`;
        let request = await fetch(url, {
            headers: headers,
        });
        try {
            let res = await request.json();
            return JSON.parse(JSON.stringify(res,null,2));
        } catch(e) {
            return request.status;
        }
    }

    async post_request(path, params={}, body=null, headers={}) {
        if (Object.keys(params).length > 0) {
            params = this.baseParams+"&"+new URLSearchParams(params).toString();
        } else {
            params = this.baseParams;
        }
        let url = `${this.baseURL}${path}${params}`;
        
        if (!headers["content-type"]) body = JSON.stringify(body)

        let request = await fetch(url, {
            headers: Object.assign({'content-type': 'application/json'}, headers),
            body: body,
            method: "POST"
        });
        try {
            let res = await request.json();
            return JSON.parse(JSON.stringify(res,null,2));
        } catch(e) {
            return request.status;
        }
    }
    
    async get_session() {
        const res = await this.get_request("/session")
        return res;
    }

    async get_sessions() {
        const res = await this.get_request("/sessions")
        return res;
    }

    async sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
}

module.exports = KitKot;