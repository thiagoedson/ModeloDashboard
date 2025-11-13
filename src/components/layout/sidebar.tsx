"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mockMenuItems } from "@/mock-data/dashboard";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  BarChart,
  Settings,
  Component,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  users: Users,
  package: Package,
  "shopping-cart": ShoppingCart,
  "bar-chart": BarChart,
  settings: Settings,
  component: Component,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-gray-200 bg-white h-screen sticky top-0 flex flex-col shadow-sm">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-600">Sistema de Gestão</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {mockMenuItems.map((item) => {
          const Icon = iconMap[item.icon] || LayoutDashboard;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative group",
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className={cn(
                  "ml-auto px-2 py-0.5 text-xs rounded-full font-semibold",
                  isActive
                    ? "bg-white text-gray-900"
                    : "bg-gray-900 text-white"
                )}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 text-xs text-gray-600">
        <p>&copy; 2025 Dashboard</p>
      </div>
    </aside>
  );
}
