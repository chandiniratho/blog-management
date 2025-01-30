import React from 'react';
import { Post } from '../types/types';
import { Link } from 'react-router-dom';
import '../styling.css'; // Import the CSS file

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id} className="post-item">
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
