"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Component,
  Check,
  X,
  AlertCircle,
  Info,
  Sparkles,
  Search as SearchIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Search } from "@/components/ui/search";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { StatCard } from "@/components/ui/stat-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ComponentsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
            <Component className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Biblioteca de Componentes
            </h1>
            <p className="text-muted-foreground mt-1">
              Explore todos os componentes UI disponíveis no sistema
            </p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="tables">Tables</TabsTrigger>
          <TabsTrigger value="modals">Modals</TabsTrigger>
        </TabsList>

        {/* Buttons */}
        <TabsContent value="buttons" className="space-y-4">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <Card>
              <CardHeader>
                <CardTitle>Variações de Botões</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                    Variantes Padrão
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                    Tamanhos
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                    Com Ícones
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button className="gap-2">
                      <Check className="h-4 w-4" />
                      Com Ícone
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Sparkles className="h-4 w-4" />
                      Premium
                    </Button>
                    <Button variant="destructive" className="gap-2">
                      <X className="h-4 w-4" />
                      Excluir
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                    Estados
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Desabilitado</Button>
                    <Button>
                      <span className="animate-pulse">Carregando...</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Badges */}
        <TabsContent value="badges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Badges e Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                  Variantes
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                  Com Ícones
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="success" className="gap-1">
                    <Check className="h-3 w-3" />
                    Aprovado
                  </Badge>
                  <Badge variant="warning" className="gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Atenção
                  </Badge>
                  <Badge variant="destructive" className="gap-1">
                    <X className="h-3 w-3" />
                    Erro
                  </Badge>
                  <Badge variant="info" className="gap-1">
                    <Info className="h-3 w-3" />
                    Informação
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Inputs */}
        <TabsContent value="inputs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campos de Entrada</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="input-default">Input Padrão</Label>
                <Input
                  id="input-default"
                  placeholder="Digite algo..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="input-email">Email</Label>
                <Input
                  id="input-email"
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="input-password">Senha</Label>
                <Input
                  id="input-password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="input-disabled">Desabilitado</Label>
                <Input
                  id="input-disabled"
                  disabled
                  placeholder="Campo desabilitado"
                />
              </div>

              <div className="space-y-2">
                <Label>Search Component</Label>
                <Search placeholder="Buscar..." />
              </div>

              <div className="space-y-2">
                <Label>Select</Label>
                <Select defaultValue="option1">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opção 1</SelectItem>
                    <SelectItem value="option2">Opção 2</SelectItem>
                    <SelectItem value="option3">Opção 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cards */}
        <TabsContent value="cards" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Simples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Este é um card básico com título e conteúdo.
                </p>
              </CardContent>
            </Card>

            <StatCard
              title="Receita Total"
              value="R$ 45.231"
              description="Últimos 30 dias"
              icon={Sparkles}
              trend={{ value: 20.1, isPositive: true }}
            />

            <StatCard
              title="Usuários Ativos"
              value="2.350"
              icon={Info}
              iconColor="text-blue-500"
              trend={{ value: 18.2, isPositive: true }}
            />

            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Card Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card com gradiente e bordas especiais para destacar conteúdo
                  importante.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-muted/30">
              <CardHeader>
                <CardTitle>Card com Gradient</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Progresso</span>
                    <Badge variant="success">75%</Badge>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/60"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tables */}
        <TabsContent value="tables" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tabela Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "João Silva",
                      email: "joao@example.com",
                      status: "success",
                      value: 1250.0,
                    },
                    {
                      name: "Maria Santos",
                      email: "maria@example.com",
                      status: "warning",
                      value: 890.5,
                    },
                    {
                      name: "Pedro Costa",
                      email: "pedro@example.com",
                      status: "info",
                      value: 2150.75,
                    },
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.email}
                      </TableCell>
                      <TableCell>
                        <Badge variant={row.status as any}>
                          {row.status === "success" && "Ativo"}
                          {row.status === "warning" && "Pendente"}
                          {row.status === "info" && "Em Análise"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(row.value)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-4">
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
        </TabsContent>

        {/* Modals */}
        <TabsContent value="modals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dialogs e Modals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                  Exemplos de Dialogs
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Dialog Simples</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Título do Dialog</DialogTitle>
                        <DialogDescription>
                          Esta é uma descrição do dialog. Você pode colocar
                          qualquer conteúdo aqui.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                          Conteúdo do dialog pode incluir formulários, informações
                          ou qualquer outro componente.
                        </p>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancelar</Button>
                        <Button>Confirmar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Com Formulário</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Adicionar Novo Item</DialogTitle>
                        <DialogDescription>
                          Preencha os campos abaixo para adicionar um novo item.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome</Label>
                          <Input id="name" placeholder="Digite o nome..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancelar</Button>
                        <Button>Salvar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive">Dialog de Confirmação</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Confirmar Ação</DialogTitle>
                        <DialogDescription>
                          Esta ação não pode ser desfeita. Tem certeza que deseja
                          continuar?
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10">
                          <AlertCircle className="h-5 w-5 text-destructive" />
                          <p className="text-sm font-medium">
                            Atenção: Esta é uma ação permanente
                          </p>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancelar</Button>
                        <Button variant="destructive">Sim, Excluir</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Color Palette */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Paleta de Cores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Primary", class: "bg-primary", textClass: "text-primary-foreground" },
                { name: "Secondary", class: "bg-secondary", textClass: "text-secondary-foreground" },
                { name: "Muted", class: "bg-muted", textClass: "text-muted-foreground" },
                { name: "Accent", class: "bg-accent", textClass: "text-accent-foreground" },
                { name: "Destructive", class: "bg-destructive", textClass: "text-destructive-foreground" },
                { name: "Success", class: "bg-success", textClass: "text-success-foreground" },
                { name: "Warning", class: "bg-warning", textClass: "text-warning-foreground" },
                { name: "Info", class: "bg-info", textClass: "text-info-foreground" },
                { name: "Error", class: "bg-error", textClass: "text-error-foreground" },
              ].map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className={`${color.class} ${color.textClass} p-6 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 cursor-pointer`}
                >
                  <p className="font-semibold text-lg">{color.name}</p>
                  <p className="text-sm opacity-80 mt-1">Clique para copiar</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
