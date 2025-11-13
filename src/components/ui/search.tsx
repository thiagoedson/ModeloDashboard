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
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 transition-colors duration-200 group-focus-within:text-gray-900" />
        <input
          type="search"
          className={cn(
            "flex h-10 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-10 py-2 text-sm text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:bg-white focus-visible:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
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
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900 transition-colors duration-200 rounded-full hover:bg-gray-100 p-1"
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
