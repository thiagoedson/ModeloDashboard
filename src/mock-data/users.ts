import { User } from "@/types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
    role: "admin",
  },
  {
    id: "2",
    name: "John Doe",
    email: "user@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    role: "user",
  },
  {
    id: "3",
    name: "Jane Manager",
    email: "manager@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    role: "manager",
  },
];

// Credenciais para teste (APENAS PARA DESENVOLVIMENTO)
// Email: admin@example.com / Senha: admin123
// Email: user@example.com / Senha: user123
// Email: manager@example.com / Senha: manager123
