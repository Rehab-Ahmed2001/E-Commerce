/* eslint-disable @typescript-eslint/no-unused-vars */
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    name: string;
    email: string;
    role: string;
    token: string;
  }

  interface Session {
    user: User;
  }
}
