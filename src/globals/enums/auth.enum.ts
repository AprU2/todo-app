export const AuthFormType = {
  USERNAME: "Username",
  PASSWORD: "Password",
} as const;

export type AuthFormType = (typeof AuthFormType)[keyof typeof AuthFormType];
