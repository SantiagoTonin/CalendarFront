import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function Publications() {
  const { username } = useParams();
  const location = useLocation();
  const infoUser = location.state;

  return (
    <div>
      <p>Username: {username}</p>
      <p>age:{infoUser.age}</p>
    </div>
  );
}



