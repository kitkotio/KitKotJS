class Live {
    constructor(key, api) {
        this.key = key;
        this.api = api;
    }

    /**
     * Browse your live feed
     * @param {Object} params - Param object containing at least one of the properties
    */

    async feed() {
        const res = await this.api.get_request("/live/feed")
        return res;
    }

    /**
     * Join a livestream as a viewer
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.room_id - room_id of the livestream
     * @param {string} params.anchor_id - anchor_id of the livestream
     * @param {string} params.request_id - request_id sent back from our server
    */

    async join(params={}) {
        const res = await this.api.get_request("/live/join", params)
        return res;
    }

    /**
     * Leaves a livestream
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.room_id - room_id of the livestream
    */
    async leave(params={}) {
        const res = await this.api.get_request("/live/leave", params)
        return res;
    }

    /**
     * Check if a room is currently live or not
     * @example room_exists({room_ids: "room_id,room_id2,room_id3"})
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.room_ids - room_ids split by comma to check if they are live or not
    */

    async room_exists(params={}) {
        const res = await this.api.get_request("/live/room_exists", params)
        return res;
    }

    /**
     * Display the gifts available in the room
     * @example gifts({room_id: "..."})
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.room_id - The room_id of the room/live to get gift list from
    */

    async gifts(params={}) {
        const res = await this.api.get_request("/live/gifts", params)
        return res;
    }

    /**
     * Get chat messages from a room/live
     * @example chat({room_id: "..."})
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.room_id - The room_id of the room/live to get the chat from
     * @param {string} params.cursor - The cursor returned from our server to fetch the next page of the chat
     * @param {string} params.internalExt - The internal data returned from our server
    */

    async chat(params={}) {
        const res = await this.api.get_request("/live/chat", params)
        return res;
    }

    /**
     * Send a message to a live chat
     * @example send_message({room_id: "...", anchor_id: "...", request_id: "..."})
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.room_id - The room_id of the room/live to get the chat from
     * @param {string} params.anchor_id - The anchor_id of the room
     * @param {string} params.request_id - The request_id you got when joining / fetching the room
     * @param {string} params.content - The content to send in chat
    */

    async send_message(params={}) {
        const res = await this.api.get_request("/live/chat/send_message", params)
        return res;
    }

    /**
     * Get room/live by user ids
     * @example get_room_by_user({user_id: "...", sec_user_id: "..."})
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.user_id - The user_id of the user to get room information about
     * @param {string} params.sec_user_id - The sec_user_id of the user to get room information about
    */

    async get_room_by_user(params={}) {
        const res = await this.api.get_request("/live/get_room_by_user", params)
        return res;
    }
}

module.exports = Live;