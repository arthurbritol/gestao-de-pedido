const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Conexão com o Supabase (backend)
const supabase = createClient(
  "https://ungbusaxamlbnthkprpy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuZ2J1c2F4YW1sYm50aGtwcnB5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzM3NTE3MiwiZXhwIjoyMDkyOTUxMTcyfQ.fa5SYKnUL1gvfKUvV-yuEJsTCuD0fsJPpPP3kawI_O8"
);

// rota de teste
app.get("/api/health", async (req, res) => {
  const { data, error } = await supabase
    .from("pedidos")
    .select("id")
    .limit(1);

  if (error) {
    return res.status(500).json({ erro: error.message });
  }

  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("✅ API rodando em http://localhost:3000");
});

// ✅ BUSCAR PEDIDOS
app.get("/api/pedidos", async (req, res) => {
  const { data, error } = await supabase
    .from("pedidos")
    .select("*")
    .order("id");

  if (error) {
    console.error("Erro ao buscar pedidos:", error);
    return res.status(500).json({ erro: error.message });
  }

  res.json(data);
});

app.post("/api/pedidos", async (req, res) => {
  try {
    const p = req.body;

    // ✅ MAPEAMENTO EXATO PARA O SCHEMA DA TABELA
    const pedidoDB = {
      id: p.id,
      cliente: p.cliente,
      telefone: p.telefone,
      endereco: p.endereco,
      status: p.status,
      data: p.data,
      embarque: p.embarque,
      motorista: p.motorista,
      produtos: p.produtos ?? {},
      peso_estimado: Number(p.pesoEstimado ?? p.peso_estimado ?? 0)
    };

    const { error } = await supabase
      .from("pedidos")
      .upsert(pedidoDB, { onConflict: "id" });

    if (error) {
      console.error("❌ Erro Supabase:", error);
      return res.status(500).json({ erro: error.message });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("🔥 Erro inesperado:", err);
    res.status(500).json({ erro: "Erro interno no backend" });
  }
});

// ✅ ROTA DE NOTIFICAÇÃO (mock/simulada)
app.post("/notificar", async (req, res) => {
  const { pedidoId, novoStatus, numeroCliente } = req.body;

  const mensagem = 
`📦 Atualização do seu pedido #${pedidoId}

Status atualizado para:
✅ ${novoStatus}

Qualquer dúvida, estamos à disposição.`;

  try {
    const resultado = await enviarWhatsApp(numeroCliente, mensagem);
    res.json({ ok: true, resultado });
  } catch (erro) {
    console.error("Erro ao enviar WhatsApp:", erro);
    res.status(500).json({ ok: false });
  }
});
``

import fetch from "node-fetch";

async function enviarWhatsApp(numero, mensagem) {
  const url = `https://graph.facebook.com/v25.0/1086941114502727/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to: numero,
    type: "text",
    text: { body: mensagem }
  };

  const resposta = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.EAAbqBJS2bX8BRWZB9ZBC30I8AvQQwRZA7gMh6imroaneLW5Fm02yXz3IbdXfo6aA2Ln9uUtL1bCQyudIYhk6cZB1zFE99ArkZBykPJKwkuLmSFy9UFMaPRlUwAU8AKZCYvJpdKKDEm30snBZCg9hQBRJZAWu4v6xuPSQg5Ts5BIysMiC8aVedZBKUuDalKv8QEevRfvuFoRse0w1LLULWYWzTUawIqk3eZAohvgjxR2efUbdoNcvBFZASxYuEO561xiPMlpsx1G7QyitWj1q8VRYuSU}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const json = await resposta.json();
  return json;
}
