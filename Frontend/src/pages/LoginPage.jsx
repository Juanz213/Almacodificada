import React, { useState } from "react";
import Card from "../components/card";
import Button from "../components/Button";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    alert("Función de autenticación no implementada en demo.");
  };

  return (
    <div className="max-w-sm mx-auto">
      <Card>
        <h3 className="text-xl font-semibold text-purpleDark mb-4">Iniciar sesión</h3>
        <input value={user} onChange={e=>setUser(e.target.value)} placeholder="Usuario" className="w-full border px-3 py-2 rounded-lg mb-3"/>
        <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Contraseña" className="w-full border px-3 py-2 rounded-lg mb-3"/>
        <div className="flex justify-end">
          <Button onClick={login}>Entrar</Button>
        </div>
      </Card>
    </div>
  );
}
