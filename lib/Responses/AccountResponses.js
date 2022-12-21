const LOGIN_RESPONSE = {
  "code": 200,
  "session_key": "",
  "msg": ""
};

const ME_RESPONSE = {
  code: 200,
  msg: '',
  me: {
    avatar_168x168: {
      uri: '',
      url_list: [Array]
    },
    complete_profile_guide_strategy: 1,
    is_discipline_member: false,
    latest_order_time: 0,
    share_info: {
      share_desc: '',
      share_title_myself: '',
      share_image_url: [Object],
      bool_persist: 1,
      share_desc_info: '',
      share_url: '',
      share_title_other: '',
      now_invitation_card_image_urls: null,
      share_title: "Join TikTok and see what I've been up to!"
    },
    shield_comment_notice: 0,
    account_region: '',
    user_inactive: false,
    youtube_refresh_token: '',
    room_id: 0,
    profile_tab_type: 0,
    follower_count: 121,
    unique_id_modify_time: 0,
    comment_setting: 0,
    shield_digg_notice: 0,
    notify_minor_private_policy: false,
    with_item_commerce_entry: false,
    live_commerce: false,
    friend_count: 0,
    bold_fields: [ 'photo' ],
    hide_search: false,
    age_gate_action: 0,
    is_pro_account: false,
    sec_uid: '',        
    social_data: {
      enable_permission_pop_up: true,
      social_platform_settings: [Array]
    },
    has_email: true,
    youtube_channel_id: '',
    avatar_thumb: {
      uri: '',
      url_list: [Array]
    },
    following_count: 2,
    history_max_follower_count: 121,
    video_gift_status: 0,
    user_canceled: false,
    commerce_user_info: {
      has_tcm_entry: false,
      ads_feedback_entry: true,
      ad_authorization: false,
      has_promote: true,
      clf_type: 0,
      ad_revenue_rits: null,
      has_branded_content_tool: true,
      ad_experience_text: 'Ads',
      ad_experience_entry: true,
      tcm_config: '{"bc_usage_confirm_threshold":{"app":false,"h5":false}}'
    },
    twitter_name: '',
    unique_id: '',
    signature: '',
    has_insights: false,
    category: '',
    is_effect_artist: false,
    mplatform_followers_count: 0,
    uid: '',
    user_profile_guide: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    aweme_count: 0,
    custom_verify: '',
    favoriting_count: 0,
    accept_private_policy: false,
    with_new_goods: false,
    total_favorited: 0,
    new_follow_to_reaction_count: 0,
    twitter_id: '',
    youtube_last_refresh_time: 0,
    youtube_channel_title: '',
    bio_permission: {
      enable_phone: false,
      enable_location: false,
      enable_url: false,
      enable_email: false
    },
    ins_id: '',
    avatar_300x300: {
      uri: '',
      url_list: [Array]
    },
    new_follower_count: 0,
    with_commerce_enterprise_tab_entry: false,
    bind_phone: '',
    video_icon: { uri: '', url_list: [] },
    forward_count: 0,
    proaccount_update_notification_status: 0,
    content_language_already_popup: 0,
    commerce_user_level: 0,
    analytics_status: false,
    apple_account: 0,
    has_twitter_token: false,
    avatar_larger: {
      uri: '',
      url_list: [Array]
    },
    nickname: '',
    music_tab_info: { show_ghost_music_tab: false },
    predicted_age_group: '-1',
    is_phone_binded: false,
    special_account: { special_account_list: [] },
    follower_status: 0,
    email: '',
    viewer_entrance_info: {
      can_show_entrance: true,
      unread_viewer_count: 0,
      viewer_count: 0
    },
    account_type: 0,
    contacts_sync_status: false,
    short_id: '0',
    verification_type: 0,
    qa_status: 0,
    follow_status: 0,
    enterprise_verify_reason: '',
    register_time: 1667504852,
    yt_raw_token: '',
    download_setting: 0,
    google_account: '',
    commerce_permissions: {},
    tt_mall_tab_related_user_info: { ttmall_tab_display: true },
    tw_expire_time: 0,
    can_set_geofencing: false,
    is_star: false,
    verify_info: '',
    age_gate_info: {
      option_list: null,
      age_gate_buttons: null,
      age_gate_content_hyperlinks: null
    },
    tab_settings: { private_tab: [Object] },
    avatar_medium: {
      uri: '',
      url_list: [Array]
    },
    is_email_verified: true,
    story_status: 0,
    dsp_profile: { collect_count: 0 },
    shield_follow_notice: 0,
    login_platform: 0,
    post_default_download_setting: true,
    age_gate_post_action: 0,
    supporting_ngo: {},
    secret: 0,
    with_commerce_entry: false,
    user_rate: 1,
    user_mode: 1,
    original_musician: { music_used_count: 0, digg_count: 0, music_count: 0 },
    pronouns_info: { enable_edit_pronouns: true }
  }
};

const INBOX_RESPONSE = {
  code: 200,
  msg: '',
  data: {
    follow_request: { count: 0, from_users: [] },
    live_message: [],
    report_inbox: null,
    show_following_popup: false,
    tiktok_shop_inbox: null,
    top_live: { avatar_list: [], enable: false }
  }
};

const EDIT_PROFILE_RESPONSE = {
  code: 200,
  updated_user: {
    short_id: '0',
    nickname: '',
    avatar_larger: {
      uri: '',
      url_list: [Array]
    },
    avatar_medium: {
      uri: '',
      url_list: [Array]
    },
    secret: 0,
    twitter_id: '',
    apple_account: 0,
    video_icon_virtual_URI: '',
    uid: '',
    verification_type: 0,
    youtube_channel_title: '',
    avatar_thumb: {
      uri: '',
      url_list: [Array]
    },
    unique_id: '',
    share_qrcode_uri: '',
    google_account: '',
    twitter_name: '',
    signature: '',
    ins_id: '',
    youtube_channel_id: '',
    navi_id: '',
    avatar_uri: ''
  }
};

const COMMENT_RESPONSE = {
  code: 200,
  comment: {
    user: {
      avatar_medium: [Object],
      follower_count: 0,
      user_tags: null,
      is_discipline_member: false,
      video_icon: [Object],
      aweme_count: 0,
      verify_info: '',
      custom_verify: '',
      ins_id: '',
      account_region: '',
      is_block: false,
      shield_follow_notice: 0,
      user_mode: 1,
      cover_url: [Array],
      special_account: [Object],
      favoriting_count: 0,
      user_canceled: false,
      twitter_id: '',
      is_ad_fake: false,
      nickname: '',
      is_phone_binded: false,
      show_image_bubble: false,
      user_now_pack_info: {},
      follower_status: 0,
      signature: '',
      mutual_relation_avatars: null,
      verification_type: 0,
      type_label: null,
      fb_expire_time: 0,
      accept_private_policy: false,
      user_rate: 1,
      has_youtube_token: false,
      followers_detail: null,
      is_star: false,
      avatar_300x300: [Object],
      unique_id_modify_time: 1670953054,
      live_commerce: false,
      sec_uid: '',
      search_highlight: null,
      homepage_bottom_toast: null,
      advance_feature_item_order: null,
      following_count: 0,
      tw_expire_time: 0,
      user_profile_guide: null,
      enterprise_verify_reason: '',
      commerce_user_level: 0,
      secret: 0,
      avatar_thumb: [Object],
      has_facebook_token: false,
      with_shop_entry: false,
      youtube_channel_id: '',
      download_setting: 0,
      uid: '',
      youtube_channel_title: '',
      story_status: 0,
      twitter_name: '',
      avatar_uri: '',
      white_cover_url: null,
      account_labels: null,
      can_message_follow_status_list: null,
      has_orders: false,
      has_twitter_token: false,
      geofencing: null,
      hide_search: false,
      matched_friend_available: false,
      platform_sync_info: null,
      region: 'US',
      google_account: '',
      stitch_setting: 0,
      apple_account: 0,
      special_lock: 1,
      avatar_larger: [Object],
      shield_digg_notice: 0,
      mention_status: 1,
      download_prompt_ts: 0,
      shield_comment_notice: 0,
      create_time: 1667504852,
      react_setting: 0,
      need_recommend: 0,
      cha_list: null,
      user_period: 0,
      follow_status: 0,
      relative_users: null,
      language: 'en',
      unique_id: '',
      youtube_expire_time: 0,
      advanced_feature_info: null,
      authority_status: 0,
      has_insights: false,
      prevent_download: false,
      duet_setting: 0,
      bold_fields: null,
      bind_phone: '',
      live_agreement: 0,
      need_points: null,
      with_commerce_entry: false,
      cv_level: '',
      comment_filter_status: 0,
      comment_setting: 0,
      item_list: null,
      short_id: '0',
      live_verify: 2,
      shield_edit_field_info: null,
      events: null,
      status: 1,
      can_set_geofencing: null,
      avatar_168x168: [Object],
      total_favorited: 0,
      ad_cover_url: null,
      friends_status: 0,
      has_email: false,
      room_id: 0
    },
    label_list: null,
    text: 'My text posted on the comment!',
    reply_id: '0',
    cid: '',
    text_extra: [],
    reply_to_reply_id: '0',
    digg_count: 0,
    aweme_id: '',
    create_time: 1670953055,
    status: 7,
    user_digged: 0,
    reply_comment: []
  },
  msg: 'Comment sent successfully'
};

const ERROR_RESPONSE = {
  code: 400,
  msg: ""
};

const FYP_RESPONSE = {
  code: 200,
  aweme_list: [    {
    "aweme_id": "7158188898156334342",
    "desc": "Insta - inanis7#fyp ",
    "create_time": 1666645732,
    "author": {
      "uid": "155065993357131776",
      "short_id": "0",
      "nickname": "inanis7",
      "signature": "Follow my ig🙌🏾 - Inanis7_",
      "avatar_thumb": {
        "uri": "tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_100x100.webp?x-expires=1670526000&x-signature=UoF1F6NWl4ulndlXC0ytmTanSGs%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_100x100.webp?x-expires=1670526000&x-signature=PBgPNka9aoktSCCMTQpB4YT6n1Y%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_100x100.jpeg?x-expires=1670526000&x-signature=lBDU29hzhcrGBB6dB%2FJ4ENSPtYA%3D"
        ],
        "width": 720,
        "height": 720
      },
      "avatar_medium": {
        "uri": "tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_720x720.webp?x-expires=1670526000&x-signature=zVx4GrguUcobnse21NB%2BOOBFugc%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_720x720.webp?x-expires=1670526000&x-signature=nM6D3Q6KYWU5ZmMZ4Pst0Sj59ag%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_720x720.jpeg?x-expires=1670526000&x-signature=fDsEKwuNZoi0dX5vKeWvzPJGEUs%3D"
        ],
        "width": 720,
        "height": 720
      },
      "follow_status": 0,
      "is_block": false,
      "custom_verify": "",
      "unique_id": "inanis7",
      "room_id": 0,
      "authority_status": 0,
      "verify_info": "",
      "share_info": {
        "share_url": "",
        "share_desc": "",
        "share_title": "",
        "share_qrcode_url": {
          "uri": "",
          "url_list": [],
          "width": 720,
          "height": 720
        },
        "share_title_myself": "",
        "share_title_other": "",
        "share_desc_info": "",
        "now_invitation_card_image_urls": null
      },
      "with_commerce_entry": false,
      "verification_type": 0,
      "enterprise_verify_reason": "",
      "is_ad_fake": false,
      "followers_detail": null,
      "region": "DK",
      "commerce_user_level": 0,
      "platform_sync_info": null,
      "is_discipline_member": false,
      "secret": 0,
      "prevent_download": false,
      "geofencing": null,
      "video_icon": {
        "uri": "",
        "url_list": [],
        "width": 720,
        "height": 720
      },
      "follower_status": 0,
      "comment_setting": 0,
      "duet_setting": 0,
      "download_setting": 0,
      "cover_url": [
        {
          "uri": "musically-maliva-obj/1612555907887110",
          "url_list": [
            "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/1612555907887110"
          ],
          "width": 720,
          "height": 720
        }
      ],
      "language": "en",
      "item_list": null,
      "is_star": false,
      "type_label": [],
      "ad_cover_url": null,
      "comment_filter_status": 0,
      "avatar_168x168": {
        "uri": "tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_168x168.webp?x-expires=1670526000&x-signature=FZXO124K4lZ%2BMkpf%2FWWYK%2FuafyU%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_168x168.webp?x-expires=1670526000&x-signature=550A5ePGzq85iiGA86UY29Fzmq0%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_168x168.jpeg?x-expires=1670526000&x-signature=UFWUltfTWsLhxoxTXyBMclDRSgE%3D"
        ],
        "width": 720,
        "height": 720
      },
      "avatar_300x300": {
        "uri": "tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c",
        "url_list": [
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_300x300.webp?x-expires=1670526000&x-signature=tUmpELTGR4ozq3aXGAsj8ECtBOU%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_300x300.webp?x-expires=1670526000&x-signature=r1t%2FQZTKkDQvul4rPux10CJbDTk%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3469db53c39ebca03860c89210a2212c~c5_300x300.jpeg?x-expires=1670526000&x-signature=2uWY%2BTmC0y%2FHc8%2Bsk7hsQb8Lsjc%3D"
        ],
        "width": 720,
        "height": 720
      },
      "relative_users": null,
      "cha_list": null,
      "sec_uid": "MS4wLjABAAAA_ypWza6TkU-67jBQIw1vA1G_CxKrmsxmSLBfbfUi96lPS12rHGpGHWEmTfVtnq9S",
      "need_points": null,
      "homepage_bottom_toast": null,
      "can_set_geofencing": null,
      "white_cover_url": null,
      "user_tags": null,
      "bold_fields": null,
      "qa_status": 0,
      "search_highlight": null,
      "mutual_relation_avatars": null,
      "social_info": "{\"friend_type_str\":\"\",\"relation\":\"0\"}",
      "events": null,
      "matched_friend": {
        "video_items": null
      },
      "advance_feature_item_order": null,
      "advanced_feature_info": null,
      "user_profile_guide": null,
      "shield_edit_field_info": null,
      "can_message_follow_status_list": null,
      "account_labels": null
    },
    "music": {
      "id": 7134751792880979000,
      "id_str": "7134751792880978694",
      "title": "original sound - usersnameb7",
      "author": "B7",
      "album": "",
      "cover_large": {
        "uri": "tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_1080x1080.webp?x-expires=1670526000&x-signature=jEjEDT6HDEa5HKKPzhYMiu58n3Y%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_1080x1080.webp?x-expires=1670526000&x-signature=nsoU21XtM2MrZuXBYuTSk5O%2Bjvw%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_1080x1080.jpeg?x-expires=1670526000&x-signature=C4RytNstE8WNOeoY6iR7Z8HcZKM%3D"
        ],
        "width": 720,
        "height": 720
      },
      "cover_medium": {
        "uri": "tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_720x720.webp?x-expires=1670526000&x-signature=dN7LHdMg8Th3%2FFlBUOO7kjl4a1w%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_720x720.webp?x-expires=1670526000&x-signature=siXO3YFs0qU7gJgO12%2BWPt3Lo58%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_720x720.jpeg?x-expires=1670526000&x-signature=ADCFCADqrRHl%2Fr%2FeuEV7wJ3Ldas%3D"
        ],
        "width": 720,
        "height": 720
      },
      "cover_thumb": {
        "uri": "tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_100x100.webp?x-expires=1670526000&x-signature=lVkWOIRkEYcD7rD%2FRyHJe8bllyQ%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_100x100.webp?x-expires=1670526000&x-signature=oqwwygUVXzMYZDC8e1%2FSgiAjE7g%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_100x100.jpeg?x-expires=1670526000&x-signature=oTiDdGWsRvJWN5MWV9%2BhX%2BmdBok%3D"
        ],
        "width": 720,
        "height": 720
      },
      "play_url": {
        "uri": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7134751788440881926.mp3",
        "url_list": [
          "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7134751788440881926.mp3"
        ],
        "width": 720,
        "height": 720
      },
      "source_platform": 72,
      "duration": 9,
      "extra": "{\"aed_music_dur\":8.899,\"beats\":{},\"can_read\":true,\"can_reuse\":true,\"erase_type\":0,\"erase_uid\":0,\"from_user_id\":0,\"has_edited\":0,\"is_ugc_mapping\":true,\"is_used\":1,\"owner_id\":7051618895137391622,\"resource_status\":0,\"review_unshelve_reason\":0,\"reviewed\":1,\"schedule_search_time\":0}",
      "user_count": 0,
      "position": null,
      "collect_stat": 0,
      "status": 1,
      "offline_desc": "",
      "owner_id": "7051618895137391622",
      "owner_nickname": "B7",
      "is_original": false,
      "mid": "7134751792880978694",
      "binded_challenge_id": 0,
      "author_deleted": false,
      "owner_handle": "usersnameb7",
      "author_position": null,
      "prevent_download": false,
      "strong_beat_url": {
        "uri": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/pattern/bb3da48db585fc952a8fe26885ad1880.json",
        "url_list": [
          "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/pattern/bb3da48db585fc952a8fe26885ad1880.json"
        ],
        "width": 720,
        "height": 720
      },
      "external_song_info": [],
      "sec_uid": "MS4wLjABAAAA6y6T9rau-WH8AAMjkmLkAEkrKzImThi87V-NQz3WjAhnOoqS8L--Wsg2vImxdnKP",
      "avatar_thumb": {
        "uri": "tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_100x100.webp?x-expires=1670526000&x-signature=lVkWOIRkEYcD7rD%2FRyHJe8bllyQ%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_100x100.webp?x-expires=1670526000&x-signature=oqwwygUVXzMYZDC8e1%2FSgiAjE7g%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_100x100.jpeg?x-expires=1670526000&x-signature=oTiDdGWsRvJWN5MWV9%2BhX%2BmdBok%3D"
        ],
        "width": 720,
        "height": 720
      },
      "avatar_medium": {
        "uri": "tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_720x720.webp?x-expires=1670526000&x-signature=dN7LHdMg8Th3%2FFlBUOO7kjl4a1w%3D",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_720x720.webp?x-expires=1670526000&x-signature=siXO3YFs0qU7gJgO12%2BWPt3Lo58%3D",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/188d5bba676499f7c85a8364319729eb~c5_720x720.jpeg?x-expires=1670526000&x-signature=ADCFCADqrRHl%2Fr%2FeuEV7wJ3Ldas%3D"
        ],
        "width": 720,
        "height": 720
      },
      "preview_start_time": 0,
      "preview_end_time": 0,
      "is_commerce_music": true,
      "is_original_sound": true,
      "artists": null,
      "lyric_short_position": null,
      "mute_share": false,
      "tag_list": null,
      "is_author_artist": false,
      "is_pgc": false,
      "matched_pgc_sound": {
        "author": "Summer Walker & JT & City Girls",
        "title": "Ex For A Reason",
        "mixed_title": "original sound - usersnameb7 (Contains music from: Ex For A Reason - Summer Walker & JT & City Girls)",
        "mixed_author": "Contains music from: \"Ex For A Reason\""
      },
      "search_highlight": null,
      "multi_bit_rate_play_info": null
    },
    "cha_list": [
      {
        "cid": "229207",
        "cha_name": "fyp",
        "desc": "",
        "schema": "aweme://aweme/challenge/detail?cid=229207",
        "author": {
          "followers_detail": null,
          "platform_sync_info": null,
          "geofencing": null,
          "cover_url": null,
          "item_list": null,
          "type_label": null,
          "ad_cover_url": null,
          "relative_users": null,
          "cha_list": null,
          "need_points": null,
          "homepage_bottom_toast": null,
          "can_set_geofencing": null,
          "white_cover_url": null,
          "user_tags": null,
          "bold_fields": null,
          "search_highlight": null,
          "mutual_relation_avatars": null,
          "events": null,
          "advance_feature_item_order": null,
          "advanced_feature_info": null,
          "user_profile_guide": null,
          "shield_edit_field_info": null,
          "can_message_follow_status_list": null,
          "account_labels": null
        },
        "user_count": 0,
        "share_info": {
          "share_url": "https://www.tiktok.com/tag/fyp?_r=1&name=fyp&u_code=0&language=en_US&_d=e4l6k6j871k3i4&share_challenge_id=229207&source=h5_m",
          "share_desc": "Check out #fyp on TikTok!",
          "share_title": "It is a becoming a big trend on TikTok now! Click here: fyp",
          "bool_persist": 0,
          "share_title_myself": "",
          "share_title_other": "",
          "share_signature_url": "",
          "share_signature_desc": "",
          "share_quote": "",
          "share_desc_info": "Check out #fyp on TikTok!",
          "now_invitation_card_image_urls": null
        },
        "connect_music": [],
        "type": 2,
        "sub_type": 0,
        "is_pgcshow": false,
        "collect_stat": 0,
        "is_challenge": 0,
        "view_count": 0,
        "is_commerce": false,
        "hashtag_profile": "",
        "cha_attrs": null,
        "banner_list": null,
        "show_items": null,
        "search_highlight": null
      }
    ],
    "video": {
      "play_addr": {
        "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
        "url_list": [
          "https://v77.tiktokcdn.com/44b3026a14a555a707acba5eca6edf21/639140db/video/tos/useast2a/tos-useast2a-ve-0068c004/oQtiQVnHWojLeK33iJbBR0UbwLt1fvEyADBsbQ/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=720&bt=360&cs=2&ds=6&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=11&rc=ZGY1ZGloOzNoaWk3OWc3OUBpM3A4Nzg6Zm9pZzMzNzczM0AvYl8yXzJjXmAxYDAtL2M0YSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=13",
          "https://v19.tiktokcdn.com/4ba4c7fdf0f3d14039f57baad5c5432b/639140db/video/tos/useast2a/tos-useast2a-ve-0068c004/oQtiQVnHWojLeK33iJbBR0UbwLt1fvEyADBsbQ/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=720&bt=360&cs=2&ds=6&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=11&rc=ZGY1ZGloOzNoaWk3OWc3OUBpM3A4Nzg6Zm9pZzMzNzczM0AvYl8yXzJjXmAxYDAtL2M0YSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=4",
          "https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v09044g40000cdbfrl3c77u5t4b5nmr0&line=0&is_play_url=1&source=PackSourceEnum_FEED&file_id=76f42d0634cf4fcea0f85ebf5ab2ec2a"
        ],
        "width": 576,
        "height": 1024,
        "url_key": "v09044g40000cdbfrl3c77u5t4b5nmr0_bytevc1_540p_368917",
        "data_size": 235185,
        "file_hash": "defd3c653dd0e88f6063a622e051d915"
      },
      "cover": {
        "uri": "tos-maliva-p-0068/bc378f64d3d94589a657da45ded0e596",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/bc378f64d3d94589a657da45ded0e596~noop.image?x-expires=1670526000&x-signature=%2FQ5Hw2cnI6aV5WtYCWSHh8nnUmQ%3D&s=FEED&se=false&sh=&sc=cover&l=202212071941410102170952341C62013A",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/bc378f64d3d94589a657da45ded0e596~noop.image?x-expires=1670526000&x-signature=%2BgZVlT8aSfkL8xEDhivF0yvKyV4%3D&s=FEED&se=false&sh=&sc=cover&l=202212071941410102170952341C62013A",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/bc378f64d3d94589a657da45ded0e596~noop.jpeg?x-expires=1670526000&x-signature=mrjL42vkATtaFEKddOlxHT9bHkY%3D&s=FEED&se=false&sh=&sc=cover&l=202212071941410102170952341C62013A"
        ],
        "width": 720,
        "height": 720
      },
      "height": 1920,
      "width": 1080,
      "dynamic_cover": {
        "uri": "tos-maliva-p-0068/4a98a14e940746aaa5319822664490ea_1666645735",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4a98a14e940746aaa5319822664490ea_1666645735?x-expires=1670526000&x-signature=QnFk1CdbGm1%2BICGTktKshb0pi3o%3D&s=FEED&se=false&sh=&sc=dynamic_cover&l=202212071941410102170952341C62013A",
          "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4a98a14e940746aaa5319822664490ea_1666645735?x-expires=1670526000&x-signature=oC25y%2B3rqIbC7%2FFVezAfQiQ92pQ%3D&s=FEED&se=false&sh=&sc=dynamic_cover&l=202212071941410102170952341C62013A"
        ],
        "width": 720,
        "height": 720
      },
      "origin_cover": {
        "uri": "tos-maliva-p-0068/209cbb014ca64185b1270c37115aae78_1666645734",
        "url_list": [
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/209cbb014ca64185b1270c37115aae78_1666645734~tplv-dmt-adapt-360p.image?x-expires=1670526000&x-signature=AKUTjKtYpixiEsqzcsbU9VOeyUk%3D&s=FEED&se=false&sh=&sc=feed_cover&l=202212071941410102170952341C62013A",
          "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/209cbb014ca64185b1270c37115aae78_1666645734~tplv-dmt-adapt-360p.image?x-expires=1670526000&x-signature=EEUMT8wSymknO7sVac84O%2BVtXSM%3D&s=FEED&se=false&sh=&sc=feed_cover&l=202212071941410102170952341C62013A",
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-p-0068/209cbb014ca64185b1270c37115aae78_1666645734~tplv-dmt-adapt-360p.jpeg?x-expires=1670526000&x-signature=6nxbanT99CKF1R%2BBnO0JrXdS8NM%3D&s=FEED&se=false&sh=&sc=feed_cover&l=202212071941410102170952341C62013A"
        ],
        "width": 720,
        "height": 720
      },
      "ratio": "540p",
      "download_addr": {
        "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
        "url_list": [
          "https://v77.tiktokcdn.com/b2a21e1846606da5747bfeaf203e31ff/639140db/video/tos/useast2a/tos-useast2a-pve-0068/oMfvjBoL3Yn3QyAUQsKEBgitsJeuRVtDnIJ0b7/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2356&bt=1178&cs=0&ds=3&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=0&rc=O2Q6OTU6Zzs0MzU2OjM0Z0BpM3A4Nzg6Zm9pZzMzNzczM0BiMTJeYWExNV8xNmFjNTQtYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=13",
          "https://v19.tiktokcdn.com/f6b56460630aa1211417b467bad178cb/639140db/video/tos/useast2a/tos-useast2a-pve-0068/oMfvjBoL3Yn3QyAUQsKEBgitsJeuRVtDnIJ0b7/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2356&bt=1178&cs=0&ds=3&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=0&rc=O2Q6OTU6Zzs0MzU2OjM0Z0BpM3A4Nzg6Zm9pZzMzNzczM0BiMTJeYWExNV8xNmFjNTQtYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=4",
          "https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v09044g40000cdbfrl3c77u5t4b5nmr0&line=0&watermark=1&logo_name=tiktok_m&source=FEED&file_id=0d7180f7d39240b1884dd7d2a6574ae8"
        ],
        "width": 720,
        "height": 720,
        "data_size": 791001
      },
      "has_watermark": true,
      "bit_rate": [
        {
          "gear_name": "adapt_lowest_1080_1",
          "quality_type": 2,
          "bit_rate": 930922,
          "play_addr": {
            "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
            "url_list": [
              "https://v77.tiktokcdn.com/ba2fa8bf28848fb638b762106f562fd1/639140db/video/tos/useast2a/tos-useast2a-ve-0068c003/oMVAYBDvefnGRqQb3p8v8ZcBbXJkVjQEBlhUF9/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=1818&bt=909&cs=2&ds=4&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=15&rc=aThkPGY5OTs4NztmZmYzM0BpM3A4Nzg6Zm9pZzMzNzczM0AxLjIvY140XjQxXl4wLy9fYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=13",
              "https://v19.tiktokcdn.com/b1a580d4f94410048e9a319808b1e55a/639140db/video/tos/useast2a/tos-useast2a-ve-0068c003/oMVAYBDvefnGRqQb3p8v8ZcBbXJkVjQEBlhUF9/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=1818&bt=909&cs=2&ds=4&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=15&rc=aThkPGY5OTs4NztmZmYzM0BpM3A4Nzg6Zm9pZzMzNzczM0AxLjIvY140XjQxXl4wLy9fYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=4",
              "https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v09044g40000cdbfrl3c77u5t4b5nmr0&line=0&is_play_url=1&source=PackSourceEnum_FEED&file_id=b0202c3caca84475a876a6fc295a154f"
            ],
            "width": 1080,
            "height": 1920,
            "url_key": "v09044g40000cdbfrl3c77u5t4b5nmr0_bytevc1_1080p_930922",
            "data_size": 591601,
            "file_hash": "c99d1646ea42b14cf4a0167f866cd7d2"
          },
          "is_bytevc1": 1,
          "dub_infos": null,
          "HDR_type": "",
          "HDR_bit": ""
        },
        {
          "gear_name": "adapt_lower_720_1",
          "quality_type": 14,
          "bit_rate": 493047,
          "play_addr": {
            "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
            "url_list": [
              "https://v77.tiktokcdn.com/7310ce427b2140bab83945b81ee547b9/639140db/video/tos/useast2a/tos-useast2a-ve-0068c004/okpiBybnJQLBR3jE0AZsyVtvuBfAwD35eJlUoQ/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=962&bt=481&cs=2&ds=3&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=14&rc=OTtlOTo4PDhpNjZpODQ5NEBpM3A4Nzg6Zm9pZzMzNzczM0A0YDZiMV9gNTMxM19iNTAuYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=13",
              "https://v19.tiktokcdn.com/4b961da0e042a4be2994172e3e1c9eb4/639140db/video/tos/useast2a/tos-useast2a-ve-0068c004/okpiBybnJQLBR3jE0AZsyVtvuBfAwD35eJlUoQ/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=962&bt=481&cs=2&ds=3&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=14&rc=OTtlOTo4PDhpNjZpODQ5NEBpM3A4Nzg6Zm9pZzMzNzczM0A0YDZiMV9gNTMxM19iNTAuYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=4",
              "https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v09044g40000cdbfrl3c77u5t4b5nmr0&line=0&is_play_url=1&source=PackSourceEnum_FEED&file_id=113681e5bf63436f85c9b547e69bc876"
            ],
            "width": 720,
            "height": 1280,
            "url_key": "v09044g40000cdbfrl3c77u5t4b5nmr0_bytevc1_720p_493047",
            "data_size": 314318,
            "file_hash": "c904c0330c60917942b194a9c0d1334b"
          },
          "is_bytevc1": 1,
          "dub_infos": null,
          "HDR_type": "",
          "HDR_bit": ""
        },
        {
          "gear_name": "adapt_540_1",
          "quality_type": 28,
          "bit_rate": 368917,
          "play_addr": {
            "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
            "url_list": [
              "https://v77.tiktokcdn.com/44b3026a14a555a707acba5eca6edf21/639140db/video/tos/useast2a/tos-useast2a-ve-0068c004/oQtiQVnHWojLeK33iJbBR0UbwLt1fvEyADBsbQ/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=720&bt=360&cs=2&ds=6&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=11&rc=ZGY1ZGloOzNoaWk3OWc3OUBpM3A4Nzg6Zm9pZzMzNzczM0AvYl8yXzJjXmAxYDAtL2M0YSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=13",
              "https://v19.tiktokcdn.com/4ba4c7fdf0f3d14039f57baad5c5432b/639140db/video/tos/useast2a/tos-useast2a-ve-0068c004/oQtiQVnHWojLeK33iJbBR0UbwLt1fvEyADBsbQ/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=720&bt=360&cs=2&ds=6&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=11&rc=ZGY1ZGloOzNoaWk3OWc3OUBpM3A4Nzg6Zm9pZzMzNzczM0AvYl8yXzJjXmAxYDAtL2M0YSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=4",
              "https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v09044g40000cdbfrl3c77u5t4b5nmr0&line=0&is_play_url=1&source=PackSourceEnum_FEED&file_id=76f42d0634cf4fcea0f85ebf5ab2ec2a"
            ],
            "width": 576,
            "height": 1024,
            "url_key": "v09044g40000cdbfrl3c77u5t4b5nmr0_bytevc1_540p_368917",
            "data_size": 235185,
            "file_hash": "defd3c653dd0e88f6063a622e051d915"
          },
          "is_bytevc1": 1,
          "dub_infos": null,
          "HDR_type": "",
          "HDR_bit": ""
        },
        {
          "gear_name": "lower_540_1",
          "quality_type": 24,
          "bit_rate": 224845,
          "play_addr": {
            "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
            "url_list": [
              "https://v77.tiktokcdn.com/64bd5402809cc29a654ca22bf9e051c0/639140db/video/tos/useast2a/tos-useast2a-pve-0068/oknpdcb3Ilbvj8vEfPXBAUJYDVQBwhFQRv16Ae/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=438&bt=219&cs=2&ds=6&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=4&rc=aWdlN2Y5NjdnaWdnOjtkaUBpM3A4Nzg6Zm9pZzMzNzczM0AuMV9fMi0uX14xMGAyYDBgYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=13",
              "https://v19.tiktokcdn.com/331536278069effc83347d8446100a5b/639140db/video/tos/useast2a/tos-useast2a-pve-0068/oknpdcb3Ilbvj8vEfPXBAUJYDVQBwhFQRv16Ae/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=438&bt=219&cs=2&ds=6&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=4&rc=aWdlN2Y5NjdnaWdnOjtkaUBpM3A4Nzg6Zm9pZzMzNzczM0AuMV9fMi0uX14xMGAyYDBgYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=4",
              "https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v09044g40000cdbfrl3c77u5t4b5nmr0&line=0&is_play_url=1&source=PackSourceEnum_FEED&file_id=cf3ac857cd3d4fadb413065cb4bb4d1f"
            ],
            "width": 576,
            "height": 1024,
            "url_key": "v09044g40000cdbfrl3c77u5t4b5nmr0_bytevc1_540p_224845",
            "data_size": 143339,
            "file_hash": "eadf0971f31ed85098be2cf463e339ea"
          },
          "is_bytevc1": 1,
          "dub_infos": null,
          "HDR_type": "",
          "HDR_bit": ""
        },
        {
          "gear_name": "lowest_540_1",
          "quality_type": 25,
          "bit_rate": 178696,
          "play_addr": {
            "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
            "url_list": [
              "https://v77.tiktokcdn.com/db6ae56101937d316d4394718df88505/639140db/video/tos/useast2a/tos-useast2a-pve-0068/oIABXfbq7q6GzcPvINRA34CFokhXg9PU2x3ZI2/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=348&bt=174&cs=2&ds=6&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=5&rc=MzQ6ZWlkZWY6N2Q0OjgzaEBpM3A4Nzg6Zm9pZzMzNzczM0AtXmBeNF9fXzAxLV8uYTQwYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=13",
              "https://v19.tiktokcdn.com/e9125dd0e6856a8677a2016e0d890584/639140db/video/tos/useast2a/tos-useast2a-pve-0068/oIABXfbq7q6GzcPvINRA34CFokhXg9PU2x3ZI2/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=348&bt=174&cs=2&ds=6&ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD&mime_type=video_mp4&qs=5&rc=MzQ6ZWlkZWY6N2Q0OjgzaEBpM3A4Nzg6Zm9pZzMzNzczM0AtXmBeNF9fXzAxLV8uYTQwYSNva19xcjQwb19gLS1kMTZzcw%3D%3D&l=202212071941410102170952341C62013A&btag=80000&cc=4",
              "https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v09044g40000cdbfrl3c77u5t4b5nmr0&line=0&is_play_url=1&source=PackSourceEnum_FEED&file_id=3e70d517b10a4437bcbbba7fabc7a100"
            ],
            "width": 576,
            "height": 1024,
            "url_key": "v09044g40000cdbfrl3c77u5t4b5nmr0_bytevc1_540p_178696",
            "data_size": 113919,
            "file_hash": "4634b62372971aaf883d07636555d60f"
          },
          "is_bytevc1": 1,
          "dub_infos": null,
          "HDR_type": "",
          "HDR_bit": ""
        }
      ],
      "duration": 5100,
      "play_addr_h264": {
        "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
        "url_list": [
          "",
          "",
          ""
        ],
        "width": 576,
        "height": 1024,
        "url_key": "v09044g40000cdbfrl3c77u5t4b5nmr0_h264_540p_1172501",
        "data_size": 768721,
        "file_hash": "121075a3075a75fa00349a820bc058dd"
      },
      "cdn_url_expired": 1670463707,
      "need_set_token": false,
      "misc_download_addrs": "{\"suffix_scene\":{\"uri\":\"v09044g40000cdbfrl3c77u5t4b5nmr0\",\"url_list\":[\"https://v77.tiktokcdn.com/3e8640eec839dbb312ee56e7884ea027/639140db/video/tos/useast2a/tos-useast2a-pve-0068/oYqVJhUQnlV3vB5bQDbhAGf4v8pFMjBEgXYRfu/?a=1233\\u0026ch=0\\u0026cr=3\\u0026dr=0\\u0026lr=all\\u0026cd=0%7C0%7C0%7C3\\u0026cv=1\\u0026br=1746\\u0026bt=873\\u0026cs=0\\u0026ds=3\\u0026ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD\\u0026mime_type=video_mp4\\u0026qs=0\\u0026rc=Zzo4NDk0aGkzPDtmNjU4NUBpM3A4Nzg6Zm9pZzMzNzczM0A0XjIuY2AxNmIxYGNiXmJgYSNva19xcjQwb19gLS1kMTZzcw%3D%3D\\u0026l=202212071941410102170952341C62013A\\u0026btag=80000\\u0026cc=13\",\"https://v19.tiktokcdn.com/ef8cfcfd80b6cde83099446f625586bd/639140db/video/tos/useast2a/tos-useast2a-pve-0068/oYqVJhUQnlV3vB5bQDbhAGf4v8pFMjBEgXYRfu/?a=1233\\u0026ch=0\\u0026cr=3\\u0026dr=0\\u0026lr=all\\u0026cd=0%7C0%7C0%7C3\\u0026cv=1\\u0026br=1746\\u0026bt=873\\u0026cs=0\\u0026ds=3\\u0026ft=XsFb8q4fmrdPD12hmVXq3wU33hjFaeF~OD\\u0026mime_type=video_mp4\\u0026qs=0\\u0026rc=Zzo4NDk0aGkzPDtmNjU4NUBpM3A4Nzg6Zm9pZzMzNzczM0A0XjIuY2AxNmIxYGNiXmJgYSNva19xcjQwb19gLS1kMTZzcw%3D%3D\\u0026l=202212071941410102170952341C62013A\\u0026btag=80000\\u0026cc=4\",\"https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v09044g40000cdbfrl3c77u5t4b5nmr0\\u0026line=0\\u0026watermark=1\\u0026logo_name=tiktok_end_sonic\\u0026source=FEED\\u0026file_id=c2e5a2e3fcc849e09f4ec1f61155a77d\"],\"width\":720,\"height\":720,\"data_size\":1022405}}",
      "tags": null,
      "big_thumbs": null,
      "play_addr_bytevc1": {
        "uri": "v09044g40000cdbfrl3c77u5t4b5nmr0",
        "url_list": [
          "",
          "",
          ""
        ],
        "width": 576,
        "height": 1024,
        "url_key": "v09044g40000cdbfrl3c77u5t4b5nmr0_bytevc1_540p_368917",
        "data_size": 235185,
        "file_hash": "defd3c653dd0e88f6063a622e051d915"
      },
      "is_bytevc1": 1,
      "meta": "{\"loudness\":\"-9.6\",\"peak\":\"1\",\"qprf\":\"1.000\",\"sr_score\":\"1.000\"}",
      "source_HDR_type": 0
    },
    "share_url": "https://www.tiktok.com/@inanis7/video/7158188898156334342?_r=1&u_code=0&preview_pb=0&language=en_US&_d=e4l6k6j871k3i4&share_item_id=7158188898156334342&source=h5_m",
    "user_digged": 0,
    "statistics": {
      "aweme_id": "7158188898156334342",
      "comment_count": 233,
      "digg_count": 10650,
      "download_count": 85,
      "play_count": 96215,
      "share_count": 68,
      "forward_count": 0,
      "lose_count": 0,
      "lose_comment_count": 0,
      "whatsapp_share_count": 2,
      "collect_count": 436
    },
    "status": {
      "aweme_id": "7158188898156334342",
      "is_delete": false,
      "allow_share": true,
      "allow_comment": true,
      "is_private": false,
      "with_goods": false,
      "private_status": 0,
      "in_reviewing": false,
      "reviewed": 1,
      "self_see": false,
      "is_prohibited": false,
      "download_status": 0
    },
    "rate": 12,
    "text_extra": [
      {
        "start": 15,
        "end": 19,
        "user_id": "",
        "type": 1,
        "hashtag_name": "fyp",
        "hashtag_id": "229207",
        "is_commerce": false,
        "sec_uid": ""
      }
    ],
    "is_top": 0,
    "label_top": {
      "uri": "tiktok-obj/1598708589477025.PNG",
      "url_list": [
        ""
      ],
      "width": 720,
      "height": 720
    },
    "share_info": {
      "share_url": "",
      "share_desc": "",
      "share_title": "",
      "bool_persist": 0,
      "share_title_myself": "",
      "share_title_other": "",
      "share_link_desc": "",
      "share_signature_url": "",
      "share_signature_desc": "",
      "share_quote": "",
      "share_desc_info": "",
      "now_invitation_card_image_urls": null
    },
    "distance": "",
    "video_labels": [],
    "is_vr": false,
    "is_ads": false,
    "aweme_type": 0,
    "cmt_swt": false,
    "image_infos": null,
    "risk_infos": {
      "vote": false,
      "warn": false,
      "risk_sink": false,
      "type": 0,
      "content": ""
    },
    "is_relieve": false,
    "sort_label": "{\"author_id\":155065993357131776,\"author_country\":\"Denmark\",\"need_coldstart_force\":false,\"need_heat_force\":false}",
    "position": null,
    "uniqid_position": null,
    "author_user_id": 155065993357131780,
    "bodydance_score": 0,
    "geofencing": null,
    "is_hash_tag": 1,
    "is_pgcshow": false,
    "region": "DK",
    "video_text": [],
    "collect_stat": 0,
    "label_top_text": null,
    "group_id": "7158188898156334342",
    "prevent_download": false,
    "nickname_position": null,
    "challenge_position": null,
    "item_comment_settings": 0,
    "with_promotional_music": false,
    "long_video": null,
    "item_duet": 0,
    "item_react": 0,
    "desc_language": "es",
    "interaction_stickers": [
      {
        "type": 18,
        "index": 0,
        "track_info": "[{\"x\":0.5006,\"end_time\":5066.666,\"p\":-1,\"y\":0.2743,\"h\":0.1997,\"isRatioCoord\":true,\"start_time\":0,\"r\":0,\"w\":0.7826,\"s\":1}]",
        "attr": "",
        "text_info": "Me in a Scandinavian school seeing another black person🇩🇰🇸🇪🇳🇴",
        "text_sticker_info": {
          "text_size": 0,
          "text_color": "#FFFFFFFF",
          "bg_color": "#00000000",
          "text_language": "en",
          "alignment": 0,
          "source_width": 0.7439613526570048,
          "source_height": 0.16168478260869565
        }
      }
    ],
    "misc_info": "{}",
    "origin_comment_ids": null,
    "commerce_config_data": null,
    "distribute_type": 1,
    "video_control": {
      "allow_download": true,
      "share_type": 1,
      "show_progress_bar": 0,
      "draft_progress_bar": 0,
      "allow_duet": true,
      "allow_react": true,
      "prevent_download_type": 0,
      "allow_dynamic_wallpaper": true,
      "timer_status": 1,
      "allow_music": true,
      "allow_stitch": true
    },
    "has_vs_entry": false,
    "need_vs_entry": false,
    "anchors": null,
    "hybrid_label": null,
    "with_survey": false,
    "geofencing_regions": null,
    "aweme_acl": {
      "download_general": {
        "code": 0,
        "show_type": 2,
        "transcode": 3,
        "mute": false
      },
      "download_mask_panel": {
        "code": 0,
        "show_type": 2,
        "transcode": 3,
        "mute": false
      },
      "share_list_status": 0,
      "share_general": {
        "code": 0,
        "show_type": 2,
        "transcode": 3,
        "mute": false
      },
      "platform_list": null
    },
    "cover_labels": null,
    "mask_infos": [],
    "search_highlight": null,
    "playlist_blocked": false,
    "green_screen_materials": null,
    "question_list": null,
    "content_desc": "",
    "content_desc_extra": [],
    "products_info": null,
    "follow_up_publish_from_id": 7157478685233253000,
    "disable_search_trending_bar": true,
    "music_begin_time_in_ms": 0,
    "music_end_time_in_ms": 5066,
    "item_distribute_source": "for_you_page",
    "item_source_category": 0,
    "branded_content_accounts": null,"is_description_translatable": true,"follow_up_item_id_groups": "","is_text_sticker_translatable": false,"text_sticker_major_lang": "un"}],
  has_more: 0,
  min_cursor: 0,
  max_cursor: 0,
};

const COMMENT_DELETED_RESPONSE = {
  code: 200,
  msg: ''
};

const LIKE_VIDEO_RESPONSE = {
  code: 200,
  msg: '',
  action: 'like'
};

const UNLIKE_VIDEO_RESPONSE = {
  code: 200,
  msg: '',
  action: 'unlike'
};

const FOLLOW_USER_RESPONSE = {
  'code': 200,
  'msg': 'success', 
  'follow_status': 1
};

const UNFOLLOW_USER_RESPONSE = {
  'code': 200,
  'msg': 'success',
  'follow_status': 0,
  'follower_status': 1
};

module.exports = {
    LOGIN_RESPONSE,
    ERROR_RESPONSE,
    ME_RESPONSE,
    EDIT_PROFILE_RESPONSE,
    FYP_RESPONSE,
    COMMENT_RESPONSE,
    INBOX_RESPONSE,
    COMMENT_DELETED_RESPONSE,
    LIKE_VIDEO_RESPONSE,
    UNLIKE_VIDEO_RESPONSE,
    FOLLOW_USER_RESPONSE,
    UNFOLLOW_USER_RESPONSE
}