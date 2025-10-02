"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export function ConsultationForm() {
  const [companyName, setCompanyName] = useState("")
  const [corporateEmail, setCorporateEmail] = useState("")
  const [corporatePhone, setCorporatePhone] = useState("")

  const formatPhoneNumber = (value: string) => {
    // Убираем все нецифровые символы
    const numbers = value.replace(/\D/g, '')
    
    // Ограничиваем до 10 цифр (без учета кода страны)
    const limitedNumbers = numbers.slice(0, 10)
    
    // Форматируем номер
    if (limitedNumbers.length === 0) return ""
    if (limitedNumbers.length <= 3) return `(${limitedNumbers}`
    if (limitedNumbers.length <= 6) return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3)}`
    if (limitedNumbers.length <= 8) return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6)}`
    return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6, 8)}-${limitedNumbers.slice(8)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value)
    setCorporatePhone(formattedValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log({ companyName, corporateEmail, corporatePhone })
  }

  return (
    <section id="consultation-form" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground">
              Готовы повысить эффективность вашей АГЗС?
            </CardTitle>
            <CardDescription className="text-lg mt-4">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время, чтобы подобрать оптимальное решение и ответить на все вопросы.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Название компании */}
              <div className="space-y-2">
                <Label htmlFor="company-name" className="text-base font-medium text-foreground">
                  Название компании
                </Label>
                <Input
                  id="company-name"
                  type="text"
                  placeholder="ООО «Пример»"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="h-12 text-base mt-4"
                />
              </div>

              {/* Корпоративный email */}
              <div className="space-y-2">
                <Label htmlFor="corporate-email" className="text-base font-medium text-foreground">
                  Корпоративный email
                </Label>
                <Input
                  id="corporate-email"
                  type="email"
                  placeholder="info@company.ru"
                  value={corporateEmail}
                  onChange={(e) => setCorporateEmail(e.target.value)}
                  required
                  className="h-12 text-base mt-4"
                />
              </div>

              {/* Корпоративный номер телефона */}
              <div className="space-y-2">
                <Label htmlFor="corporate-phone" className="text-base font-medium text-foreground">
                  Корпоративный номер телефона
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-lg">🇷🇺</span>
                    <span className="text-sm text-muted-foreground">+7</span>
                  </div>
                  <Input
                    id="corporate-phone"
                    type="tel"
                    placeholder="(000) 000-00-00"
                    value={corporatePhone}
                    onChange={handlePhoneChange}
                    required
                    className="h-12 text-base pl-16"
                  />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              onClick={handleSubmit}
              className="w-full h-14 text-lg font-semibold cursor-pointer"
              size="lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Получить бесплатную консультацию
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая на кнопку, я подтверждаю, что предоставляю исключительно корпоративную информацию (не персональные данные физического лица)
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
