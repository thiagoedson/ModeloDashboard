"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Download,
  Filter,
  Eye,
  MoreVertical,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "@/components/ui/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatCard } from "@/components/ui/stat-card";

// Types
type OrderStatus = "delivered" | "processing" | "shipped" | "pending" | "cancelled";

// Mock data
const orders: Array<{
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: OrderStatus;
  date: string;
  items: number;
}> = [
  {
    id: "ORD-2024-001",
    customer: "João Silva",
    email: "joao@example.com",
    product: "Notebook Dell XPS 13",
    amount: 8999.99,
    status: "delivered",
    date: "2024-11-10",
    items: 1,
  },
  {
    id: "ORD-2024-002",
    customer: "Maria Santos",
    email: "maria@example.com",
    product: "iPhone 15 Pro",
    amount: 7499.0,
    status: "processing",
    date: "2024-11-09",
    items: 1,
  },
  {
    id: "ORD-2024-003",
    customer: "Pedro Costa",
    email: "pedro@example.com",
    product: "MacBook Air M2",
    amount: 9999.0,
    status: "shipped",
    date: "2024-11-08",
    items: 2,
  },
  {
    id: "ORD-2024-004",
    customer: "Ana Oliveira",
    email: "ana@example.com",
    product: "Samsung Galaxy S24",
    amount: 4999.99,
    status: "pending",
    date: "2024-11-07",
    items: 1,
  },
  {
    id: "ORD-2024-005",
    customer: "Carlos Ferreira",
    email: "carlos@example.com",
    product: "iPad Pro 12.9",
    amount: 8499.0,
    status: "cancelled",
    date: "2024-11-06",
    items: 1,
  },
  {
    id: "ORD-2024-006",
    customer: "Julia Lima",
    email: "julia@example.com",
    product: "Apple Watch Ultra",
    amount: 6999.0,
    status: "delivered",
    date: "2024-11-05",
    items: 1,
  },
  {
    id: "ORD-2024-007",
    customer: "Rafael Souza",
    email: "rafael@example.com",
    product: "Sony WH-1000XM5",
    amount: 1999.99,
    status: "processing",
    date: "2024-11-04",
    items: 3,
  },
  {
    id: "ORD-2024-008",
    customer: "Fernanda Rocha",
    email: "fernanda@example.com",
    product: "PlayStation 5",
    amount: 3999.0,
    status: "shipped",
    date: "2024-11-03",
    items: 2,
  },
];

const statusConfig: Record<OrderStatus, { label: string; variant: "success" | "warning" | "info" | "outline" | "destructive"; icon: any }> = {
  delivered: {
    label: "Entregue",
    variant: "success" as const,
    icon: CheckCircle2,
  },
  processing: {
    label: "Processando",
    variant: "warning" as const,
    icon: Clock,
  },
  shipped: { label: "Enviado", variant: "info" as const, icon: Package },
  pending: {
    label: "Pendente",
    variant: "outline" as const,
    icon: AlertCircle,
  },
  cancelled: {
    label: "Cancelado",
    variant: "destructive" as const,
    icon: XCircle,
  },
};

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

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(
    null
  );
  const [statusFilter, setStatusFilter] = useState("all");

  const stats = [
    {
      title: "Total de Pedidos",
      value: orders.length.toString(),
      icon: Package,
      trend: { value: 12.5, isPositive: true },
    },
    {
      title: "Em Processamento",
      value: orders.filter((o) => o.status === "processing").length.toString(),
      icon: Clock,
      iconColor: "text-warning",
    },
    {
      title: "Enviados",
      value: orders.filter((o) => o.status === "shipped").length.toString(),
      icon: TrendingUp,
      iconColor: "text-info",
    },
    {
      title: "Entregues",
      value: orders.filter((o) => o.status === "delivered").length.toString(),
      icon: CheckCircle2,
      iconColor: "text-success",
    },
  ];

  const filteredOrders =
    statusFilter === "all"
      ? orders
      : orders.filter((order) => order.status === statusFilter);

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
            Pedidos
          </h1>
          <p className="text-muted-foreground mt-1">
            Gerencie e acompanhe todos os pedidos da plataforma
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
          <Button className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <Search placeholder="Buscar pedidos, clientes..." />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Status</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="processing">Processando</SelectItem>
                  <SelectItem value="shipped">Enviado</SelectItem>
                  <SelectItem value="delivered">Entregue</SelectItem>
                  <SelectItem value="cancelled">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Lista de Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID do Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                  <TableHead className="text-center">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order, index) => {
                  const StatusIcon = statusConfig[order.status].icon;
                  return (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-xs text-muted-foreground">
                            {order.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-[200px] truncate">
                          {order.product}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {order.items} {order.items > 1 ? "itens" : "item"}
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(order.date).toLocaleDateString("pt-BR")}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={statusConfig[order.status].variant}
                          className="gap-1"
                        >
                          <StatusIcon className="h-3 w-3" />
                          {statusConfig[order.status].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(order.amount)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Dialog>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Ações</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DialogTrigger asChild>
                                <DropdownMenuItem
                                  onClick={() => setSelectedOrder(order)}
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  Ver Detalhes
                                </DropdownMenuItem>
                              </DialogTrigger>
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Baixar Nota Fiscal
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <XCircle className="h-4 w-4 mr-2" />
                                Cancelar Pedido
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>

                          {selectedOrder && (
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  Detalhes do Pedido {selectedOrder.id}
                                </DialogTitle>
                                <DialogDescription>
                                  Informações completas do pedido
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                      Cliente
                                    </p>
                                    <p className="font-semibold">
                                      {selectedOrder.customer}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {selectedOrder.email}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                      Status
                                    </p>
                                    <Badge
                                      variant={
                                        statusConfig[selectedOrder.status]
                                          .variant
                                      }
                                      className="mt-1"
                                    >
                                      {statusConfig[selectedOrder.status].label}
                                    </Badge>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Produto
                                  </p>
                                  <p className="font-semibold">
                                    {selectedOrder.product}
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                      Data do Pedido
                                    </p>
                                    <p className="font-semibold">
                                      {new Date(
                                        selectedOrder.date
                                      ).toLocaleDateString("pt-BR")}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                      Valor Total
                                    </p>
                                    <p className="font-semibold text-lg">
                                      {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                      }).format(selectedOrder.amount)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          )}
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
