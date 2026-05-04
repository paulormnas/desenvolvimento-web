---
layout: default
---

# Requisições HTTP com Axios

Buscando dados de APIs externas.

O **Axios** é uma biblioteca popular para fazer requisições HTTP, oferecendo uma API mais limpa que o `fetch` nativo.

```jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.login}</li>)}
    </ul>
  );
}
```
