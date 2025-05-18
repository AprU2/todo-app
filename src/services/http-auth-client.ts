import axios from "axios";
import type { AxiosInstance } from "axios";
import { saveToken } from "../helpers/storage-helper";

interface signUpProps {
  userName: string;
  password: string;
}

const authHttp: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export class HttpAuthService {
  static _instance: HttpAuthService;
  static getInstance(): HttpAuthService {
    if (this._instance == null) {
      this._instance = new HttpAuthService();
    }
    return this._instance;
  }
  async signUp({ userName, password }: signUpProps) {
    try {
      const response = await authHttp.post("/auth/signup", {
        name: userName,
        password: password,
      });
      saveToken(response.data.token);
      return response.data;
    } catch {
      return null;
    }
  }

  async signIn({ userName, password }: signUpProps) {
    try {
      const response = await authHttp.post("/auth/signin", {
        name: userName,
        password: password,
      });
      saveToken(response.data.token);
      return response.data;
    } catch {
      return null;
    }
  }
}
