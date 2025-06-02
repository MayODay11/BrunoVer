# School Management System

## Descrição do Projeto
O Sistema de Gerenciamento Escolar Infantil foi desenvolvido para atender às necessidades da Escola Infantil UniFAAT-ADS. O objetivo deste projeto é fornecer uma solução eficiente para gerenciar informações de estudantes, professores e outras entidades relacionadas ao ambiente escolar.

## Estrutura do Repositório
A estrutura do repositório é organizada da seguinte forma:

- **APP/**: Contém todos os arquivos fonte do sistema (backend).
  - **src/**: Contém a lógica da aplicação.
    - **controllers/**: Controladores que gerenciam a lógica de negócios.
    - **models/**: Modelos de dados que representam as entidades do sistema.
    - **routes/**: Configuração das rotas da API.
    - **app.ts**: Ponto de entrada da aplicação.
  - **package.json**: Dependências e scripts do projeto.
  - **tsconfig.json**: Configuração do TypeScript.
  - **Dockerfile**: Instruções para construir a imagem Docker do backend.

- **Docs/**: Contém a documentação técnica do projeto.
  - **MER.pdf**: Modelo Entidade-Relacionamento do banco de dados.
  - **DFD.pdf**: Diagrama de Fluxo de Dados do sistema.
  - **README.md**: Documentação do projeto.

- **database.Dockerfile**: Instruções para construir a imagem Docker do banco de dados.
- **database.sql**: Comandos DDL para criar as tabelas do banco de dados.
- **docker-compose.yml**: Orquestração dos containers Docker.
- **README.md**: Documentação geral do projeto.

## Instruções de Execução

### Pré-requisitos
- Docker e Docker Compose instalados.

### Executando o Backend e o Banco de Dados
1. Navegue até a raiz do projeto.
2. Execute o seguinte comando para construir e iniciar os containers:
   ```
   docker-compose up --build
   ```
3. O backend estará disponível em `http://localhost:3000`.

### Interagindo com as Rotas da API
- **Listar Estudantes**: `GET /students`
- **Criar Estudante**: `POST /students`
- **Acessar Estudante Específico**: `GET /students/:id`

Para mais detalhes sobre as rotas e suas funcionalidades, consulte a documentação dos controladores na pasta `APP/src/controllers/`.