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

app.get('/cidadao', async (req, res) => {
  try {
    const users = await prisma.cidadao.findMany();
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
})

app.get('/cidadao/:fields', async (req, res) => {
  let fields = req.params.fields.split('-');

  const user = await prisma.cidadao.create({
    data: {
      cpf: fields[0],
      nome: fields[1],
      ficha: parseInt(fields[2]),
    }
  })
})

app.get('/funcionarios', async (req, res) => {
  try {
    const users = await prisma.funcionario.findMany();
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.get('/funcionarios/:fields', async (req, res) => {
  let fields = req.params.fields.split('-');
  
  const user = await prisma.funcionario.create({
    data: {
      cpf: fields[0],
      senha: fields[1],
    }
  })

  res.json(user);
})

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
      cpf: fields[1],
      descricao: fields[2],
      grauUrgencia: fields[3],
    },
  })

  res.json(requirements);
});



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

// Cadastra um serviço
app.get('/servicos/:fields', async (req, res) => {
  let fields = req.params.fields.split('-');
  
  const services = await prisma.servicos.create({
    data: {
      nomeDoutor: fields[0],
      ubsNome: fields[1],
      area: fields[2],
      horariosAtendimento: fields[3],
      ficha: parseInt(fields[4]),
    },
  })

  res.json(services);
})

// Iniciar o servidor
app.listen(3000, () => {
  console.log(`Sucesso!, servidor está ouvindo na porta 3000`);
});
