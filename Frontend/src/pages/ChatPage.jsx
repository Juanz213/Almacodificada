import React, { useState, useRef, useEffect } from "react";

export default function ChatPage() {
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const enviarMensaje = async () => {
    if (!input.trim() || loading) return;

    const textoUsuario = input.trim();
    setMensajes((prev) => [...prev, { texto: textoUsuario, autor: "usuario" }]);
    setInput("");
    setLoading(true);

    try {
      const respuesta = await fetch("http://localhost:4000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje: textoUsuario }),
      });

      if (!respuesta.ok) throw new Error("Error en la respuesta del servidor");

      const data = await respuesta.json();

      setMensajes((prev) => [...prev, { texto: data.respuesta, autor: "ia" }]);
    } catch (error) {
      setMensajes((prev) => [
        ...prev,
        { texto: "IA: Error al conectar con el servidor.", autor: "ia" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [mensajes]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarMensaje();
    }
  };

  return (
    <div style={styles.container}>
      {/* Panel izquierdo */}
      <aside style={styles.leftPanel}>
        <img
          src="/avatar-placeholder.jpg"
          alt="Avatar Alma"
          style={styles.avatarImage}
        />
        <p style={styles.welcomeText}>
          Hola, soy tu asistente virtual. ¿En qué puedo ayudarte hoy?
          nota: en esta parte se inserta a Lia o el avatar seleccionado
        </p>
      </aside>

      {/* Chat central */}
      <main style={styles.chatContainer}>
        <div style={styles.chatBox} ref={chatBoxRef}>
          {mensajes.map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.mensaje,
                ...(msg.autor === "usuario" ? styles.usuario : styles.ia),
              }}
            >
              {msg.texto}
            </div>
          ))}
          {loading && <div style={styles.loading}>IA está escribiendo...</div>}
        </div>
        <div style={styles.inputBox}>
          <textarea
            rows={2}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un mensaje..."
            style={styles.textarea}
            disabled={loading}
          />
          <button
            onClick={enviarMensaje}
            style={
              loading || !input.trim()
                ? styles.buttonDisabled
                : styles.button
            }
            disabled={loading || !input.trim()}
            aria-label="Enviar mensaje"
          >
            Enviar
          </button>
        </div>
      </main>

      {/* Panel derecho */}
      <aside style={styles.rightPanel}>
        <h3 style={styles.tipTitle}>Tips para empezar</h3>
        <ul style={styles.tipList}>
          <li>Haz preguntas claras y directas.</li>
          <li>Usa comandos como "Explícame..." o "Ayúdame con...".</li>
          <li>Prueba pedir ideas o consejos creativos.</li>
        </ul>
      </aside>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#F2F0F5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#4A4A4A",
    maxWidth: "1200px",
    margin: "auto",
    gap: 20,
    padding: 20,
  },
  leftPanel: {
    flex: "0 0 220px",
    backgroundColor: "#E6E6F2",
    borderRadius: 12,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(106, 76, 147, 0.2)",
  },
  avatarImage: {
    width: 140,
    borderRadius: 16,
    marginBottom: 15,
    boxShadow: "0 4px 12px rgba(106, 76, 147, 0.4)",
  },
  welcomeText: {
    fontSize: 16,
    textAlign: "center",
    color: "#6A4C93",
  },
  chatContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    border: "1px solid #B0AFC1",
    boxShadow: "0 2px 8px rgba(106, 76, 147, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  mensaje: {
    padding: "10px 14px",
    borderRadius: 16,
    maxWidth: "75%",
    wordWrap: "break-word",
    fontSize: 15,
    lineHeight: 1.3,
    boxShadow: "0 1px 3px rgba(106, 76, 147, 0.1)",
  },
  usuario: {
    backgroundColor: "#9B78C7",
    alignSelf: "flex-end",
    color: "#fff",
  },
  ia: {
    backgroundColor: "#E6E6F2",
    alignSelf: "flex-start",
    color: "#4A4A4A",
    fontStyle: "italic",
  },
  loading: {
    alignSelf: "flex-start",
    fontSize: 14,
    color: "#6A4C93",
    fontStyle: "italic",
    padding: "4px 8px",
  },
  inputBox: {
    display: "flex",
    marginTop: 12,
    gap: 8,
  },
  textarea: {
    flex: 1,
    resize: "none",
    padding: 10,
    borderRadius: 12,
    border: "1px solid #B0AFC1",
    fontSize: 15,
    outline: "none",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#4A4A4A",
  },
  button: {
    padding: "10px 20px",
    borderRadius: 12,
    border: "none",
    backgroundColor: "#6A4C93",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonDisabled: {
    padding: "10px 20px",
    borderRadius: 12,
    border: "none",
    backgroundColor: "#B0AFC1",
    color: "#fff",
    fontWeight: "600",
    cursor: "not-allowed",
  },
  rightPanel: {
    flex: "0 0 220px",
    backgroundColor: "#E6E6F2",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 2px 8px rgba(106, 76, 147, 0.2)",
  },
  tipTitle: {
    color: "#6A4C93",
    marginBottom: 12,
  },
  tipList: {
    margin: 0,
    paddingLeft: 20,
    color: "#4A4A4A",
    fontSize: 14,
    lineHeight: 1.5,
  },
};
