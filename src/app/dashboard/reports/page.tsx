"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StatCard } from "@/components/ui/stat-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Mock data for charts
const salesData = [
  { month: "Jan", value: 45000, growth: 12 },
  { month: "Fev", value: 52000, growth: 15.5 },
  { month: "Mar", value: 48000, growth: -7.7 },
  { month: "Abr", value: 61000, growth: 27 },
  { month: "Mai", value: 55000, growth: -9.8 },
  { month: "Jun", value: 67000, growth: 21.8 },
  { month: "Jul", value: 72000, growth: 7.5 },
  { month: "Ago", value: 68000, growth: -5.5 },
  { month: "Set", value: 75000, growth: 10.3 },
  { month: "Out", value: 82000, growth: 9.3 },
  { month: "Nov", value: 89000, growth: 8.5 },
  { month: "Dez", value: 95000, growth: 6.7 },
];

const topProducts = [
  { name: "Notebook Dell XPS", sales: 234, revenue: 2106000, growth: 23.5 },
  { name: "iPhone 15 Pro", sales: 189, revenue: 1417110, growth: 18.2 },
  { name: "MacBook Air M2", sales: 156, revenue: 1559844, growth: 15.8 },
  { name: "Samsung Galaxy S24", sales: 145, revenue: 724998.55, growth: -4.2 },
  { name: "iPad Pro 12.9", sales: 98, revenue: 832902, growth: 12.1 },
];

const categoryData = [
  { name: "Eletrônicos", value: 45, color: "bg-info" },
  { name: "Computadores", value: 30, color: "bg-primary" },
  { name: "Smartphones", value: 15, color: "bg-warning" },
  { name: "Acessórios", value: 10, color: "bg-success" },
];

export default function ReportsPage() {
  const maxSales = Math.max(...salesData.map((d) => d.value));

  const stats = [
    {
      title: "Receita Total",
      value: "R$ 789.000",
      icon: DollarSign,
      trend: { value: 12.5, isPositive: true },
      description: "Últimos 30 dias",
    },
    {
      title: "Total de Vendas",
      value: "1.234",
      icon: ShoppingCart,
      trend: { value: 8.2, isPositive: true },
      iconColor: "text-info",
    },
    {
      title: "Novos Clientes",
      value: "342",
      icon: Users,
      trend: { value: 15.3, isPositive: true },
      iconColor: "text-primary",
    },
    {
      title: "Taxa de Conversão",
      value: "3.2%",
      icon: Activity,
      trend: { value: 2.1, isPositive: false },
      iconColor: "text-warning",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Relatórios
          </h1>
          <p className="text-muted-foreground mt-1">
            Análise detalhada de vendas e performance
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
              <SelectItem value="90">Últimos 90 dias</SelectItem>
              <SelectItem value="365">Último ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
          <Button className="gap-2 shadow-sm transition-all duration-300">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Vendas Mensais
                </CardTitle>
                <Badge variant="success" className="gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.5%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Bar Chart */}
                <div className="flex items-end justify-between gap-2 h-64">
                  {salesData.map((data, index) => {
                    const heightPercentage = (data.value / maxSales) * 100;
                    return (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center gap-2 group"
                      >
                        <div className="relative w-full flex flex-col justify-end h-full">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${heightPercentage}%` }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                            className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg transition-all duration-300 hover:from-primary hover:to-primary/80 cursor-pointer shadow-sm relative group-hover:scale-105"
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-semibold shadow-sm">
                              R$ {(data.value / 1000).toFixed(0)}k
                            </div>
                          </motion.div>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">
                          {data.month}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between pt-4 ">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">
                      Receita Mensal
                    </span>
                  </div>
                  <span className="text-sm font-semibold">
                    Média: R$ 67.417
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Category Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Distribuição por Categoria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Donut Chart */}
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      {categoryData.reduce((acc, item, index) => {
                        const total = categoryData.reduce(
                          (sum, cat) => sum + cat.value,
                          0
                        );
                        const percentage = (item.value / total) * 100;
                        const circumference = 2 * Math.PI * 40;
                        const strokeDasharray = `${
                          (percentage / 100) * circumference
                        } ${circumference}`;
                        const rotation =
                          acc.rotation + (acc.prevPercentage / 100) * 360;

                        acc.elements.push(
                          <motion.circle
                            key={index}
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            strokeWidth="12"
                            className={item.color.replace("bg-", "stroke-")}
                            strokeDasharray={strokeDasharray}
                            strokeLinecap="round"
                            style={{
                              transform: `rotate(${rotation}deg)`,
                              transformOrigin: "50% 50%",
                            }}
                            initial={{ strokeDasharray: `0 ${circumference}` }}
                            animate={{ strokeDasharray }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        );

                        acc.prevPercentage = percentage;
                        return acc;
                      }, { elements: [], rotation: 0, prevPercentage: 0 } as any).elements}

                      {/* Inner white circle for donut effect */}
                      <circle cx="50" cy="50" r="28" fill="hsl(var(--card))" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold">100%</span>
                      <span className="text-xs text-muted-foreground">
                        Total
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category List */}
                <div className="space-y-3">
                  {categoryData.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30  hover:bg-muted/50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full ${category.color} shadow-sm`}
                        />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm font-semibold">
                        {category.value}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Products Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top 5 Produtos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg  bg-gradient-to-r from-card/80 to-card/40 backdrop-blur-sm hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold text-lg group-hover:bg-primary/20 transition-colors duration-200">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-primary transition-colors duration-200">
                      {product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {product.sales} vendas
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 0,
                      }).format(product.revenue)}
                    </p>
                    <div
                      className={`flex items-center justify-end gap-1 text-sm font-semibold ${
                        product.growth >= 0
                          ? "text-success"
                          : "text-error"
                      }`}
                    >
                      {product.growth >= 0 ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      {Math.abs(product.growth)}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Performance Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Insights de Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Melhor Mês",
                  value: "Dezembro",
                  metric: "R$ 95.000",
                  icon: TrendingUp,
                  color: "text-success",
                },
                {
                  title: "Crescimento Médio",
                  value: "+9.2%",
                  metric: "mês a mês",
                  icon: Activity,
                  color: "text-info",
                },
                {
                  title: "Ticket Médio",
                  value: "R$ 639",
                  metric: "por venda",
                  icon: DollarSign,
                  color: "text-primary",
                },
              ].map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-lg  bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {insight.title}
                      </p>
                      <p className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors duration-200">
                        {insight.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {insight.metric}
                      </p>
                    </div>
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300`}
                    >
                      <insight.icon className={`h-6 w-6 ${insight.color}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
