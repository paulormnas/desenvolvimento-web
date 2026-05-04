import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import UserCard from './components/UserCard';

// Componente da Página Inicial
function Home() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const searchUser = async () => {
    try {
      setError(null);
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setUser(null);
      setError('Usuário não encontrado');
    }
  };

  return (
    <main>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Digite o usuário do GitHub" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={searchUser}>Buscar</button>
      </div>

      {error && <p className="error">{error}</p>}
      {user && <UserCard user={user} />}
    </main>
  );
}

// Componente Sobre
function About() {
  return (
    <main>
      <h2>Sobre este Exemplo</h2>
      <p>Este aplicativo demonstra o uso de:</p>
      <ul>
        <li>Hooks (useState, useEffect)</li>
        <li>Componentização</li>
        <li>Roteamento (React Router)</li>
        <li>Requisições HTTP (Axios)</li>
      </ul>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
