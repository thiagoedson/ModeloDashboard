"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDashboardStats } from "@/mock-data/dashboard";
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const iconMap: Record<string, any> = {
  "dollar-sign": DollarSign,
  users: Users,
  "shopping-cart": ShoppingCart,
  "trending-up": TrendingUp,
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral das métricas e indicadores principais
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {mockDashboardStats.map((stat) => {
          const Icon = iconMap[stat.icon] || TrendingUp;
          const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
          const trendColor = stat.trend === "up" ? "text-success" : "text-error";

          return (
            <Card key={stat.id} className="hover:shadow-sm transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs mt-1">
                  <TrendIcon className={`h-4 w-4 mr-1 ${trendColor}`} />
                  <span className={trendColor}>{stat.change}</span>
                  <span className="text-muted-foreground ml-1">vs. mês anterior</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Content */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Nova transação #{1000 + i}</p>
                    <p className="text-xs text-muted-foreground">Há {i} hora{i > 1 ? "s" : ""}</p>
                  </div>
                  <div className="text-sm font-semibold">R$ {(Math.random() * 1000).toFixed(2)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <Users className="h-5 w-5 mb-2" />
                <p className="text-sm font-medium">Novo Usuário</p>
              </button>
              <button className="p-4 rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <ShoppingCart className="h-5 w-5 mb-2" />
                <p className="text-sm font-medium">Nova Venda</p>
              </button>
              <button className="p-4 rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <DollarSign className="h-5 w-5 mb-2" />
                <p className="text-sm font-medium">Relatório</p>
              </button>
              <button className="p-4 rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <TrendingUp className="h-5 w-5 mb-2" />
                <p className="text-sm font-medium">Análise</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
