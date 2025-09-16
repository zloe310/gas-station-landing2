"use client"

import Link from "next/link"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, Package, Calculator, Phone, Star } from "lucide-react"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64 // высота header (h-16 = 64px)
      const windowHeight = window.innerHeight
      const elementHeight = element.offsetHeight
      const elementTop = element.offsetTop
      
      // Дополнительное смещение для блока продукции
      const extraOffset = sectionId === 'product' ? 50 : 0
      
      // Вычисляем позицию для центрирования раздела
      const scrollPosition = elementTop - headerHeight - (windowHeight - elementHeight) / 2 + extraOffset
      
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    {
      name: "Главная",
      url: "#home",
      icon: Home,
    },
    {
      name: "Преимущества",
      url: "#advantages",
      icon: Star,
    },
    {
      name: "Продукция",
      url: "#product",
      icon: Package,
    },
    {
      name: "Конфигуратор",
      url: "#configurator",
      icon: Calculator,
    },
    {
      name: "Контакты",
      url: "#contacts",
      icon: Phone,
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Газораздаточные колонки CSA" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Центрированная навигация */}
          <div className="flex-1 flex justify-center">
            <NavBar 
              items={navItems} 
              className="!relative !top-0 !left-0 !translate-x-0 !mb-0 !pt-0"
              onItemClick={(item: { name: string; url: string; icon: any }) => {
                const sectionId = item.url.replace('#', '')
                scrollToSection(sectionId)
              }}
            />
          </div>

          {/* Пустое место для баланса */}
          <div className="w-24"></div>
        </div>
      </div>
    </header>
  )
}
