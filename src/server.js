import express from "express";
import { config } from "dotenv";
import cors from "cors"; // Importa o middleware CORS

import routes from "./routes/index.routes.js";
import { createInitialAdmin } from "./controllers/userController.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // Define a porta do servidor

// Inicializa o Express
const app = express();
app.use(cors()); // Habilita CORS para todas as rotas

app.use(express.json()); // Parse de JSON

app.use("/", routes);

// Criar administrador inicial ao iniciar o servidor
const startServer = async () => {
  try {
    // Aguardar um pouco para garantir que o banco está pronto
    setTimeout(async () => {
      await createInitialAdmin();
    }, 1000);

    // Iniciar o servidor
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port} - Bem-vindo ao mundo dos filmes e séries!🍿`);
      console.log(`🔐 Sistema de autenticação configurado`);
      console.log(`📊 Admin será criado automaticamente se não existir`);
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar servidor:", error);
  }
};

startServer();
