const { 
    LOGIN_RESPONSE, ME_RESPONSE, EDIT_PROFILE_RESPONSE, 
    FYP_RESPONSE, COMMENT_RESPONSE, INBOX_RESPONSE,
    COMMENT_DELETED_RESPONSE, LIKE_VIDEO_RESPONSE, UNLIKE_VIDEO_RESPONSE,
    FOLLOW_USER_RESPONSE, UNFOLLOW_USER_RESPONSE } = require('../Responses/AccountResponses')
    
class Account {
    constructor(key, api) {
        this.key = key;
        this.api = api;
    }

    /**
     * Initializes a new TikTok session through our API
     * @example login({username: "kitkot", password: "kitkot123!"})
     * @param {Object} params - Param object containing at least one of username or email, not both
     * @param {string} params.username - The username of the TikTok account
     * @param {string} params.email - The email of the TikTok account 
     * @param {string} params.password - The password of the TikTok account
     * @returns {LOGIN_RESPONSE} Object containing your new session or an error if something went wrong
     */

    async login(params={}) {
        const res = await this.api.get_request("/login", params)
        return res;
    }

    /** 
    * Gets information about your current TikTok account
    * @example me()
    * @return {ME_RESPONSE} Object containing information about your TikTok session
    */
    
    async me() {
        const res = await this.api.get_request("/get_me")
        return res;
    }

    /**
     * Initializes a new TikTok session through our API
     * @example edit({unique_id: "kitkot", signature:"follow me!"})
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.signature - The signature to change to
     * @param {string} params.unique_id - The unique_id to change to
     * @param {string} params.nickname - The nickname to change to
     * @param {string} params.bio_url - The bio url to change to
     * @returns {EDIT_PROFILE_RESPONSE} Object containing your updated profile
    */
    
    async edit(params={}) {
        const res = await this.api.get_request("/profile/edit", params)
        return res;
    }

    /**
    * Gets the for_you page from a session or not
    * @example fyp({count: 6})
    * @param {Object} params - Param object containing at least one of the properties
    * @param {number} params.count - The amount of videos to get
    * @return {FYP_RESPONSE} Object containing a list of fyp videos
    */

    async fyp(params={}) {
        const res = await this.api.get_request("/get_user/feed", params)
        return res;
    }

    /**
    * Post a comment on a video
    * @example comment({text: "hey there!", aweme_id: "7159171648044731649"})
    * @param {Object} params - Param object containing at least one of the properties
    * @param {string} params.text - The text to comment
    * @param {string} params.aweme_id - The ID of the video
    * @return {COMMENT_RESPONSE} Object containing the comment
    */

    async comment(params={}) {
        const res = await this.api.get_request("/video/comments/publish", params)
        return res;
    }

    /**
    * Publish a reply to a comment
    * @example comment_reply({text: "hey there!", aweme_id: "7159171648044731649", reply_id: "7359571648044731649"})
    * @param {Object} params - Param object containing at least one of the properties
    * @param {string} params.text - The text to reply with
    * @param {string} params.aweme_id - The ID of the video that the comment is on
    * @param {string} params.reply_id - The reply_id or the cid if reply_id is 0
    * @return {COMMENT_RESPONSE} Object containing the comment
    */

    async comment_reply(params={}) {
        const res = await this.api.get_request("/video/comments/publish/reply", params)
        return res;
    }

    /**
    * Delete a comment on a video
    * @example delete_comment({cid: "..."})
    * @param {Object} params - Param object containing at least one of the properties
    * @param {string} params.cid - The ID of the comment to delete
    * @return {COMMENT_DELETED_RESPONSE} Object containing a the deleted comment response
    */

    async delete_comment(params={}) {
        const res = await this.api.get_request("/video/comments/delete", params)
        return res;
    }

    /**
    * Get your notification inbox
    * @example inbox()
    * @return {INBOX_RESPONSE} Object containing information in your inbox
    */

    async inbox() {
        const res = await this.api.get_request("/profile/inbox")
        return res;
    }

    /**
     * Like a video
     * @example like_video("...")
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.aweme_id - The ID of the video
     * @return {LIKE_VIDEO_RESPONSE} Object containing the result of your like action
    */

    async like_video(params={}) {
        const res = await this.api.get_request("/video/like", params)
        return res;
    }
   
   /**
     * Unlike a video
     * @example unlike_video("...")
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.aweme_id - The ID of the video
     * @return {UNLIKE_VIDEO_RESPONSE} Object containing the result of your unlike action
    */

    async unlike_video(params={}) {
        const res = await this.api.get_request("/video/unlike", params)
        return res;
    }

    /**
     * Follow a user
     * @example follow_user("...")
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.sec_user_id - The sec_user_id of the user
     * @return {FOLLOW_USER_RESPONSE} Object containing the result of your follow action
    */

    async follow_user(params={}) {
        const res = await this.api.get_request("/profile/follow", params)
        return res;
    }

    /**
     * Unfollow a user
     * @example unfollow_user("...")
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.sec_user_id - The sec_user_id of the user
     * @return {UNFOLLOW_USER_RESPONSE} Object containing the result of your unfollow action
    */

    async unfollow_user(params={}) {
        const res = await this.api.get_request("/profile/unfollow", params)
        return res;
    }
}

module.exports = Account;