"use client"

import { Footer } from "@/components/ui/footer"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <Footer
      brandName="ООО «МАСТЕР НПТ» - Официальный дистрибьютор CSA в России"
      socialLinks={[
        {
          icon: <Phone className="h-4 w-4" />,
          href: "tel:+78001234567",
          label: "Позвонить",
        },
        {
          icon: <Mail className="h-4 w-4" />,
          href: "mailto:info@gaz-kolonki.ru",
          label: "Написать на email",
        },
        {
          icon: <MapPin className="h-4 w-4" />,
          href: "#contacts",
          label: "Найти на карте",
        },
      ]}
      mainLinks={[
        { href: "#advantages", label: "Преимущества" },
        { href: "#product", label: "Продукция" },
        { href: "#configurator", label: "Конфигуратор" },
        { href: "#contacts", label: "Контакты" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Политика конфиденциальности" },
        { href: "/terms", label: "Условия использования" },
        { href: "/warranty", label: "Гарантия" },
      ]}
      copyright={{
        text: "© 2024 Газораздаточные колонки CSA. Все права защищены.",
        license: "Официальный дистрибьютор в России",
      }}
    />
  )
}

