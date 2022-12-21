const { GET_FOLLOWERS_RESPONSE, GET_USER_RESPONSE, GET_FOLLOWING_RESPONSE,
        GET_USER_IDS_RESPONSE, LIKED_VIDEOS_RESPONSE, GET_POSTS_RESPONSE,
        GET_USER_STORY} = require('../Responses/UserResponses.js')

class User {
    constructor(key, api) {
        this.key = key;
        this.api = api;
    }

    /**
     * Get sec_user_id & user_id from username/uniqueid
     * @example get_user_ids("kitkot")
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.id - Username/UniqueID of the user
     * @returns {GET_USER_IDS_RESPONSE} - Object containing the ids of the user you requested
    */

    async get_user_ids(params={}) {
        const res = await this.api.get_request("/get_user_ids", params);
        return res;
    }

    /**
     * Get the accounts a user are following
     * @example get_following("...", "...", 20, "...")
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.sec_user_id - Sec_user_id of the user
     * @param {string} params.user_id - User_id of the user
     * @param {number} params.count - Amount of followings to fetch
     * @param {string} params.page_token - Page_token returned from our server to get the next page of followings
     * @returns {GET_FOLLOWING_RESPONSE} - Object containing the users following the user you requested
    */

    async get_following(params={}) {
        const res = await this.api.get_request("/get_user/following", params);
        return res;
    }

    /**
     * Get the posts from a user
     * @example get_posts("...", 20)
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.sec_user_id - Sec_user_id of the user
     * @param {number} params.count - Amount of posts to fetch
     * @param {number} params.max_cursor - Cursor to fetch the next page of posts
     * @returns {GET_POSTS_RESPONSE} - Object containing the posts by the user you requested
    */

    async get_posts(params={}) {
        const res = await this.api.get_request("/get_user/posts", params)
        return res;
    }

    /**
     * Get information about a user
     * @example get_user("...")
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.sec_user_id - Sec_user_id of the user
     * @returns {GET_USER_RESPONSE} - Object containing the information about the user you requested
    */

    async get_user(params={}) {
        const res = await this.api.get_request("/get_user", params);
        return res;
    }

    /**
     * Get a users liked videos
     * @example liked_videos("...", 20)
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.sec_user_id - Sec_user_id of the user
     * @param {number} params.count - Amount of liked videos to fetch
     * @param {number} params.max_cursor - Cursor to fetch the next page of liked videos
     * @returns {LIKED_VIDEOS_RESPONSE} - Object containing the videos liked by the user you requested
    */

    async liked_videos(params={}) {
        const res = await this.api.get_request("/get_user/liked_videos", params);
        return res;
    }

    /**
     * Get user stories
     * @example get_story("...,...,...", 20)
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.user_id - User_ids of the users to get stories off split by comma
     * @returns {GET_USER_STORY} - Object containing the stories the users you requested has posted
    */

    async get_story(params={}) {
        const res = await this.api.get_request("/get_user/story", params);
        return res;
    }

    /**
     * Get user followers
     * @example get_followers ("...", "...", 20, "...")
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.sec_user_id - Sec_user_id of the user
     * @param {string} params.user_id - User_id of the user
     * @param {number} params.count - Amount of followers to fetch
     * @param {string} params.page_token - Page_token returned from our server to get the next page of followers
     * @returns {GET_FOLLOWERS_RESPONSE} - Object containing the users followers you requested
    */
   
    async get_followers(params={}) {
        const res = await this.api.get_request("/get_user/followers", params);
        return res;
    }

}

module.exports = User;