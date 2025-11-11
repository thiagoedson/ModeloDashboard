"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Package } from "lucide-react";

const mockProducts = [
  { id: "1", name: "Produto A", price: "R$ 99,90", stock: 45, category: "Eletrônicos" },
  { id: "2", name: "Produto B", price: "R$ 149,90", stock: 23, category: "Roupas" },
  { id: "3", name: "Produto C", price: "R$ 79,90", stock: 67, category: "Livros" },
  { id: "4", name: "Produto D", price: "R$ 199,90", stock: 12, category: "Eletrônicos" },
  { id: "5", name: "Produto E", price: "R$ 59,90", stock: 89, category: "Acessórios" },
  { id: "6", name: "Produto F", price: "R$ 299,90", stock: 5, category: "Eletrônicos" },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
          <p className="text-muted-foreground">
            Gerencie o catálogo de produtos
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Produto</th>
                  <th className="text-left py-3 px-4 font-medium">Categoria</th>
                  <th className="text-left py-3 px-4 font-medium">Preço</th>
                  <th className="text-left py-3 px-4 font-medium">Estoque</th>
                  <th className="text-right py-3 px-4 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {mockProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-accent/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                          <Package className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {product.category}
                    </td>
                    <td className="py-3 px-4 font-semibold">
                      {product.price}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          product.stock > 50
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : product.stock > 20
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {product.stock} unidades
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
