import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import api from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddingTask, setIsAddingTask] = useState(false); // Controle de exibição do formulário
  const [showTaskList, setShowTaskList] = useState(true); // Controle de exibição da lista de tarefas

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      const data = await api.getTasks();
      setTasks(data);
    } catch (err) {
      setError('Erro ao carregar tarefas');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddTask(newTask) {
    try {
      await api.createTask(newTask);
      loadTasks();
      setIsAddingTask(false); // Oculta o formulário após adicionar a tarefa
      setShowTaskList(true); // Exibe a lista de tarefas após adicionar
    } catch (err) {
      setError('Erro ao adicionar tarefa');
      console.error(err);
    }
  }

  async function handleStatusChange(taskId, newStatus) {
    try {
      await api.updateTask(taskId, { status: newStatus });
      loadTasks();
    } catch (err) {
      setError('Erro ao atualizar tarefa');
      console.error(err);
    }
  }

  async function handleEditTask(taskId, updatedTask) {
    try {
      await api.updateTask(taskId, updatedTask);
      loadTasks();
    } catch (err) {
      setError('Erro ao editar tarefa');
      console.error(err);
    }
  }

  async function handleDeleteTask(taskId) {
    try {
      await api.deleteTask(taskId);
      loadTasks();
    } catch (err) {
      setError('Erro ao deletar tarefa');
      console.error(err);
    }
  }

  if (loading) {
    return <div className="text-center mt-8">Carregando...</div>;
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-zinc-200">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 p-4 bg-white border-l border-gray-400 m-8 rounded-3xl shadow-2xl">
          <h1 className='text-gray-700 text-2xl font-bold mt-8 ml-5'>AioGroup</h1>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <header className="p-10 flex justify-between items-center w-full bg-white border-b border-gray-400 rounded-bl-3xl shadow-lg">
            <h1 className="text-gray-700 text-2xl font-bold">Lista de Tarefas</h1>

            {/* Botão para adicionar tarefa no header */}
            <button
              onClick={() => {
                setIsAddingTask(!isAddingTask);
                setShowTaskList(isAddingTask); // Esconde ou mostra a lista de tarefas
              }}
              className="px-5 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              {isAddingTask ? 'Cancelar' : 'Adicionar Tarefa'}
            </button>
          </header>
          
          <section className='w-full p-10'>
            {/* Exibe o formulário apenas se `isAddingTask` for true */}
            {isAddingTask && (
              <div className="w-[50rem] mb-4">
                {error && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                    {error}
                  </div>
                )}
                <TaskForm onAddTask={handleAddTask} />
              </div>
            )}

            {/* Exibe a lista de tarefas apenas se `showTaskList` for true */}
            {showTaskList && (
              <div className="w-full">
                {tasks.length === 0 ? (
                  <p className="text-center text-gray-500">Nenhuma tarefa encontrada</p>
                ) : (
                  tasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onDelete={handleDeleteTask}
                      onStatusChange={handleStatusChange}
                      onEdit={handleEditTask}
                    />
                  ))
                )}
              </div>
            )}
          </section>
         
        </main>
      </div>
    </div>
  );
}

export default App;