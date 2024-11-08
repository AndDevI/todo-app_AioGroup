# 📋 Lista de Tarefas com React e Vite  

## Descrição do Projeto  

Uma aplicação moderna de gerenciamento de tarefas desenvolvida com React + Vite, que integra uma API local em Laravel e consulta repositórios do GitHub. O projeto oferece uma experiência completa de gerenciamento de tarefas com recursos avançados de integração.  

## 🚀 Funcionalidades  

- **Gerenciamento de Tarefas**  
  - Adicionar novas tarefas  
  - Editar tarefas existentes  
  - Excluir tarefas  
  - Alterar status das tarefas (completa/pendente)  

- **Integração com GitHub**  
  - Buscar repositórios públicos de usuários  

## 💻 Tecnologias Utilizadas  

- **Frontend**  
  - React  
  - Vite  
  - TailwindCSS  
  - React Icons  

- **Backend**  
  - Laravel (API Local)  (https://github.com/AndDevI/to_do-List_API--AioGroup)
  - GitHub REST API  

## 📦 Pré-requisitos  

- Node.js (v14 ou superior)  
- npm ou yarn  
- PHP (para a API Laravel)  
- Composer  

## 🛠️ Instalação e Configuração  

### Clonar o Repositório  

```bash  
git clone https://github.com/seu-usuario/seu-repositorio.git  
cd seu-repositorio
```

### Instalar Dependências

```bash 
npm install  
```

### Iniciar Desenvolvimento

```bash 
npm run dev  
```
- Lembre-se de iniciar o projeto Laravel: (https://github.com/AndDevI/to_do-List_API--AioGroup).

## 📂 Estrutura do Projeto

```bash
/src
  /components
    TaskForm.jsx           # Formulário para adicionar novas tarefas
    TaskCard.jsx           # Componente que exibe as tarefas
    GithubSearch.jsx       # Componente para buscar usuário do GitHub
    RepositoriesLis.jsx    # Componente para listar os repositórios do usuário
  /services
    api.js                # Funções para interação com a API (criação, edição, exclusão e obtenção de tarefas)
    githunService.js      # Função para interação com a API do Github.
  App.js                  # Componente principal da aplicação
  index.js                # Ponto de entrada da aplicação
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).