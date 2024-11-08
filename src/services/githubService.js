const GITHUB_API_URL = "https://api.github.com/users";

export const fetchUserRepos = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/${username}/repos`);
    if (!response.ok) {
      throw new Error("Usuário não encontrado ou erro na requisição");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
