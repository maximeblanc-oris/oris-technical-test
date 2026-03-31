import type { TodoFilterStatus } from "../types/todo";
import styles from "./TodoFilter.module.css";

interface TodoFilterProps {
  current: TodoFilterStatus;
  onChange: (next: TodoFilterStatus) => void;
}

const options: Array<{ label: string; value: TodoFilterStatus }> = [
  { label: "Toutes", value: "all" },
  { label: "Actives", value: "active" },
  { label: "Terminées", value: "completed" },
];

export function TodoFilter({ current, onChange }: TodoFilterProps) {
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={current === option.value ? styles.active : styles.button}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
