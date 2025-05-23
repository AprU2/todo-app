import type { AxiosInstance } from "axios";
import axios from "axios";
import { deleteToken, getToken } from "../helpers/storage-helper";

const todoHttp: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

todoHttp.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

todoHttp.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    deleteToken();
    console.error(error);
  }
);

export class HttpTodoService {
  static _instance: HttpTodoService;
  static getInstance(): HttpTodoService {
    if (this._instance == null) {
      this._instance = new HttpTodoService();
    }
    return this._instance;
  }

  async getTodos() {
    try {
      const response = await todoHttp.get("/todos");
      return response.data;
    } catch {
      return;
    }
  }

  async addTodo(title: string) {
    try {
      const response = await todoHttp.post("todos/add", {
        title: title,
        isComplete: false,
      });
      return response.data;
    } catch {
      return;
    }
  }

  async deleteTodo(id: string) {
    try {
      await todoHttp.delete(`todos/delete/${id}`);
    } catch {
      return;
    }
  }

  async updateTodo(id: string, isComplete: boolean) {
    try {
      const response = await todoHttp.patch(`todos/update/${id}`, {
        isComplete: isComplete,
      });
      return response.data;
    } catch {
      return;
    }
  }
}
