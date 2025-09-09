
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


```bash
npx prisma migrate dev
npx prisma generate
```

Se quiser popular o banco com dados iniciais, execute:

```bash
node prisma/seed.js
```

### 4. Inicie o servidor

```bash
npm run dev
```

O back-end estará disponível em `http://localhost:4001` (ou porta configurada).

## 📁 Estrutura de Pastas
```
filmes-back-end-projeto-/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   ├── dev.db
│   ├── banco_relacionamento.db
│   └── seed.js
├── package.json
├── README.md
└── ...
```

---
⭐ **Gostou do projeto? Deixe uma estrela!**