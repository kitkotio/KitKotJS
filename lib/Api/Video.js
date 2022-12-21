const { 
    VIDEO_DETAIL_RESPONSE, VIDEO_COMMENTS_RESPONSE, VIDEO_COMMENTS_REPLIES_RESPONSE,
    LIKE_COMMENT_RESPONSE, UNLIKE_COMMENT_RESPONSE} = require('../Responses/VideoResponses.js')

class Video {
    constructor(key, api) {
        this.key = key;
        this.api = api;
    }

    /**
     * Get the details about a video
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.query - Can be video id or a url to the video
     * @returns {VIDEO_DETAIL_RESPONSE} - Object containing the details of the videos you requested
    */

    async details(params={}) {
        const res = await this.api.get_request("/video/detail", params)
        return res;
    }

    /**
     * Get comments off a video
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.query - Can be video id or a url to the video
     * @param {number} params.count - Amount of comments to fetch
     * @param {string} params.cursor - Cursor returned from our server to fetch the next page of comments
     * @returns {VIDEO_COMMENTS_RESPONSE} - Object containing a list of the comments you requested
    */
   
    async comments(params={}) {
        const res = await this.api.get_request("/video/comments", params)
        return res;
    }

    /**
     * Get replies off a comment
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.comment_id - ID of the comment to fetch replies from
     * @param {number} params.count - Amount of replies to fetch
     * @param {string} params.cursor - Cursor returned from our server to fetch the next page of replies
     * @returns {VIDEO_COMMENTS_REPLIES_RESPONSE} - Object containing a list of the replies you requested
    */
   
    async comment_replies(params={}) {
        const res = await this.api.get_request("/video/comments/replies", params)
        return res;
    }

    /**
     * Like a comment
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.cid - ID of the comment to like
     * @param {string} params.aweme_id - ID of the video that the comment was commented on
     * @returns {LIKE_COMMENT_RESPONSE} - Object containing the result of your like action
    */

    async like_comment(params={}) {
        const res = await this.api.get_request("/video/comments/like", params)
        return res;
    }

    /**
     * Unlike a comment
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.cid - ID of the comment to unlike
     * @param {string} params.aweme_id - ID of the video that the comment was commented on
     * @returns {UNLIKE_COMMENT_RESPONSE} - Object containing the result of your unlike action
    */

    async unlike_comment(params={}) {
        const res = await this.api.get_request("/video/comments/unlike", params)
        return res;
    }
}

module.exports = Video;