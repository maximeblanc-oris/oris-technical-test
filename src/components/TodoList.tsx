import type { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
  tasks: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ tasks, onToggle, onDelete }: TodoListProps) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>Aucune tache pour ce filtre.</p>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
