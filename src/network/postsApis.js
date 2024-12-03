import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// fetch Posts data
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
});

// adding new post
export const addPost = createAsyncThunk('posts/addPost', async (postInfo) => {
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    postInfo
  );
  return response.data;
});

// get post
export const getPost = createAsyncThunk('posts/getPost', async (postId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return response.data;
});

// delete post
export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    return postId;
  }
);

// update post
export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ postId, updateData }) => {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      updateData
    );

    return response.data;
  }
);
