import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Criar uma instância do Express
const app = express();

const prisma = new PrismaClient();

// Middleware para lidar com JSON
app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.funcionario.findMany();
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Criar um usuário
app.get('/users/:fields', (req, res) => {   
  console.log("Tive uma requisição GET");
  res.send(req.params.fields.split('-'));
})

// Iniciar o servidor
app.listen(3000, () => {
  console.log(`Sucesso!, servidor está ouvindo na porta 3000`);
});
