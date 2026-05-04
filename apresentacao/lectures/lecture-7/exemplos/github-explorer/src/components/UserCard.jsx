import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.name} width="100" />
      <div className="user-info">
        <h3>{user.name || user.login}</h3>
        <p>{user.bio}</p>
        <p><strong>Seguidores:</strong> {user.followers}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">Ver perfil no GitHub</a>
      </div>
    </div>
  );
}

export default UserCard;
