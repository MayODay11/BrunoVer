<<<<<<< HEAD
# School Management System

## Descrição do Projeto
O Sistema de Gerenciamento Escolar Infantil foi desenvolvido para atender às necessidades da Escola Infantil UniFAAT-ADS. O objetivo deste projeto é fornecer uma solução robusta para gerenciar informações de estudantes, professores e outras entidades relacionadas ao ambiente escolar. Esta etapa do projeto foca no desenvolvimento do backend, que inclui a implementação de rotas de API, controladores e modelos de dados.

## Estrutura do Repositório
A estrutura do repositório é organizada da seguinte forma:

- **APP/**: Contém todos os arquivos fonte do sistema (backend).
  - **src/**: Contém o código-fonte da aplicação.
    - **controllers/**: Contém os controladores que gerenciam a lógica de negócios.
      - `index.ts`: Exporta as classes de controladores.
    - **models/**: Define os modelos de dados que representam as entidades do sistema.
      - `index.ts`: Contém os modelos de dados.
    - **routes/**: Configura as rotas da API.
      - `index.ts`: Define as rotas e associa URLs a métodos dos controladores.
    - `app.ts`: Ponto de entrada da aplicação, inicializa o servidor Express.
  - `package.json`: Contém as dependências do projeto e scripts de execução.
  - `tsconfig.json`: Configuração do TypeScript.
  - `Dockerfile`: Instruções para construir a imagem Docker do backend.

- **Docs/**: Contém a documentação técnica do projeto.
  - `MER.pdf`: Modelo Entidade-Relacionamento do banco de dados.
  - `DFD.pdf`: Diagrama de Fluxo de Dados do sistema.
  
- `database.Dockerfile`: Instruções para construir a imagem Docker do banco de dados.
- `database.sql`: Comandos DDL para criar as tabelas do banco de dados.
- `docker-compose.yml`: Orquestra a execução dos containers Docker.
- `README.md`: Documentação do projeto.

## Instruções de Execução

### Executando o Backend e o Banco de Dados com Docker

1. **Certifique-se de que o Docker e o Docker Compose estão instalados.**

2. **Clone o repositório:**
   ```
   git clone <URL_DO_REPOSITORIO>
   cd school-management-system
   ```

3. **Construa e inicie os containers:**
   ```
   docker-compose up --build
   ```

4. **Acesse a aplicação:**
   O backend estará disponível em `http://localhost:3000`.

### Interagindo com as Rotas de API

As rotas da API estão configuradas para manipular dados de estudantes e professores. Exemplos de URLs incluem:

- `GET /students`: Lista todos os estudantes.
- `POST /students`: Cria um novo estudante.
- `GET /students/:id`: Acessa um estudante específico pelo ID.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções.
=======
# BrunoVer
>>>>>>> 3ad396a419c53b10dddd43681cfdecca37b73974
