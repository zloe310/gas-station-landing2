"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

type ModelType = 'Luxar' | 'Nuvola' | 'NuvolaS'
type HoseCountType = '1' | '2'
type BodyMaterialType = 'painted' | 'stainless'
type MeasuringDeviceType = 'mechanical' | 'coriolis'

export function Configurator() {
  const [model, setModel] = useState<ModelType>('NuvolaS')
  const [hoseCount, setHoseCount] = useState<HoseCountType>('1')
  const [bodyMaterial, setBodyMaterial] = useState<BodyMaterialType>('painted')
  const [measuringDevice, setMeasuringDevice] = useState<MeasuringDeviceType>('mechanical')
  const [estimatedCost, setEstimatedCost] = useState(0)

  // Прайс-лист на основе предоставленного файла
  const prices: Record<ModelType, Record<HoseCountType, Record<BodyMaterialType, number>>> = {
    Luxar: {
      '1': { painted: 617000, stainless: 701000 },
      '2': { painted: 969000, stainless: 1077000 },
    },
    Nuvola: {
      '1': { painted: 617000, stainless: 701000 },
      '2': { painted: 1035000, stainless: 1122000 },
    },
    NuvolaS: {
      '1': { painted: 577000, stainless: 658000 },
      '2': { painted: 974000, stainless: 1050000 },
    },
  }

  // Логика расчета стоимости
  useEffect(() => {
    let cost = 0
    try {
      const modelPrices = prices[model]
      if (modelPrices) {
        const hosePrices = modelPrices[hoseCount]
        if (hosePrices) {
          cost = hosePrices[bodyMaterial] || 0
        }
      }
      
      // Добавляем стоимость измерительного устройства
      if (measuringDevice === 'coriolis') {
        const coriolisPrice = hoseCount === '1' ? 500000 : 900000
        cost += coriolisPrice
      }
    } catch (error) {
      console.error("Error calculating price for selection:", { model, hoseCount, bodyMaterial, measuringDevice })
      cost = 0
    }
    setEstimatedCost(cost)
  }, [model, hoseCount, bodyMaterial, measuringDevice])

  // Функция для форматирования валюты

  const scrollToConsultationForm = () => {
    const formSection = document.getElementById("consultation-form")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }
  const formatCurrency = (amount: number) => {
    if (typeof amount !== 'number') return '...'
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Соберите свою идеальную колонку и узнайте цену прямо сейчас
            </CardTitle>
            <CardDescription className="text-center">
              Получите расчет стоимости, выбрав модель, материал корпуса и необходимое количество раздаточных кранов.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Верхняя часть: Опции конфигурации */}
            <div className="space-y-6">
              {/* Выберите модель */}
              <div className="space-y-3">
                <h3 className="font-semibold text-base text-center text-foreground">Выберите модель</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    onClick={() => setModel('Luxar')}
                    className={`p-4 rounded-lg text-sm font-semibold transition-all duration-200 border-2 flex flex-row items-center justify-start gap-4 h-32 cursor-pointer ${
                      model === 'Luxar' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    <div className="w-16 h-full rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img 
                        src="/products/luxar.png" 
                        alt="Luxar" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-base">Luxar</span>
                  </button>
                  
                  <button
                    onClick={() => setModel('NuvolaS')}
                    className={`p-4 rounded-lg text-sm font-semibold transition-all duration-200 border-2 flex flex-row items-center justify-start gap-4 h-32 cursor-pointer ${
                      model === 'NuvolaS' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    <div className="w-16 h-full rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img 
                        src="/products/nuvola-s.png" 
                        alt="Nuvola S" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-base">Nuvola S</span>
                  </button>
                  
                  <button
                    onClick={() => setModel('Nuvola')}
                    className={`p-4 rounded-lg text-sm font-semibold transition-all duration-200 border-2 flex flex-row items-center justify-start gap-4 h-32 cursor-pointer ${
                      model === 'Nuvola' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    <div className="w-16 h-full rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img 
                        src="/products/nuvola.png" 
                        alt="Nuvola" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-base">Nuvola</span>
                  </button>
                </div>
              </div>

              {/* Количество шлангов */}
              <div className="space-y-3">
                <h3 className="font-semibold text-base text-center text-foreground">Количество шлангов</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setHoseCount('1')}
                    className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border-2 cursor-pointer ${
                      hoseCount === '1' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    1 шланг
                  </button>
                  <button
                    onClick={() => setHoseCount('2')}
                    className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border-2 cursor-pointer ${
                      hoseCount === '2' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    2 шланга
                  </button>
                </div>
              </div>

              {/* Материал корпуса */}
              <div className="space-y-3">
                <h3 className="font-semibold text-base text-center text-foreground">Материал корпуса</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBodyMaterial('painted')}
                    className={`text-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border-2 cursor-pointer ${
                      bodyMaterial === 'painted' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    Окрашенная сталь
                  </button>
                  <button
                    onClick={() => setBodyMaterial('stainless')}
                    className={`text-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border-2 cursor-pointer ${
                      bodyMaterial === 'stainless' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    Нержавеющая сталь
                  </button>
                </div>
              </div>

              {/* Измерительное устройство */}
              <div className="space-y-3">
                <h3 className="font-semibold text-base text-center text-foreground">Измерительное устройство</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setMeasuringDevice('mechanical')}
                    className={`text-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border-2 cursor-pointer ${
                      measuringDevice === 'mechanical' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    Механический объемомер
                  </button>
                  <button
                    onClick={() => setMeasuringDevice('coriolis')}
                    className={`text-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border-2 cursor-pointer ${
                      measuringDevice === 'coriolis' 
                        ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                        : 'bg-card border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    Массовый объемомер (Кориолис)
                  </button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Нижняя часть: Результат */}
            <div className="flex flex-col items-center text-center space-y-3">
              <p className="text-muted-foreground">Ориентировочная стоимость:</p>
              <div className="text-4xl sm:text-5xl font-extrabold text-primary">
                {formatCurrency(estimatedCost)}
              </div>
              <p className="text-sm text-muted-foreground max-w-sm">
                Полученная стоимость является ориентировочной для выбранной комплектации. Для получения точного коммерческого предложения, пожалуйста, нажмите на кнопку ниже.
              </p>
            </div>
          </CardContent>

          <CardFooter>
            <Button onClick={scrollToConsultationForm} className="w-full cursor-pointer" size="lg">
              Получить коммерческое предложение
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
