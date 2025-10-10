console.log("Iniciando o arquivo server.js...");

const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

console.log("Módulos importados com sucesso.");

app.use(express.json());
app.use(cors());

console.log("Middleware (express.json, cors) configurado.");

const WHATSAPP_TOKEN = 'EAAanrdIh8DoBPvTJXAP0vpvFnwKMdLf1hkNNkZBrgUTqPMiRfu7JAYfnXhfsTHnCtjT1EsOvQymO7zobZCv4GWgEGlgMqQXkYZBwjeDbVlUi0VL2eDfYmuhFrVcg4Kcg2M6tgJp5plCkHYHNR4TQOpTKG1UZAjHxcv653bv4b3ZAYTDmKNsFIC5cTCveAapMnZBbasb6HgC8J5pk1kFYoSUwlieHvzD47PWbJUpRhbkagZD';
const ID_NUMERO_TELEFONE = '803720429497110';

console.log("Variáveis de ambiente (token e ID) definidas.");

app.post('/notificar', async (req, res) => {
    console.log("Recebida uma requisição para /notificar");
    const { pedidoId, novoStatus, numeroCliente } = req.body;
    console.log(`Dados recebidos: Pedido=${pedidoId}, Status=${novoStatus}, Cliente=${numeroCliente}`);


    if (!numeroCliente) {
        console.log("Erro: Número do cliente não fornecido.");
        return res.status(400).json({ error: 'Número do cliente não fornecido.' });
    }

    const mensagem = `O status do seu pedido #${pedidoId} foi atualizado para: ${novoStatus}.`;
    console.log(`Mensagem a ser enviada: "${mensagem}"`);


    try {
        console.log("Tentando enviar a mensagem para a API do WhatsApp...");
        await axios.post(`https://graph.facebook.com/v18.0/${ID_NUMERO_TELEFONE}/messages`, {
            messaging_product: "whatsapp",
            to: numeroCliente,
            type: "text",
            text: {
                "preview_url": false,
                "body": mensagem
            }
        }, {
            headers: {
                'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        console.log("Mensagem enviada com sucesso para a API.");
        res.json({ success: true, message: 'Notificação enviada com sucesso!' });

    } catch (error) {
        console.error('Erro ao enviar mensagem:', error.response ? error.response.data : error.message);
        res.status(500).json({ success: false, error: 'Falha ao enviar notificação.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}. Agora você pode abrir o index.html.`);
});

console.log("Configuração do servidor concluída. Aguardando o servidor iniciar...");