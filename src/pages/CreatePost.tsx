// pages/CreatePost.tsx
import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import { Post } from '../types/types';

const CreatePost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePostCreated = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <PostForm onPostCreated={handlePostCreated} />
    </div>
  );
};

export default CreatePost;
