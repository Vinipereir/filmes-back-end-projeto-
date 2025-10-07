import * as userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// Função para validar email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar senha (mínimo 6 caracteres)
const isValidPassword = (password) => {
  return password && password.length >= 6;
};

// Função para hash da senha usando crypto
const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password + 'filmcommunity_salt').digest('hex');
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validação 1: Verificar se todos os campos foram preenchidos
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        error: "Todos os campos são obrigatórios",
        details: {
          name: !name ? "Nome é obrigatório" : null,
          email: !email ? "Email é obrigatório" : null,
          password: !password ? "Senha é obrigatória" : null,
          confirmPassword: !confirmPassword ? "Confirmação de senha é obrigatória" : null
        }
      });
    }

    // Validação 2: Verificar se o nome tem pelo menos 2 caracteres
    if (name.trim().length < 2) {
      return res.status(400).json({
        error: "Nome deve ter pelo menos 2 caracteres"
      });
    }

    // Validação 3: Verificar se o email é válido
    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Email inválido. Por favor, insira um email válido"
      });
    }

    // Validação 4: Verificar se a senha tem pelo menos 6 caracteres
    if (!isValidPassword(password)) {
      return res.status(400).json({
        error: "Senha deve ter pelo menos 6 caracteres"
      });
    }

    // Validação 5: Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "As senhas não coincidem"
      });
    }

    // Validação 6: Verificar se o email já existe
    const existingUser = await userModel.getUserByEmail(email.toLowerCase());

    if (existingUser) {
      return res.status(400).json({
        error: "Este email já está cadastrado. Tente fazer login ou use outro email"
      });
    }

    // Se passou por todas as validações, criar o usuário
    const hashedPassword = hashPassword(password);

    const userData = {
      name: name.trim(),
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "user"
    };

    const user = await userModel.createUser(userData);

    // Gerar token JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      },
      token
    });

  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({
      error: "Erro interno do servidor. Tente novamente mais tarde."
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validação 1: Verificar se email e senha foram fornecidos
    if (!email || !password) {
      return res.status(400).json({
        error: "Email e senha são obrigatórios"
      });
    }

    // Validação 2: Verificar se o email é válido
    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Email inválido"
      });
    }

    // Buscar usuário pelo email
    const user = await userModel.getUserByEmail(email.toLowerCase());

    if (!user) {
      return res.status(401).json({
        error: "Email ou senha incorretos"
      });
    }

    // Verificar senha
    const hashedInputPassword = hashPassword(password);

    if (hashedInputPassword !== user.password) {
      return res.status(401).json({
        error: "Email ou senha incorretos"
      });
    }

    // Gerar token JWT incluindo role
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: "Login realizado com sucesso!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({
      error: "Erro interno do servidor. Tente novamente mais tarde."
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({
      error: "Erro interno do servidor"
    });
  }
};

// Middleware para verificar se é admin
export const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        error: "Token não fornecido"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== 'admin') {
      return res.status(403).json({
        error: "Acesso negado. Apenas administradores podem acessar esta funcionalidade."
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Token inválido"
    });
  }
};

// Função para criar o administrador inicial
export const createInitialAdmin = async () => {
  try {
    // Verificar se já existe um admin
    const existingAdmin = await userModel.getUserByEmail("vinicius.p.oliveira8@aluno.senai.br");

    if (!existingAdmin) {
      const hashedPassword = hashPassword("vini9080");

      const adminData = {
        name: "Vinícius Admin",
        email: "vinicius.p.oliveira8@aluno.senai.br",
        password: hashedPassword,
        role: "admin"
      };

      await userModel.createUser(adminData);

      console.log("✅ Administrador inicial criado com sucesso!");
      console.log("Email: vinicius.p.oliveira8@aluno.senai.br");
      console.log("Senha: vini9080");
    } else {
      console.log("✅ Administrador já existe no sistema");
    }
  } catch (error) {
    console.error("❌ Erro ao criar administrador inicial:", error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.deleteUser(Number(id));
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário removido com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
