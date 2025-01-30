import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, deletePost } from '../services/api';
import { Post } from '../types/types';
import { useNavigate } from 'react-router-dom';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const data = await getPost(parseInt(id));
        setPost(data);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (id) {
      await deletePost(parseInt(id));
      navigate('/');
    }
  };

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={handleDelete}>Delete Post</button>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostDetail;
