// components/PostForm.tsx
import React, { useState } from 'react';
import { createPost } from '../services/api';
import { Post } from '../types/types';
import '../styling.css';

interface PostFormProps {
  onPostCreated: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = { title, content };
    const createdPost = await createPost(newPost);
    onPostCreated(createdPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
