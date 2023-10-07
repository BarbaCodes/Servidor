"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Criar uma instância do Express
const app = (0, express_1.default)();
const port = 3000; // Porta em que o servidor será executado
// Middleware para lidar com JSON
app.use(express_1.default.json());
// Rota de exemplo
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo ao meu servidor Express em TypeScript!' });
});
// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});
