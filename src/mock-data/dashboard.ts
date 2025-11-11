import { DashboardStats, MenuItem } from "@/types";

export const mockDashboardStats: DashboardStats[] = [
  {
    id: "1",
    title: "Receita Total",
    value: "R$ 45.231",
    change: "+20.1%",
    trend: "up",
    icon: "dollar-sign",
  },
  {
    id: "2",
    title: "Usuários Ativos",
    value: "2.350",
    change: "+18.2%",
    trend: "up",
    icon: "users",
  },
  {
    id: "3",
    title: "Vendas",
    value: "1.234",
    change: "-4.5%",
    trend: "down",
    icon: "shopping-cart",
  },
  {
    id: "4",
    title: "Performance",
    value: "95.8%",
    change: "+2.3%",
    trend: "up",
    icon: "trending-up",
  },
];

export const mockMenuItems: MenuItem[] = [
  {
    id: "1",
    label: "Dashboard",
    icon: "layout-dashboard",
    href: "/dashboard",
  },
  {
    id: "2",
    label: "Usuários",
    icon: "users",
    href: "/dashboard/users",
    badge: 12,
  },
  {
    id: "3",
    label: "Produtos",
    icon: "package",
    href: "/dashboard/products",
  },
  {
    id: "4",
    label: "Pedidos",
    icon: "shopping-cart",
    href: "/dashboard/orders",
    badge: 5,
  },
  {
    id: "7",
    label: "Componentes",
    icon: "component",
    href: "/dashboard/components",
  },
  {
    id: "5",
    label: "Relatórios",
    icon: "bar-chart",
    href: "/dashboard/reports",
  },
  {
    id: "6",
    label: "Configurações",
    icon: "settings",
    href: "/dashboard/settings",
  },
];
