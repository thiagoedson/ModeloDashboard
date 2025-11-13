"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  description?: string
  icon?: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  iconColor?: string
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, title, value, description, icon: Icon, trend, iconColor = "text-primary", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 group",
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {title}
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold tracking-tight transition-colors duration-200 group-hover:text-primary">
                {value}
              </h3>
              {trend && (
                <span
                  className={cn(
                    "text-sm font-semibold flex items-center gap-1 px-2 py-0.5 rounded-full",
                    trend.isPositive
                      ? "text-success bg-success/10"
                      : "text-error bg-error/10"
                  )}
                >
                  {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
                </span>
              )}
            </div>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          {Icon && (
            <div className={cn(
              "rounded-lg p-3 transition-all duration-300 group-hover:scale-110",
              "bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10"
            )}>
              <Icon className={cn("h-6 w-6", iconColor)} />
            </div>
          )}
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    )
  }
)
StatCard.displayName = "StatCard"

export { StatCard }
export type { StatCardProps }
