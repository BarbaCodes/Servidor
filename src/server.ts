import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Criar uma instância do Express
const app = express();

const prisma = new PrismaClient();

// Middleware para lidar com JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/requerimentos', async (req, res) => {
  try {
    const users = await prisma.requerimentos.findMany();
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Criar um usuário
app.get('/requerimentos/:fields', async (req, res) => {   
  let fields = req.params.fields.split('-');
  
  const requirements = await prisma.requerimentos.create({
    data: {
      protocolo: parseInt(fields[4]),
      nome: fields[0],
      cpf: parseInt(fields[1]),
      descricao: fields[2],
      grauUrgencia: fields[3],
    },
  })
})

// Retorna os serviços
app.get('/servicos', async(req, res) => {
  try {
    const services = await prisma.servicos.findMany();
    res.json(services);
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    res.status(500).json({ error: 'Erro ao buscar serviços' });
  }
})

// Iniciar o servidor
app.listen(3000, () => {
  console.log(`Sucesso!, servidor está ouvindo na porta 3000`);
});
