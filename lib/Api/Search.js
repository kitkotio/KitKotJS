class Search {
    constructor(key, api) {
        this.key = key;
        this.api = api;
    }

    /**
     * General search which returns videos, users, music, lives etc
     * @example general({keyword: "hello", has_liked: 1, has_watched: 0, publish_time: 30, sort_type: 1, hot_search: 1})
     * @param {Object} search_options - Options containing information about your search
     * @param {string} search_options.keyword - Keyword to search for
     * @param {number} search_options.count - The amount of results to fetch
     * @param {number} search_options.cursor - Cursor to get the next page of results
     * @param {number} search_options.has_liked - Option to search what you have liked
     * @param {number} search_options.has_watched - Option to search what you have watched
     * @param {number} search_options.publish_time - Option to pick to search for at which date to fetch results in days, (0 = today, 7 = week ago, 30 = 1 month ago and so on)
     * @param {number} search_options.sort_type - Option to search by either relevance or most liked (0=relevance, 1=most liked)
     * @param {number} search_options.hot_search - If the search should capture the hottest results with this keyword (0, 1)
    */

    async general(search_options={}) {
        const res = await this.api.post_request("/search/general", {}, search_options)
        return res;
    }

    /**
     * Search tiktok for users with a bunch of configurable options to your liking
     * @example users({keyword: "hello"})
     * @param {Object} search_options - Options containing information about your search
     * @param {string} search_options.keyword - Keyword to search for
     * @param {number} search_options.count - The amount of results to fetch
     * @param {number} search_options.cursor - Cursor to get the next page of results
     * @param {number} search_options.followers - Only get users within that range of followers (1000, 10000, 100000, or any number larger than 100000)
     * @param {boolean} search_options.verified - Filter by verified users only (true or false)
     * @param {string} search_options.preference - Filter by preferences (you_may_know or friends)

    */

    async users(search_options={}) {
        const res = await this.api.post_request("/search/users", {}, search_options)
        return res;
    }

        /**
     * Search tiktok for videos with a bunch of configurable options to your liking
     * @example videos({keyword: "hello"})
     * @param {Object} search_options - Options containing information about your search
     * @param {string} search_options.keyword - Keyword to search for
     * @param {number} search_options.count - The amount of results to fetch
     * @param {number} search_options.cursor - Cursor to get the next page of results
     * @param {number} search_options.has_liked - Option to search what you have liked
     * @param {number} search_options.has_watched - Option to search what you have watched
     * @param {number} search_options.publish_time - Option to pick to search for at which date to fetch posts in days, (0 = today, 7 = week ago, 30 = 1 month ago and so on)
     * @param {number} search_options.sort_type - Option to search by either relevance or most liked (0=relevance, 1=most liked)
     * @param {number} search_options.hot_search - If the search should capture the hottest results with this keyword (0, 1)
    */

    async videos(search_options={}) {
        const res = await this.api.post_request("/search/videos", {}, search_options)
        return res;
    }

}

module.exports = Search;