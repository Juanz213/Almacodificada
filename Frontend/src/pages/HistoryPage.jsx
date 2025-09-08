import React from "react";
import Card from "../components/card";

export default function HistoryPage() {
  const list = [
    { id: 1, title: "Conversación 1", date: "2025-01-10" },
    { id: 2, title: "Conversación 2", date: "2025-02-03" }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-purpleDark">Historial</h3>
      <div className="grid gap-4">
        {list.map(i => (
          <Card key={i.id} className="flex justify-between items-center">
            <div>
              <div className="font-semibold">{i.title}</div>
              <div className="text-sm text-gray-500">{i.date}</div>
            </div>
            <button className="text-sm text-purpleDark hover:underline">Abrir</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
