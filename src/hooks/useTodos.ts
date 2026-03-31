import { useEffect, useState } from "react";
import type { Todo, TodoFilterStatus } from "../types/todo";

const initialTodos: Todo[] = [
  { id: "1", title: "Configurer le projet", done: true },
  { id: "2", title: "Créer les composants", done: false },
  { id: "3", title: "Relire le code", done: false },
];

export function useTodos() {
  const [tasks, setTasks] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<TodoFilterStatus>("all");
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const nextCount = tasks.filter((task) => !task.done).length;
    setActiveCount(nextCount);
  }, [filter]);

  const addTask = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) {
      return;
    }

    const nextTask: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
      done: false,
    };

    setTasks([nextTask, ...tasks]);
  };

  const toggleTask = (id: string) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index < 0) {
      return;
    }

    tasks[index].done = !tasks[index].done;
    setTasks(tasks);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    filter,
    activeCount,
    addTask,
    toggleTask,
    deleteTask,
    setFilter,
  };
}
