// sagas/postSaga.js
import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  uploadFileFailure,
  uploadFileSuccess,
} from '../actions/postActions';
import axios from 'axios';

const fetchPostsFromAPI = async () => {
  try {
    const response = await fetch('https://howapp.urdulibrary.net/getAllPostsWithMedia/0', {
      method: 'GET',
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Fetch posts saga
function* fetchPosts() {
  try {
    const data = yield call(fetchPostsFromAPI);
    yield put(fetchPostsSuccess(data.posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}


const uploadImage = async (file) => {
  console.log(file,"fileelelel")
    const formData = new FormData();
    formData.append('image', file, 'file.jpg');
    try {
        const response = await axios.post('http://howapp.urdulibrary.net/uploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Upload successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Upload failed:', error);
        return null;
    }
};
function* imageUploader({payload}) {
  try {
    console.log(payload,"payload")
    const data = yield call(uploadImage(payload));
    console.log(data,"datadatadata")
    yield put(uploadFileSuccess(data.posts));
  } catch (error) {
    yield put(uploadFileFailure(error.message));
  }
}

export function* watchUploadFile() {
  yield takeLatest('UPLOAD_FILE_REQUEST', imageUploader);
}

function* watchFetchPosts() {
  yield takeLatest('FETCH_POSTS_REQUEST', fetchPosts);
}

export default function* rootSaga() {
  yield all([watchFetchPosts(), watchUploadFile()]);
}
