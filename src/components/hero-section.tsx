"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToConfigurator = () => {
    const element = document.getElementById('configurator')
    if (element) {
      const headerHeight = 64 // высота header (h-16 = 64px)
      const windowHeight = window.innerHeight
      const elementHeight = element.offsetHeight
      const elementTop = element.offsetTop
      
      // Вычисляем позицию для центрирования раздела
      const scrollPosition = elementTop - headerHeight - (windowHeight - elementHeight) / 2
      
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      })
    }
  }
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Фоновое изображение с затемнением */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-image.png')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'color-mix(in oklab, var(--color-black) 70%, transparent)' }} />
      </div>
      
      {/* Контент */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка - Контент */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Газораздаточные колонки{" "}
              <span className="text-primary text-[1.1em]">CSA</span>
              <br />
              для Стабильного Развития Вашего Бизнеса
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Газораздаточные колонки CSA, разработанные с участием немецких специалистов, гарантируют высочайшую точность учета СУГ и бесперебойную работу. Повысьте пропускную способность вашей АЗС и сократите операционные расходы.
            </p>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="text-base px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg cursor-pointer"
                onClick={scrollToConfigurator}
              >
                Рассчитать стоимость
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
