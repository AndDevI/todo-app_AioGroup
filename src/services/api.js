// Arquivo para chamadas à API
const API_URL = 'http://localhost:8000/api';

// Objeto com todas as chamadas à API
const api = {
  // Buscar todas as tarefas
  getTasks: async () => {
    const response = await fetch(`${API_URL}/tasks`);
    const data = await response.json();
    return data.data;
  },

  // Criar uma nova tarefa
  createTask: async (task) => {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data.data;
  },

  // Atualizar uma tarefa existente
  updateTask: async (id, task) => {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data.data;
  },

  // Deletar uma tarefa
  deleteTask: async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
  },
};

export default api;