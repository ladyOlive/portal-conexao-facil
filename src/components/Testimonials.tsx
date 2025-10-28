import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    company: "Loja Bela Vista",
    text: "A Imperial transformou a gestão contábil da minha empresa. Profissionais competentes e sempre disponíveis para esclarecer dúvidas.",
    rating: 5,
  },
  {
    name: "João Santos",
    company: "Tech Solutions",
    text: "Excelente atendimento! A equipe é muito atenciosa e resolve tudo com agilidade. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    company: "Restaurante Sabor do Cerrado",
    text: "Parceria de anos! A Imperial sempre nos orientou nas melhores decisões fiscais e tributárias. Profissionais de confiança.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    company: "Construtora Piauí",
    text: "Serviço impecável desde a abertura da empresa. Acompanhamento constante e suporte excepcional em todas as áreas.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
            <Quote className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nosso maior patrimônio. Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover-scale bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
