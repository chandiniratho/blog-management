import React from 'react';
import PostList from '../components/PostList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <PostList />
    </div>
  );
};

export default Home;
