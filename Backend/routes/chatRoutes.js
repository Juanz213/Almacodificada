import express from "express";
import { loadModel, createCompletion } from "gpt4all";

const router = express.Router();

let model;

async function initModel() {
  try {
    console.log("Inicializando GPT4All modelo...");
    model = await loadModel("orca-mini-3b-gguf2-q4_0.gguf", { verbose: true });
    console.log("GPT4All listo ✅");
  } catch (err) {
    console.error("Error cargando modelo GPT4All:", err);
  }
}

initModel();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ respuesta: "No se recibió mensaje." });
  }

  if (!model) {
    return res.status(503).json({ respuesta: "Modelo no disponible aún." });
  }

  try {
    const completion = await createCompletion(model, [
      { role: "system", content: "Eres un acompañante emocional protector." },
      { role: "user", content: message }
    ]);

    // Extraer texto plano de la respuesta
    const aiMessageObj = completion.choices?.[0]?.message;
    let aiText = "";

    if (typeof aiMessageObj === "string") {
      aiText = aiMessageObj;
    } else if (aiMessageObj && typeof aiMessageObj === "object") {
      aiText = aiMessageObj.content || "";
    }

    if (!aiText.trim()) {
      aiText = "No pude generar respuesta.";
    }

    res.json({ respuesta: aiText.trim() });
  } catch (err) {
    console.error("Error generando con GPT4All:", err);
    res.status(500).json({ respuesta: "Fallo al generar respuesta IA." });
  }
});

export default router;
