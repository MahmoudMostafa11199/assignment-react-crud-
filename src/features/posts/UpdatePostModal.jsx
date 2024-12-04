import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import { updatePost } from './postsSlice';

function UpdatePostModal({ show, handleClose, currentPost, setCurrentPost }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.postsData.loading);

  const handleUpdatePost = () => {
    const updatedPostData = {
      title: currentPost.title,
      body: currentPost.body,
    };

    dispatch(
      updatePost({ postId: currentPost.id, updatedData: updatedPostData })
    ).then(() => {
      toast.success('Post updated successfully');
      handleClose();
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <div className="add-post-form">
        <Modal.Body>
          <input
            type="text"
            className="form-control mb-2"
            id="title"
            placeholder="Title"
            value={currentPost.title}
            disabled={isLoading}
            onChange={(e) =>
              setCurrentPost({ ...currentPost, title: e.target.value })
            }
          />

          <textarea
            className="form-control mb-2"
            placeholder="Body"
            rows="4"
            value={currentPost.body}
            disabled={isLoading}
            onChange={(e) =>
              setCurrentPost({ ...currentPost, body: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="w-50 m-1"
            variant="secondary"
            onClick={handleClose}
            disabled={isLoading}
          >
            Close
          </Button>
          <Button
            className="w-50 m-1"
            variant="primary"
            onClick={handleUpdatePost}
            disabled={isLoading}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default UpdatePostModal;
