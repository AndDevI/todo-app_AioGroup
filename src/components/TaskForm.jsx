import React, { useState } from 'react';

// Componente para o formulário de criação de tarefas
function TaskForm({ onAddTask }) {
  // Estado para controlar os campos do formulário
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('não completa');

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Cria objeto com os dados da tarefa
    const newTask = {
      title,
      description,
      status
    };

    // Envia para o componente pai
    onAddTask(newTask);

    // Limpa o formulário
    setTitle('');
    setDescription('');
    setStatus('não completa');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <form onSubmit={handleSubmit}>
        {/* Campo de título */}
        <div className="mb-4">
          <label className="block mb-2">Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Campo de descrição */}
        <div className="mb-4">
          <label className="block mb-2">Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Campo de status */}
        <div className="mb-4">
          <label className="block mb-2">Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="não completa">Não completa</option>
            <option value="completa">Completa</option>
          </select>
        </div>

        {/* Botão de submit */}
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
}

export default TaskForm;