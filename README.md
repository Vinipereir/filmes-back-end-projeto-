# 🎬 Catálogo de Filmes e Séries

Uma aplicação web full stack para catalogar, avaliar e discutir filmes e séries com funcionalidades sociais integradas.

## 📖 Sobre

O **Catálogo de Filmes e Séries** é uma plataforma social onde usuários podem organizar seus conteúdos audiovisuais favoritos, compartilhar avaliações e participar de discussões. A aplicação oferece uma experiência completa para fãs de cinema e TV.

**Problema que resolve:**
- Organização de listas de filmes e séries assistidos e desejados
- Centralização de avaliações e comentários pessoais  
- Descoberta de novos conteúdos através de recomendações sociais
- Ambiente focado para discussões sobre entretenimento

**Público-alvo:** Jovens e adultos (15-35 anos) conectados, fãs de filmes e séries que valorizam organização pessoal e interação social.

## ✨ Funcionalidades

- 🔐 **Autenticação:** Cadastro e login de usuários com JWT
- 📚 **Catálogo:** Visualização, busca e filtros por gênero
- ⭐ **Avaliações:** Sistema de notas/estrelas para títulos
- 💬 **Social:** Comentários, respostas e discussões
- 📊 **Perfil:** Estatísticas pessoais e listas customizadas
- ❤️ **Favoritos:** Gestão de títulos favoritos
- 🎭 **Detalhes:** Informações completas com sinopse e elenco

## 🗺️ Páginas

1. **Home** - Portal com destaques e feed da comunidade
2. **Catálogo** - Lista completa com filtros e busca
3. **Detalhes** - Informações completas e área de discussão
4. **Sobre Mim** - Perfil, estatísticas e configurações
5. **Favoritos** - Lista dedicada aos títulos favoritos

## 🛠️ Tecnologias

**Backend:**
- Node.js + Express.js
- SQLite
- JWT (autenticação)
- API RESTful

**Frontend:**
- React.js
- Consumo exclusivo da API
- Design responsivo

**Testes:**
- Unitários e integração
- Cobertura backend e frontend

## 🚀 Execução

### Passo a Passo para Executar o Projeto

#### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/filmes-back-end-projeto-.git
cd filmes-back-end-projeto-
```

#### 2. Instale as dependências do backend
```bash
cd backend
npm install
```

#### 3. Configure o banco de dados
- Edite o arquivo `.env` se necessário.
- Execute as migrações:
```bash
npx prisma migrate dev
```

#### 4. Inicie o backend
```bash
npm run dev
```
O backend estará disponível em `http://localhost:4001` (ou porta configurada).

#### 5. Instale as dependências do frontend
Abra outro terminal:
```bash
cd ../frontend
npm install
```

#### 6. Inicie o frontend
```bash
npm start
```
O frontend estará disponível em `http://localhost:3000`.

#### 7. Acesse a aplicação
Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

---
**Obs:** Certifique-se de que o backend esteja rodando antes de iniciar o frontend.

## 📁 Estrutura
```
projeto/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── tests/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── tests/
└── README.md



⭐ **Gostou do projeto? Deixe uma estrela!**