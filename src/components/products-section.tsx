import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
  const products = [
    {
      id: "luxar",
      title: "Модель Luxar: Надежный стандарт",
      description: "Идеальное решение для АЗС, которым требуется эффективное и надежное оборудование с оптимальным соотношением цены и качества.",
      buttonText: "Скачать спецификацию Luxar"
    },
    {
      id: "nuvola-s",
      title: "Модель Nuvola S: Универсальность и гибкость",
      description: "Универсальная ГРК для предприятий, стремящихся к максимальной точности учета, высокой производительности и долговечности.",
      buttonText: "Скачать спецификацию Nuvola S"
    },
    {
      id: "nuvola",
      title: "Модель Nuvola: Премиальное исполнение",
      description: "Флагманская модель для АЗС, которым требуется оборудование премиум-класса с максимальной надежностью для самых требовательных условий эксплуатации.",
      buttonText: "Скачать спецификацию Nuvola"
    }
  ]

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Наша продукция: Решения для любых задач
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы предлагаем три модели ГРК, каждая из которых спроектирована для решения конкретных задач вашего бизнеса.
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="h-full flex flex-col group">
              {/* Liquid Glass Card */}
              <div className="relative h-full flex flex-col backdrop-blur-xl bg-gray-500/20 dark:bg-gray-400/20 border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-gray-500/30 dark:hover:bg-gray-400/30">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex-shrink-0 pb-4 text-center">
                    <h3 className="text-2xl font-bold text-primary mb-3">{product.title.split(':')[0]}</h3>
                    <p className="text-lg text-white mb-2 font-semibold">{product.title.split(':')[1]}</p>
                    <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>

                  {/* Photo */}
                  <div className="flex-shrink-0 mb-6">
                    <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-xl">
                      <img 
                        src={`/products/${product.id}.png`}
                        alt={`Газораздаточная колонка ${product.title.split(':')[0]}`}
                        className="w-full h-full object-contain"
                      />
                    </AspectRatio>
                  </div>

                  {/* Button */}
                  <div className="flex-shrink-0 mt-auto">
                    <Button 
                      className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-pointer" 
                      variant="outline"
                    >
                      {product.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
