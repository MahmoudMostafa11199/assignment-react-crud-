import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Post from '../features/posts/Post';
import AddPost from '../features/posts/AddPost';
import Spinner from '../Components/Spinner';

import { fetchPosts } from '../features/posts/postsSlice';
import '../features/posts/style.css';

function Posts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, loading: isLoading } = useSelector((state) => state.postsData);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleShowPost = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <React.Fragment>
      <div className="posts-container">
        <div className="row row-cols-6 justify-content-between align-items-center mb-4">
          <h2>All Posts</h2>
          <p>Total Posts: {posts.length}</p>
        </div>
        <div className="row">
          <div className="col-lg-8">
            {isLoading && <Spinner />}
            {posts &&
              posts.map((post) => (
                <Post key={post.id} post={post} onclick={handleShowPost} />
              ))}
          </div>

          <AddPost />
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}

export default Posts;
/*
<>
  <div className="container">
    <div className="row">

      <div className="col-lg-4">
        <div className="add-post-form">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => {
              setNewPost({ ...newPost, title: e.target.value });
            }}
          />
          <p className="text-danger">error: you should enter valid title contains chars and number</p>
          <textarea
            className="form-control mb-2"
            placeholder="Body"
            rows="4"
            value={newPost.body}
            onChange={(e) => {
              setNewPost({ ...newPost, body: e.target.value });
            }}
          />
          <p className="text-danger">error: you should enter valid title contains chars and number</p>
          <button className="btn btn-success" onClick={handleAddPost}>
            <FontAwesomeIcon icon={faPlus} /> Add Post
          </button>
        </div>
    </div>
  </div>
</>
*/
