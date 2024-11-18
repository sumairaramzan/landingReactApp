// actions/postActions.js

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const UPLOAD_FILE_REQUEST='UPLOAD_FILE_REQUEST'
export const UPLOAD_FILE_SUCCESS='UPLOAD_FILE_SUCCESS'
export const UPLOAD_FILE_FAILURE='UPLOAD_FILE_FAILURE'
export const UPDATE_POST_THUMBNAIL='UPDATE_POST_THUMBNAIL'


export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

// Add success and failure actions
export const fetchPostsSuccess = (posts) => {
  // console.log(posts, "postsposts");
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});
// Actions for uploading files and videos
export const uploadFileRequest = (file) => {
  console.log(file, "selectedFileselectedFile");

  return{
  type: UPLOAD_FILE_REQUEST,
  payload: file,
  }
};

export const uploadFileSuccess = (data) => ({
  type: UPLOAD_FILE_SUCCESS,
  payload: data,
});

export const uploadFileFailure = (error) => ({
  type: UPLOAD_FILE_FAILURE,
  payload: error,
});
export const updatePostThumbnail = ({ postId, mediaIndex, thumbnailUrl }) => ({
  type: UPDATE_POST_THUMBNAIL,
  payload: { postId, mediaIndex, thumbnailUrl },
});

