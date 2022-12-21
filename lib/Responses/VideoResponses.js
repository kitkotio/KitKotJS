const VIDEO_DETAIL_RESPONSE = {
    "code": 200,
    "video_details": [
      {
        "download_urls": {
          "no_watermark": "",
          "watermark": ""
        },
        "author": {
          "avatar_url": "",
          "username": "",
          "nickname": "",
          "sec_uid": "",
          "user_id": ""
        },
        "stats": {
          "comment_count": 235,
          "likes": 27501,
          "downloads": 0,
          "views": 1053326,
          "shares": 107
        },
        "music": {
          "music_id": "",
          "album": "",
          "title": "",
          "author": "",
          "length": 7,
          "url": ""
        },
        "created_at_timestamp": 1670499902000,
        "created_at": "",
        "video_url": "",
        "video_id": "",
        "description": "Was das alles 🥲 ",
        "video_length": 7.917,
        "status": {
          "reviewed": 1,
          "aweme_id": "",
          "self_see": false,
          "review_result": {
            "review_status": 0
          },
          "download_status": 0,
          "allow_share": true,
          "private_status": 0,
          "is_delete": false,
          "allow_comment": true,
          "in_reviewing": false,
          "is_prohibited": false
        }
      }
    ]
};

const VIDEO_COMMENTS_RESPONSE = {
    code: 200,
    msg: 'success',
    comment_list: [],
    has_more: 1,
    cursor: 6,
    total_comments: 605,
    top_gifts: [],
    reply_style: 2
};

const VIDEO_COMMENTS_REPLIES_RESPONSE =   {
    code: 200,
    replies: [],
    nextCursor: 3,
    has_more: 1,
    total_replies: 6
};

const LIKE_COMMENT_RESPONSE = { 
    code: 200,
    action: 'like_comment',
    msg: 'success'
};

const UNLIKE_COMMENT_RESPONSE = {
    code: 200,
    action: 'unlike_comment',
    msg: 'success'
};

module.exports = {
    VIDEO_DETAIL_RESPONSE,
    VIDEO_COMMENTS_RESPONSE,
    VIDEO_COMMENTS_REPLIES_RESPONSE,
    LIKE_COMMENT_RESPONSE,
    UNLIKE_COMMENT_RESPONSE
}