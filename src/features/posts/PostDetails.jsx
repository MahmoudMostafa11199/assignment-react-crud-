import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getPost } from './postsSlice';
import Post from './Post';

import Spinner from '../../Components/Spinner';

function PostDetails() {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const {
    selectedPost: post,
    loading,
    error,
  } = useSelector((state) => state.postsData);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  return (
    <div className="post-details">
      <h1>PostDetails #{postId}</h1>

      {loading && <Spinner />}
      {error && <p className="text-danger">Error: {error}</p>}
      {!loading && !error && <Post post={post} postDetails={true} />}

      <Link to="/posts" class="btn btn-primary mt-3">
        Go Back
      </Link>
    </div>
  );
}

export default PostDetails;
