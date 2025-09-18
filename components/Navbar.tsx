'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Book, Home, Library, BookMarked } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/stories", label: "All Stories", icon: Library },
    { path: "/series", label: "Series", icon: BookMarked },
  ]

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 font-kid text-2xl">
            <Book className="w-8 h-8 text-primary" />
            <span className="bg-gradient-rainbow bg-clip-text text-transparent">
              KidsStories
            </span>
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              const Icon = item.icon
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 font-comic font-bold",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-lg transform scale-105" 
                      : "text-foreground hover:bg-secondary hover:scale-105"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}