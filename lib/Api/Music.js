class Music {
    constructor(key, api) {
        this.key = key;
        this.api = api;
    }

    /**
     * Search for music with by a keyword
     * @param {Object} params - Param object containing at least one of the properties
     * @param {string} params.music_name - Name of the music
     * @param {number} params.count - Amount of music to fetch
    */

    async search(params={}) {
        const res = await this.api.get_request("/music/search", params)
        return res;
    }
}

module.exports = Music;