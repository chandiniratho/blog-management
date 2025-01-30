// services/api.ts
import axios from 'axios';
import { Post } from '../types/types';

const API_URL = 'http://localhost:5000/posts';

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPost = async (id: number): Promise<Post> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPost = async (post: { title: string; content: string }): Promise<Post> => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

export const updatePost = async (id: number, post: { title: string; content: string }): Promise<Post> => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
