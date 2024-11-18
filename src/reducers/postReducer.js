// reducers/postReducer.js

import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  UPDATE_POST_THUMBNAIL,
  UPLOAD_FILE_FAILURE,
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
} from "../actions/postActions";

const initialState = {
  loading: false,
  posts: [],
  error: null,
  uploadData: null, 
  uploadError: null,
  isUploading: false,
  uploadUrl: null,
  uploadError: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case UPLOAD_FILE_SUCCESS:
        return {
          ...state,
          uploadUrl: action.payload,
          uploadError: null,
        };
      case UPLOAD_FILE_FAILURE:
        return {
          ...state,
          uploadUrl: null,
          uploadError: action.payload,
        };
        case UPDATE_POST_THUMBNAIL: {
          const { postId, mediaIndex, thumbnailUrl } = action.payload;
          return {
            ...state,
            posts: state.posts.map((post) =>
              post.id === postId
                ? {
                    ...post,
                    media: post.media.map((mediaItem, index) =>
                      index === mediaIndex
                        ? { ...mediaItem, thumbnailUrl }
                        : mediaItem
                    ),
                  }
                : post
            ),
          };
        }
    default:
      return state;
  }
};

export default postReducer;
