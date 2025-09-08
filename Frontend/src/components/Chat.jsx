import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");

    setMessages(prev => [...prev, { user: userMessage }]);
    setLoading(true);

    setTimeout(() => {
      const dummyReply = "Aquí tienes la respuesta de tu avatar.";
      setMessages(prev => [...prev, { bot: dummyReply }]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-purple-500 mb-4">💬 Chat con tu Avatar</h2>

      <div className="space-y-4 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-purple-50 p-3 rounded-lg">
            {msg.user && (
              <>
                <p className="font-semibold">Tú:</p>
                <p className="mb-2">{msg.user}</p>
              </>
            )}
            {msg.bot && (
              <>
                <p className="font-semibold">Avatar:</p>
                <p>{msg.bot}</p>
              </>
            )}
          </div>
        ))}

        {loading && (
          <div className="bg-purple-100 p-3 rounded-lg text-purple-600 italic">
            El avatar está pensando...
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className={`bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-400 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
