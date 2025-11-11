"use client"

import * as React from "react"
import { Search as SearchIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, onClear, ...props }, ref) => {
    const [value, setValue] = React.useState("")

    const handleClear = () => {
      setValue("")
      onClear?.()
    }

    return (
      <div className="relative w-full group">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors duration-200 group-focus-within:text-primary" />
        <input
          type="search"
          className={cn(
            "flex h-10 w-full rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm pl-10 pr-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:bg-card focus-visible:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            className
          )}
          ref={ref}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            props.onChange?.(e)
          }}
          {...props}
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-muted p-1"
            type="button"
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
    )
  }
)
Search.displayName = "Search"

export { Search }
