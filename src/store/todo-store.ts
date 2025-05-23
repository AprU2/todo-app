import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { HttpTodoService } from "../services/http-todo-client";
import type { Todo } from "../schemas/user-schema";

class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      setTodoCompleted: action,
      addTodo: action,
      deleteTodo: action,
    });
  }

  async loadTodos() {
    try {
      const fetchedTodos = await HttpTodoService.getInstance().getTodos();
      runInAction(() => {
        this.todos = fetchedTodos;
      });
    } catch {
      throw new Error();
    }
  }

  async setTodoCompleted(id: string, completed: boolean) {
    try {
      await HttpTodoService.getInstance().updateTodo(id, completed);
      this.loadTodos();
    } catch {
      throw new Error();
    }
  }

  async addTodo(title: string) {
    try {
      await HttpTodoService.getInstance().addTodo(title);
      this.loadTodos();
    } catch {
      throw new Error();
    }
  }

  async deleteTodo(id: string) {
    try {
      await HttpTodoService.getInstance().deleteTodo(id);
      this.loadTodos();
    } catch {
      throw new Error();
    }
  }
}

const todoStore = new TodoStore();
export default todoStore;
