"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Divider,
  Chip
} from "@nextui-org/react";
import {
  ChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const stats = [
    {
      title: "Receita Total",
      value: "R$ 45.231",
      change: "+20.1%",
      trend: "up",
      icon: CurrencyDollarIcon,
      color: "success" as const,
    },
    {
      title: "Usuários Ativos",
      value: "2.350",
      change: "+18.2%",
      trend: "up",
      icon: UsersIcon,
      color: "primary" as const,
    },
    {
      title: "Vendas",
      value: "1.234",
      change: "-4.5%",
      trend: "down",
      icon: ShoppingCartIcon,
      color: "warning" as const,
    },
    {
      title: "Performance",
      value: "95.8%",
      change: "+2.3%",
      trend: "up",
      icon: ChartBarIcon,
      color: "secondary" as const,
    },
  ];

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Dashboard Modelo
            </h1>
            <p className="text-gray-300">
              Next.js 15 + React 19 + Tailwind CSS + NextUI
            </p>
          </div>
          <Button
            color="primary"
            variant="flat"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌞 Modo Claro" : "🌙 Modo Escuro"}
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader className="flex gap-3">
                <div className={`p-2 rounded-lg bg-${stat.color}/20`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-300">{stat.title}</p>
                </div>
              </CardHeader>
              <Divider className="bg-white/20" />
              <CardBody>
                <div className="flex justify-between items-end">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <Chip
                    color={stat.trend === "up" ? "success" : "danger"}
                    variant="flat"
                    size="sm"
                    startContent={
                      stat.trend === "up" ? (
                        <ArrowTrendingUpIcon className="w-4 h-4" />
                      ) : (
                        <ArrowTrendingDownIcon className="w-4 h-4" />
                      )
                    }
                  >
                    {stat.change}
                  </Chip>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Welcome Card */}
        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader>
            <h2 className="text-2xl font-bold text-white">Bem-vindo!</h2>
          </CardHeader>
          <Divider className="bg-white/20" />
          <CardBody>
            <p className="text-gray-300 mb-4">
              Este é um dashboard modelo criado com as tecnologias mais modernas:
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip color="primary" variant="flat">Next.js 15</Chip>
              <Chip color="secondary" variant="flat">React 19</Chip>
              <Chip color="success" variant="flat">Tailwind CSS 3.4</Chip>
              <Chip color="warning" variant="flat">NextUI 2.4</Chip>
              <Chip color="danger" variant="flat">TypeScript 5.6</Chip>
              <Chip color="primary" variant="flat">Hero Icons 2.1</Chip>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
