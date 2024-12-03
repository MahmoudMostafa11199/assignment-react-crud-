import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import { addPost } from './postsSlice';
import Button from '../../Components/Button/Button';

function AddPost() {
  const dispatch = useDispatch();
  const { loading: isLoading } = useSelector((state) => state.postsData);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // dispatch action
    dispatch(addPost(data)).then(() => {
      reset();
      toast.success('Post added successfully');
    });
  };

  return (
    <div className="col-lg-4">
      <form className="add-post-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="form-control mb-2"
          id="title"
          placeholder="Title"
          disabled={isLoading}
          {...register('title', {
            required: 'This field is required',
            minLength: {
              value: 5,
              message: 'Title must be at least 5 characters',
            },
            maxLength: {
              value: 50,
              message: 'Title should not exceed 50 characters',
            },
          })}
        />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}

        <textarea
          className="form-control mb-2"
          placeholder="Body"
          rows="4"
          disabled={isLoading}
          {...register('body', {
            required: 'This field is required',
            minLength: {
              value: 20,
              message: 'Body must be at least 20 characters',
            },
          })}
        />
        {errors.body && <p className="text-danger">{errors.body.message}</p>}

        <Button btnClass="btn btn-success" disabled={isLoading}>
          <FontAwesomeIcon icon={faPlus} /> Add Post
        </Button>
      </form>
    </div>
  );
}

export default AddPost;
