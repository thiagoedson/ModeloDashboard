"use client";

import { useState, useEffect } from "react";
import { User, LoginCredentials, AuthResponse } from "@/types";
import { mockUsers } from "@/mock-data/users";

const AUTH_STORAGE_KEY = "auth_user";
const TOKEN_STORAGE_KEY = "auth_token";

// Simula chamada de API - REMOVER quando conectar API real
const mockLogin = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validação simples para demo
      const user = mockUsers.find((u) => u.email === credentials.email);

      // Senhas mockadas (APENAS PARA DESENVOLVIMENTO)
      const validPasswords: Record<string, string> = {
        "admin@example.com": "admin123",
        "user@example.com": "user123",
        "manager@example.com": "manager123",
      };

      if (user && validPasswords[credentials.email] === credentials.password) {
        resolve({
          user,
          token: `mock_token_${user.id}_${Date.now()}`,
        });
      } else {
        reject(new Error("Credenciais inválidas"));
      }
    }, 1000); // Simula delay de rede
  });
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Verifica se há usuário salvo no localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error("Erro ao carregar usuário salvo:", err);
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(TOKEN_STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      // TODO: Substituir por chamada real à API
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(credentials),
      // });
      // const data = await response.json();

      const data = await mockLogin(credentials);

      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data.user));
      localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
      setUser(data.user);
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro ao fazer login";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setUser(null);
    setError(null);
  };

  const isAuthenticated = !!user;

  return {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
  };
}
