import axios from 'axios';
import { Post } from '../types/types';

const API_URL = 'http://localhost:5000/posts';  // JSON Server URL

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPost = async (id: number): Promise<Post | null> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

export const createPost = async (post: Omit<Post, 'id'>): Promise<Post | null> => {
  try {
    const posts = await getPosts();  // Get all posts
    const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;  // Generate ID

    const response = await axios.post(API_URL, { ...post, id: newId });

    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};

export const updatePost = async (id: number, post: Omit<Post, 'id'>): Promise<Post | null> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, post);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    return null;
  }
};

export const deletePost = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};
