"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Phone, Send } from "lucide-react"

export function ConsultationForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contactMethod, setContactMethod] = useState("phone")
  const [phone, setPhone] = useState("")
  const [consent, setConsent] = useState(false)

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
    setPhone(formattedValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log({ name, email, contactMethod, phone })
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground">
              Готовы повысить эффективность вашей АЗС?
            </CardTitle>
            <CardDescription className="text-lg mt-4">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время, чтобы подобрать оптимальное решение и ответить на все вопросы.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
                             {/* Имя */}
               <div className="space-y-2">
                 <Label htmlFor="name" className="text-base font-medium text-foreground">
                   Как к вам обращаться?
                 </Label>
                 <Input
                   id="name"
                   type="text"
                   placeholder="Ваше имя"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                   className="h-12 text-base mt-4"
                 />
               </div>

               {/* Email */}
               <div className="space-y-2">
                 <Label htmlFor="email" className="text-base font-medium text-foreground">
                   Email
                 </Label>
                 <Input
                   id="email"
                   type="email"
                   placeholder="your@email.com"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   className="h-12 text-base mt-4"
                 />
               </div>

              {/* Способ связи */}
              <div className="space-y-3">
                <Label className="text-base font-medium text-foreground">
                  Удобный способ связи (Телефон/Telegram/WhatsApp)
                </Label>
                <div className="flex justify-start gap-8 mt-4">
                  <img 
                    src="/LOGO SVG/phone.svg" 
                    alt="Телефон" 
                    onClick={() => setContactMethod("phone")}
                    className={`w-[52.8px] h-[52.8px] transition-all duration-200 cursor-pointer hover:scale-110 ${
                      contactMethod === "phone" 
                        ? "grayscale-0" 
                        : "grayscale hover:grayscale-0"
                    }`} 
                  />
                  
                  <img 
                    src="/LOGO SVG/telegram.svg" 
                    alt="Telegram" 
                    onClick={() => setContactMethod("telegram")}
                    className={`w-[52.8px] h-[52.8px] transition-all duration-200 cursor-pointer hover:scale-110 ${
                      contactMethod === "telegram" 
                        ? "grayscale-0" 
                        : "grayscale hover:grayscale-0"
                    }`} 
                  />
                  
                  <img 
                    src="/LOGO SVG/whatsapp.svg" 
                    alt="WhatsApp" 
                    onClick={() => setContactMethod("whatsapp")}
                    className={`w-[52.8px] h-[52.8px] transition-all duration-200 cursor-pointer hover:scale-110 ${
                      contactMethod === "whatsapp" 
                        ? "grayscale-0" 
                        : "grayscale hover:grayscale-0"
                    }`} 
                  />
                </div>
              </div>

              {/* Согласие на обработку персональных данных */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-5 w-5 cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm text-foreground">
                  Я даю согласие на обработку персональных данных в соответствии с
                  {' '}<a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:no-underline">политикой конфиденциальности</a>.
                </label>
              </div>

              {/* Номер телефона */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium text-foreground">
                  Номер телефона
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-lg">🇷🇺</span>
                    <span className="text-sm text-muted-foreground">+7</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(000) 000-00-00"
                    value={phone}
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
              disabled={!consent}
            >
              <Send className="w-5 h-5 mr-2" />
              Получить бесплатную консультацию
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая на кнопку, вы даете согласие на обработку персональных данных.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
