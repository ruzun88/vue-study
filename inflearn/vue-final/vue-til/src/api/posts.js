import { postInstance as instance } from './index';

// 학습 노트 데이터 목록 조회 api
function fetchPosts() {
  return instance.get('/');
}

// 학습 노트 데이터 단건 조회 api
function fetchPost(id) {
  return instance.get(id);
}

// 학습 노트 생성
function createPost(postData) {
  return instance.post('/', postData);
}

// item delete
function deletePost(postId) {
  return instance.delete(postId);
}

// item modifying
function editPost(postId, postData) {
  return instance.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
