
# 🎬 Catálogo de Filmes e Séries (Back-end)

API para catalogar, avaliar e discutir filmes e séries, com funcionalidades sociais integradas.


## 📖 Sobre

Este repositório contém apenas o back-end da aplicação, desenvolvido em Node.js e Express, com banco de dados SQLite e autenticação JWT. Permite cadastro, login, avaliação, comentários, favoritos e gerenciamento de filmes e usuários.


## ✨ Funcionalidades

- 🔐 Autenticação (cadastro e login de usuários com JWT)
- 📚 Catálogo de filmes (visualização, busca, filtros)
- ⭐ Avaliações (notas/estrelas para títulos)
- 💬 Comentários e discussões
- ❤️ Favoritos (gestão de títulos favoritos)


## ️ Tecnologias

- Node.js + Express.js
- SQLite
- JWT (autenticação)
- Prisma ORM


## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Vinipereir/filmes-back-end-projeto-.git
cd filmes-back-end-projeto-
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure e execute as migrações do banco de dados

O projeto já utiliza SQLite e o arquivo de configuração está em `prisma/schema.prisma`. Para aplicar as migrações:


# 🎬 Catálogo de Filmes e Séries (Back-end)

API para catalogar, avaliar e discutir filmes e séries. Este repositório contém somente o back-end, desenvolvido com Node.js, Express e Prisma sobre SQLite.

## 📖 O que tem aqui

- Endpoints para cadastro/login (JWT)
- CRUD de filmes
- Avaliações (reviews)
- Favoritos
- Controle de usuários (roles)

## 🧰 Tecnologias

- Node.js 18+
- Express
- Prisma (SQLite)
- JWT para autenticação
- dotenv para variáveis de ambiente

## Pré-requisitos

Instale estes itens no seu sistema antes de começar:

- Node.js (recomendado 18.x ou superior)
- npm (vem com o Node)
- Git (opcional, para clonar o repositório)

As instruções abaixo assumem que você usará o PowerShell no Windows.

## Passo a passo para rodar localmente (Windows - PowerShell)

1) Clone o repositório (ou abra a pasta do projeto):

```powershell
git clone https://github.com/Vinipereir/filmes-back-end-projeto-.git ;
cd filmes-back-end-projeto-
```

2) Instale as dependências:

```powershell
npm install
```

3) Crie o arquivo de variáveis de ambiente `.env` na raiz do projeto

Crie um arquivo chamado `.env` e defina ao menos as seguintes variáveis (exemplo):

```text
# Porta em que o servidor irá rodar (opcional)
PORT=4001

# Secret para assinar os JWT (troque para uma string forte em produção)
JWT_SECRET=uma_chave_secreta_aqui

# (Opcional) Se quiser usar outro banco SQLite, aponte a URL do Prisma
DATABASE_URL="file:./dev.db"
```

Observação: este projeto usa SQLite por padrão e já inclui arquivos `prisma/dev.db` e `prisma/banco_relacionamento.db`. Se você quiser recriar o banco do zero, execute as migrações no passo seguinte.

4) Gerar client do Prisma e aplicar migrações

```powershell
npx prisma generate
npx prisma migrate dev --name init
```

Se você já tem o banco e não quer criar migrações, basta rodar `npx prisma generate`.

5) Popular o banco (seed)

O projeto inclui um script de seed em `prisma/seed.js`. Para popular a base de dados com dados iniciais, execute:

```powershell
node prisma/seed.js
```

6) Rodar em modo de desenvolvimento

```powershell
npm run dev
```

Por padrão o servidor escuta na porta definida em `PORT` ou, caso não exista, na porta `4001`. A saída no terminal mostrará a URL.

7) Testar endpoints

Use o Postman, Insomnia ou curl para testar os endpoints. Exemplo de chamada para verificar servidor:

```powershell
curl http://localhost:4001/
```

## Scripts úteis (definidos em `package.json`)

- npm run dev — inicia o servidor com nodemon (watch)
- npm run prisma:seed — executa `node prisma/seed.js` (seed)

## Notas e dicas

- Se alterar o schema do Prisma, execute `npx prisma migrate dev` e depois `npx prisma generate`.
- Mantenha o `JWT_SECRET` seguro em produção.
- Se houver problemas com permissões no Windows ao gerar o banco, tente executar o PowerShell como Administrador.

## Estrutura do projeto (resumo)

```
.
├─ src/
│  ├─ controllers/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  └─ server.js
├─ prisma/
│  ├─ schema.prisma
│  ├─ migrations/
│  ├─ dev.db
│  └─ seed.js
├─ package.json
└─ README.md

```