import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success:
          "bg-success text-success-foreground hover:bg-success/80 shadow-success/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-destructive/20",
        warning:
          "bg-warning text-warning-foreground hover:bg-warning/80 shadow-warning/20",
        outline: "text-foreground hover:bg-accent",
        info: "bg-info text-info-foreground hover:bg-info/80 shadow-info/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
