// Auth Actions
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOADED_USER_DATA = 'LOADED_USER_DATA';

export const ACTION_PROCESSING = 'ACTION_PROCESSING';

export const LOGIN_USER_BY_GITHUB_SUCCESS = 'LOGIN_USER_BY_GITHUB_SUCCESS';
export const LOGIN_USER_BY_GITHUB_ERROR = 'LOGIN_USER_BY_GITHUB_ERROR';

export const LOGIN_USER_BY_FACEBOOK_SUCCESS = 'LOGIN_USER_BY_FACEBOOK_SUCCESS';
export const LOGIN_USER_BY_FACEBOOK_ERROR = 'LOGIN_USER_BY_FACEBOOK_ERROR';

export const LOGIN_USER_BY_GOOGLE_SUCCESS = 'LOGIN_USER_BY_GOOGLE_SUCCESS';
export const LOGIN_USER_BY_GOOGLE_ERROR = 'LOGIN_USER_BY_GOOGLE_ERROR';

export const REGISTER_USER_BY_EMAIL_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_BY_EMAIL_ERROR = 'REGISTER_USER_ERROR';

export const LOGOUT_USER = 'LOGOUT_USER';

export const DID_VERIFY_EMAIL = 'DID_VERIFY_EMAIL';
export const DID_RESEND_VERIFICATION_EMAIL = 'DID_RESEND_VERIFICATION_EMAIL';
export const DID_FORGOT_PASSWORD = 'DID_FORGOT_PASSWORD';
export const DID_RESET_PASSWORD = 'DID_RESET_PASSWORD';

export const VIDEOS_FETCHED_SUCCESS = 'VIDEOS_FETCHED_SUCCESS';
export const VIDEOS_FETCHED_ERROR = 'VIDEOS_FETCHED_ERROR';

export const SCENES_FETCHED_SUCCESS = 'SCENES_FETCHED_SUCCESS';
export const SCENES_FETCHED_ERROR = 'SCENES_FETCHED_ERROR';

export const DID_CREATE_MAGICLINK = 'DID_CREATE_MAGICLINK';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const RESTORE = 'RESTORE';

export const SHOW_DIALOG = 'SHOW_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export const AVATAR_UPDATED = 'AVATAR_UPDATED';
export const AVATAR_UPDATE_FAILURE = 'AVATAR_UPDATE_FAILURE';
export const USER_UPDATED = 'USER_UPDATED';
export const USERNAME_UPDATED = 'USERNAME_UPDATED';
export const USERAVATARID_UPDATED = 'USERAVATARID_UPDATED';

export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS';

export const UPDATE_USER_SETTINGS_FALURE = 'UPDATE_USER_SETTINGS_FALURE';

export const DETECT_DEVICE_TYPE = 'DETECT_DEVICE_TYPE';
// app

export const SET_APP_LOADED = 'SET_APP_LOADED';

export const LOADED_RELATIONSHIP = 'LOADED_RELATIONSHIP';
export const LOADED_USERS = 'LOADED_USERS';
export const CHANGED_RELATION = 'CHANGED_RELATION';
export const CLEAR_LAYER_USERS = 'CLEAR_LAYER_USERS';
export const LOADED_LAYER_USERS = 'LOADED_LAYER_USERS';
export const ADDED_LAYER_USER = 'ADDED_LAYER_USER';
export const REMOVED_LAYER_USER = 'REMOVED_LAYER_USER';

export const LOADED_SEATS = 'LOADED_SEATS';
export const INVITED_USER = 'INVITED_USER';
export const CANCELED_INVITATION = 'CANCELED_INVITATION';
export const REMOVED_SEAT = 'REMOVED_SEAT';

export const SET_APP_LOADING_PERCENT = 'SET_APP_LOADING_PERCENT';

export const SET_VIEWPORT_SIZE = 'SET_VIEWPORT_SIZE';

export const SET_IN_VR_MODE = 'SET_IN_VR_MODE';

export const SET_USER_HAS_INTERACTED = 'SET_USER_HAS_INTERACTED';

export const SET_APP_ONBOARDING_STEP = 'SET_APP_ONBOARDING_STEP';
export const SET_APP_SPECIFIC_ONBOARDING_STEP = 'SET_APP_SPECIFIC_ONBOARDING_STEP';

// video controls

export const SET_VIDEO_PLAYING = 'SET_VIDEO_PLAYING';

export type Action = {
  type: string;
  [key: string]: any;
}

// admin console

export const VIDEO_CREATED = 'VIDEO_CREATED';
export const VIDEO_UPDATED = 'VIDEO_UPDATED';
export const VIDEO_DELETED = 'VIDEO_DELETED';

export const LOADED_FRIENDS = 'LOADED_FRIENDS';
export const CREATED_FRIEND = 'CREATED_FRIEND';
export const PATCHED_FRIEND = 'PATCHED_FRIEND';
export const REMOVED_FRIEND = 'REMOVED_FRIEND';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';

export const INVITE_SENT = 'INVITE_SENT';
export const SENT_INVITES_RETRIEVED = 'SENT_INVITES_RETRIEVED';
export const RECEIVED_INVITES_RETRIEVED = 'RECEIVED_INVITES_RECEIVED';
export const CREATED_RECEIVED_INVITE = 'CREATED_RECEIVED_INVITE';
export const REMOVED_RECEIVED_INVITE = 'REMOVED_RECEIVED_INVITE';
export const CREATED_SENT_INVITE = 'CREATED_SENT_INVITE';
export const REMOVED_SENT_INVITE = 'REMOVED_SENT_INVITE';
export const ACCEPTED_INVITE = 'ACCEPTED_INVITE';
export const DECLINED_INVITE = 'DECLINED_INVITE';
export const INVITE_TARGET_SET = 'INVITE_TARGET_SET';
export const FETCHING_SENT_INVITES = 'FETCHING_SENT_INVITES';
export const FETCHING_RECEIVED_INVITES = 'FETCHING_RECEIVED_INVITES';

export const LOADED_GROUPS = 'LOADED_GROUPS';
export const CREATED_GROUP = 'CREATED_GROUP';
export const PATCHED_GROUP = 'PATCHED_GROUP';
export const REMOVED_GROUP = 'REMOVED_GROUP';
export const CREATED_GROUP_USER = 'CREATED_GROUP_USER';
export const PATCHED_GROUP_USER = 'PATCHED_GROUP_USER';
export const INVITED_GROUP_USER = 'INVITED_GROUP_USER';
export const REMOVED_GROUP_USER = 'REMOVED_GROUP_USER';
export const LEFT_GROUP = 'LEFT_GROUP';
export const FETCHING_GROUPS = 'FETCHING_GROUPS';
export const LOADED_INVITABLE_GROUPS = 'LOADED_INVITABLE_GROUPS';
export const FETCHING_INVITABLE_GROUPS = 'FETCHING_INVITABLE_GROUPS';

export const LOADED_PARTY = 'LOADED_PARTY';
export const CREATED_PARTY = 'CREATED_PARTY';
export const PATCHED_PARTY = 'PATCHED_PARTY';
export const REMOVED_PARTY = 'REMOVED_PARTY';
export const CREATED_PARTY_USER = 'CREATED_PARTY_USER';
export const PATCHED_PARTY_USER = 'PATCHED_PARTY_USER';
export const INVITED_PARTY_USER = 'INVITED_PARTY_USER';
export const REMOVED_PARTY_USER = 'REMOVED_PARTY_USER';
export const LEFT_PARTY = 'LEFT_PARTY';

export const CHAT_TARGET_SET = 'CHAT_TARGET_SET';
export const FETCHING_INSTANCE_CHANNEL = 'FETCHING_INSTANCE_CHANNEL';
export const LOADED_CHANNEL = 'LOADED_CHANNEL';
export const LOADED_CHANNELS = 'LOADED_CHANNELS';
export const CREATED_CHANNEL = 'CREATED_CHANNEL';
export const PATCHED_CHANNEL = 'PATCHED_CHANNEL';
export const REMOVED_CHANNEL = 'REMOVED_CHANNEL';
export const CREATED_MESSAGE = 'CREATED_MESSAGE';
export const LOADED_MESSAGES = 'LOADED_MESSAGES';
export const PATCHED_MESSAGE = 'PATCHED_MESSAGE';
export const REMOVED_MESSAGE = 'REMOVED_MESSAGE';
export const SET_MESSAGE_SCROLL_INIT = 'SET_MESSAGE_SCROLL_INIT';

export const INSTANCE_SERVER_PROVISIONING = 'INSTANCE_SERVER_PROVISIONING';
export const INSTANCE_SERVER_PROVISIONED = 'INSTANCE_SERVER_PROVISIONED';
export const INSTANCE_SERVER_CONNECTING = 'INSTANCE_SERVER_CONNECTING';
export const INSTANCE_SERVER_CONNECTED = 'INSTANCE_SERVER_CONNECTED';
export const INSTANCE_SERVER_DISCONNECTED = 'INSTANCE_SERVER_DISCONNECTED';
export const SOCKET_CREATED = 'SOCKET_CREATED';

export const CAM_VIDEO_ADDED = 'CAM_VIDEO_ADDED';
export const CAM_AUDIO_ADDED = 'CAM_AUDIO_ADDED';
export const SCREEN_VIDEO_ADDED = 'SCREEN_VIDEO_ADDED';
export const SCREEN_AUDIO_ADDED = 'SCREEN_AUDIO_ADDED';
export const CAM_VIDEO_REMOVED = 'CAM_VIDEO_REMOVED';
export const CAM_AUDIO_REMOVED = 'CAM_AUDIO_REMOVED';
export const SCREEN_VIDEO_REMOVED = 'SCREEN_VIDEO_REMOVED';
export const SCREEN_AUDIO_REMOVED = 'SCREEN_AUDIO_REMOVED';

export const FETCH_CURRENT_LOCATION = 'FETCH_CURRENT_LOCATION';
export const LOCATIONS_RETRIEVED = 'LOCATIONS_RETRIEVED';
export const INSTANCES_RETRIEVED = 'INSTANCES_RETRIEVED';
export const LOCATION_RETRIEVED = 'LOCATION_RETRIEVED';
export const LOCATION_CREATED = 'LOCATION_CREATED';
export const LOCATION_PATCHED = 'LOCATION_PATCHED';
export const LOCATION_REMOVED = 'LOCATION_REMOVED';
export const LOCATION_NOT_FOUND = 'LOCATION_NOT_FOUND';

export const LOCATION_BAN_CREATED = 'LOCATION_BAN_CREATED';

export const SCENES_RETRIEVED = 'SCENES_RETRIEVED';
export const LOCATION_TYPES_RETRIEVED = 'LOCATION_TYPES_RETRIEVED';
export const SET_CURRENT_SCENE = 'SET_CURRENT_SCENE';

export const INSTANCE_REMOVED = 'INSTANCE_REMOVED';

export const CHANNEL_SERVER_PROVISIONING = 'CHANNEL_SERVER_PROVISIONING';
export const CHANNEL_SERVER_PROVISIONED = 'CHANNEL_SERVER_PROVISIONED';
export const CHANNEL_SERVER_CONNECTING = 'CHANNEL_SERVER_CONNECTING';
export const CHANNEL_SERVER_CONNECTED = 'CHANNEL_SERVER_CONNECTED';
export const CHANNEL_SERVER_DISCONNECTED = 'CHANNEL_SERVER_DISCONNECTED';

export const CLEAR_CHANNEL_LAYER_USERS = 'CLEAR_CHANNEL_LAYER_USERS';
export const LOADED_CHANNEL_LAYER_USERS = 'LOADED_CHANNEL_LAYER_USERS';
export const ADDED_CHANNEL_LAYER_USER = 'ADDED_CHANNEL_LAYER_USER';
export const REMOVED_CHANNEL_LAYER_USER = 'REMOVED_CHANNEL_LAYER_USER';