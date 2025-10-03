"use client"

import { Footer } from "@/components/ui/footer"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <Footer
      brandDescription="Формируем дилерскую сеть и приглашаем к сотрудничеству заинтересованных лиц и организации"
      logo={
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">CSA</span>
        </div>
      }
      brandName="ООО «МАСТЕР НПТ» - Официальный дистрибьютор CSA в России"
      socialLinks={[
        {
          icon: <Phone className="h-4 w-4" />,
          href: "tel:+74956444640",
          label: "Позвонить",
        },
        {
          icon: <Mail className="h-4 w-4" />,
          href: "mailto:inf@masternpt.ru",
          label: "Написать на email",
        },
        {
          icon: <MapPin className="h-4 w-4" />,
          href: "https://yandex.ru/maps/-/CLByeFOS",
          label: "Найти на карте",
        },
      ]}
      mainLinks={[
        { href: "#advantages", label: "Преимущества" },
        { href: "#product", label: "Продукция" },
        { href: "#configurator", label: "Конфигуратор" },
        { href: "#contacts", label: "Контакты" },
      ]}
      copyright={{
        text: "© 2024 Газораздаточные колонки CSA. Все права защищены.",
        license: "Официальный дистрибьютор в России",
      }}
    />
  )
}

