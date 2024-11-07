import React, { useState } from 'react';

// Componente que representa um card de tarefa
function TaskCard({ task, onDelete, onStatusChange, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task }); // Copiar valores iniciais

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      onDelete(task.id);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedTask({ ...task }); // Resetar valores ao iniciar/fechar edição
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleEditSave = () => {
    onEdit(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Título da tarefa */}
      {!isEditing ? (
        <h3 className={`text-xl mb-2 ${task.status === 'completa' ? 'line-through' : ''}`}>
          {task.title}
        </h3>
      ) : (
        <input
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleEditChange}
          className="text-xl mb-2 border rounded p-1"
        />
      )}

      {/* Descrição da tarefa */}
      {!isEditing ? (
        <p className="text-gray-600 mb-4">{task.description}</p>
      ) : (
        <textarea
          name="description"
          value={editedTask.description}
          onChange={handleEditChange}
          className="w-full p-2 border rounded"
        />
      )}

      <div className="flex justify-between items-center">
        {/* Status da tarefa - Apenas editável no modo de edição */}
        <select
          value={editedTask.status}
          onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          className="p-2 border rounded"
          disabled={!isEditing} // Desabilitar se não estiver editando
        >
          <option value="não completa">Não completa</option>
          <option value="completa">Completa</option>
        </select>

        <div className="flex space-x-2">
          {!isEditing ? (
            <button
              onClick={handleEditToggle}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={handleEditSave}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Salvar
            </button>
          )}

          {/* Botão de deletar */}
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
