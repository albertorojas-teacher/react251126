import { useState } from "react";
import { Button } from "./components/Button";
import { FruitsList } from "./components/FruitList";
import { TaskList } from "./components/TaskList";
import { initialFruits, initialTasks } from "./data/mockData";
import type { Tarea } from "./types";

export function App() {
  const [fruits, setFruits] = useState<string[]>(initialFruits);
  const [tasks, setTasks] = useState<Tarea[]>(initialTasks);

  const addFruit = () => {
    const extras = ["Kiwi", "Naranja", "Uva", "Piña", "Sandia"];
    const random = extras[Math.floor(Math.random() * extras.length)];
    setFruits([...fruits, random]);
  };

  const emptyTasks = () => setTasks([]);
  const putTask = () => setTasks(initialTasks);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Cabecera */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Práctica Fullstack: React + TS + Tailwind
          </h1>
          <p className="text-slate-600">
            Componentes dinámicos, tipado de props, listas y renderizado
            condicional
          </p>
        </header>

        {/* Cada botón recibe el text, su manejador y la variante visual por props. */}
        <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <Button
            text="+ Añadir Fruta Aleatoria"
            onClick={addFruit}
            variant="primary"
          />
          <Button
            text="Vaciar Tareas (Probar Condicional)"
            onClick={emptyTasks}
            variant="danger"
          />
          <Button text="Restaurar Tareas" onClick={putTask} variant="default" />
        </div>

        {/* Pasamos el estado a las listas mediante props; Grid las distribuye en columnas. */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FruitsList fruits={fruits} />
          <TaskList tasks={tasks} />
        </main>
      </div>
    </div>
  );
}
