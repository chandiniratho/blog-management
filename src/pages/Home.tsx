import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import PostList from '../components/PostList';
import { Post } from '../types/types';
import '../styling.css'; // Import the CSS file

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Blog</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
