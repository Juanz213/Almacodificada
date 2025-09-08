import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conversación dummy predefinida
const conversaciones = [
  { from: "user", text: "Hola" },
  { from: "bot", text: "¡Hola! Bienvenido al chat de Alma Codificada." },
  { from: "user", text: "¿Qué puedes hacer?" },
  { from: "bot", text: "Por ahora soy una simulación dummy, pero pronto podrás hablar conmigo en tiempo real." },
  { from: "user", text: "Genial, gracias." },
  { from: "bot", text: "¡De nada! 😊" }
];

// Endpoint que devuelve solo la conversación dummy
app.post("/api/chat", (req, res) => {
  res.json({ respuestas: conversaciones });
});

app.listen(4000, () => {
  console.log("Servidor dummy iniciado en puerto 4000 🚀");
});
