export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export type TodoFilterStatus = "all" | "active" | "completed";
