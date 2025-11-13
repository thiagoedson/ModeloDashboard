"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Loader2 } from "lucide-react";
import MetallicPaint, { parseLogoImage } from "@/components/ui/metallic-paint";

export default function LoginPage() {
  const router = useRouter();
  const { login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch("/logo.svg");
        const blob = await response.blob();
        const file = new File([blob], "logo.svg", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Erro ao carregar imagem:", err);
      }
    }

    loadDefaultImage();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login({ email, password });
      router.push("/dashboard");
    } catch (err) {
      console.error("Erro ao fazer login:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8">
        {/* Metallic Paint Animation */}
        <div className="hidden lg:block lg:w-1/2 h-[600px] rounded-2xl overflow-hidden border-2 bg-card/50 shadow-lg">
          {imageData && (
            <MetallicPaint 
              imageData={imageData} 
              params={{ 
                edge: 1, 
                patternBlur: 0.005, 
                patternScale: 2, 
                refraction: 0.015, 
                speed: 0.3, 
                liquid: 0.07 
              }} 
            />
          )}
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Sistema de Gerenciamento</p>
          </div>

          {/* Login Card */}
          <Card className="border-2">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Bem-vindo de volta</CardTitle>
              <CardDescription>
                Entre com suas credenciais para acessar o sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    autoComplete="current-password"
                  />
                </div>

                {error && (
                  <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                    {error}
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Entrar
                    </>
                  )}
                </Button>
              </form>

              {/* Demo credentials hint */}
              <div className="mt-6 p-4 bg-muted rounded-md text-sm">
                <p className="font-semibold mb-2">Credenciais para teste:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Admin: admin@example.com / admin123</li>
                  <li>Usuário: user@example.com / user123</li>
                  <li>Gerente: manager@example.com / manager123</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Dashboard Whitelabel &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
