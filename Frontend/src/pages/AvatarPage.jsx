import React from "react";

const avatares = [
  { nombre: "Lia Amaelis", descripcion: "Empática", emoji: "🧡" },
  { nombre: "Randy", descripcion: "Motivador", emoji: "💪" },
  { nombre: "Cópernico", descripcion: "Estoico", emoji: "🧠" },
  // Puedes agregar más avatares aquí
];

export default function AvatarPage() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <h2 style={styles.title}>Avatares</h2>
        <p style={styles.subtitle}>Lista de avatares (demo):</p>

        <ul style={styles.avatarList}>
          {avatares.map((avatar, i) => (
            <li key={i} style={styles.avatarItem}>
              <div style={styles.emoji}>{avatar.emoji}</div>
              <div>
                <strong style={styles.avatarName}>{avatar.nombre}</strong>
                <p style={styles.avatarDesc}>{avatar.descripcion}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#F2F0F5",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#4A4A4A",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 30,
    boxShadow: "0 4px 12px rgba(106, 76, 147, 0.15)",
    maxWidth: 600,
    width: "100%",
  },
  title: {
    color: "#6A4C93",
    marginBottom: 8,
  },
  subtitle: {
    color: "#6b7280",
    marginBottom: 20,
    fontSize: 16,
  },
  avatarList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  avatarItem: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "12px 0",
    borderBottom: "1px solid #E0DFF0",
  },
  emoji: {
    fontSize: 36,
    backgroundColor: "#9B78C7",
    color: "#fff",
    width: 60,
    height: 60,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(106, 76, 147, 0.4)",
  },
  avatarName: {
    fontSize: 18,
    color: "#6A4C93",
  },
  avatarDesc: {
    margin: 0,
    color: "#666",
    fontSize: 14,
  },
};
