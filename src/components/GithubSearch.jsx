import React, { useState } from "react";
import { fetchUserRepos } from "../services/githubService";
import RepositoriesList from "./RepositoriesList";

const GithubSearch = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserRepos(username);
      setRepos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
        Buscar Repositórios no GitHub
      </h2>

      {/* Campo de entrada */}
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite o nome de usuário"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className={`mt-2 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${loading ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {loading ? "Carregando..." : "Buscar"}
        </button>
      </div>

      {/* Mensagem de erro */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Lista de repositórios */}
      <RepositoriesList repos={repos} />
    </div>
  );
};

export default GithubSearch;
