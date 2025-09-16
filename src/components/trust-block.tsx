"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Award, Users } from "lucide-react"

export function TrustBlock() {
  const trustItems = [
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Все оборудование сертифицировано и имеет гарантию производителя"
    },
    {
      icon: Award,
      title: "Опыт работы",
      description: "Более 35 лет на рынке автозаправочных станций"
    },
    {
      icon: Users,
      title: "Профессиональная команда",
      description: "Квалифицированные специалисты с опытом установки и обслуживания"
    },
    {
      icon: CheckCircle,
      title: "Полный цикл услуг",
      description: "От проектирования до ввода в эксплуатацию и технического обслуживания"
    }
  ]

  const partners = [
    {
      name: "Газпром Нефть",
      logo: "/LOGO SVG/gazprom-neft-logo.svg"
    },
    {
      name: "Татнефть",
      logo: "/LOGO SVG/tatneft-logo.svg"
    },
    {
      name: "Total",
      logo: "/LOGO SVG/total-logo.svg"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы обеспечиваем комплексные решения для автозаправочных станций с гарантией качества и надежности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Секция партнеров */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Наши партнеры
            </h3>
            <p className="text-muted-foreground">
              Доверяют нам ведущие нефтегазовые компании
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
                <img 
                  src={partner.logo} 
                  alt={`Логотип ${partner.name}`}
                  className="h-12 w-auto max-w-[200px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
