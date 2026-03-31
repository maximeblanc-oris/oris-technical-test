import styles from "./TodoItem.module.css";

interface TodoItemProps {
  task: any;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span className={task.done ? styles.done : styles.title}>{task.title}</span>
      </label>
      <button type="button" className={styles.remove} onClick={() => onDelete(task.id)}>
        Supprimer
      </button>
    </li>
  );
}
