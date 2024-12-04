import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPosts,
  addPost,
  getPost,
  deletePost,
  updatePost,
} from '../../network/postsApis';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    selectedPost: {},
    status: 'idle',
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.posts = [];
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
        state.loading = false;
      })

      .addCase(addPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      })

      .addCase(getPost.pending, (state, action) => {
        state.selectedPost = {};
        state.loading = true;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.error = 'Post not found!';
        state.loading = false;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
        state.error = null;
        state.loading = false;
      })

      .addCase(updatePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const postIndex = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );

        if (postIndex !== -1) {
          state.posts[postIndex] = action.payload;
        }
        state.loading = false;
      })

      .addCase(deletePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.loading = false;
      });
  },
});

export { fetchPosts, addPost, getPost, deletePost, updatePost };

export default postsSlice.reducer;
