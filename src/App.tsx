import { type FormEvent, useMemo, useState } from "react";
import styles from "./App.module.css";
import { Clock } from "./components/Clock";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { tasks, filter, activeCount, addTask, toggleTask, deleteTask, setFilter } = useTodos();
  const [value, setValue] = useState("");

  const visibleTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.done);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.done);
    }

    return tasks;
  }, [tasks, filter]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>Mini Todo App</h1>
        <Clock />

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Ajouter une tâche"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit" className={styles.addButton}>
            Ajouter
          </button>
        </form>

        <div className={styles.toolbar}>
          <TodoFilter current={filter} onChange={setFilter} />
          <span className={styles.count}>{activeCount} active(s)</span>
        </div>

        <TodoList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
      </section>
    </main>
  );
}

export default App;
