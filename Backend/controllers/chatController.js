const axios = require('axios');

const useDummy = process.env.USE_DUMMY_RESPONSE === 'true';

const handleChat = async (req, res) => {
  const { message } = req.body;
  console.log("🟢 Mensaje recibido:", message);

  if (useDummy) {
  
    const fakeReply = `Simulando respuesta a: "${message}"`;
    return res.json({ reply: fakeReply });
  }

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  }
;

module.exports = { handleChat };
