import React, { useState } from "react";
import Card from "../components/card";
import Button from "../components/Button";

export default function CreateAvatarPage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const save = () => {
    // Aquí guardarías en backend; por ahora mock
    alert(`Avatar creado: ${name} — ${desc}`);
    setName(""); setDesc("");
  };

  return (
    <Card>
      <h3 className="text-xl font-semibold text-purpleDark mb-3">Crear Avatar</h3>
      <div className="space-y-3">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nombre" className="w-full border px-3 py-2 rounded-lg"/>
        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Descripción" className="w-full border px-3 py-2 rounded-lg"></textarea>
        <div className="flex justify-end">
          <Button onClick={save}>Guardar</Button>
        </div>
      </div>
    </Card>
  );
}
