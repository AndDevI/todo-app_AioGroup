import React from "react";

const RepositoriesList = ({ repos }) => {
  if (repos.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        <p className="text-sm sm:text-base">Nenhum repositório encontrado.</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-800 mb-4">Repositórios Públicos:</h3>
      <div className="max-h-96 overflow-y-auto">
        <ul className="space-y-2">
          {repos.map((repo) => (
            <li key={repo.id} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm sm:text-base"
              >
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepositoriesList;
