export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user" | "manager";
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface DashboardStats {
  id: string;
  title: string;
  value: string | number;
  change: string;
  trend: "up" | "down";
  icon: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: string | number;
}

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}
