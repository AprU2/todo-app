export const saveToken = (token: string): void => {
  return localStorage.setItem("token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const deleteToken = (): void => {
  localStorage.removeItem("token");
};
