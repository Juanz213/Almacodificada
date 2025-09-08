import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simulación de respuesta IA (modo dummy)
async function chatIA(mensaje) {
  if (mensaje.toLowerCase().includes("hola")) {
    return "¡Hola! ¿Cómo estás?";
  }
  return "Este es un mensaje de prueba de la IA.";
}

app.post("/api/chat", async (req, res) => {
  try {
    const { mensaje } = req.body;
    if (!mensaje || typeof mensaje !== "string") {
      return res.json({ respuesta: "No se recibió un mensaje válido." });
    }

    const respuesta = await chatIA(mensaje);

    if (!respuesta || typeof respuesta !== "string") {
      return res.json({ respuesta: "La IA no generó una respuesta." });
    }

    res.json({ respuesta });
  } catch (error) {
    console.error("Error en el chat:", error);
    res.json({ respuesta: `Error procesando mensaje: ${error.message}` });
  }
});

app.listen(4000, () => {
  console.log("Servidor iniciado en puerto 4000");
});
