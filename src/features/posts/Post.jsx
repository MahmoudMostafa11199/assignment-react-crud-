import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import './style.css';
import { deletePost } from './postsSlice';
import Button from '../../Components/Button/Button';

const PostsList = ({ post, onclick, postDetails = false }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.postsData.loading);

  const handleDeletePost = () => {
    dispatch(deletePost(post.id)).then((res) => {
      if (res.error) {
        toast.error('Failed to delete post');
      } else {
        toast.success('Post deleted successfully');
      }
    });
  };

  return (
    <div className="card post-item" key={post.id}>
      <div className="card-body">
        <h5 onClick={() => onclick && onclick(post.id)}>
          {post.id} - {post.title}
        </h5>
        <p className="card-text">{post.body}</p>
        {!postDetails && (
          <div className="postControlButtons">
            <Button btnClass="btn btn-primary">
              <FontAwesomeIcon icon={faEdit} />
              <span> Update</span>
            </Button>
            <Button
              btnClass="btn btn-danger"
              onclick={handleDeletePost}
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faTrash} />
              <span> Delete</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsList;
