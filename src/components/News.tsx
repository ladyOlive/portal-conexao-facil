import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "Novas Regras do Simples Nacional 2025",
    date: "15 de Janeiro, 2025",
    excerpt: "Entenda as mudanças nas faixas de tributação e como elas podem impactar seu negócio no novo ano fiscal.",
    category: "Tributação",
  },
  {
    title: "Prazo para Declaração do IR 2025",
    date: "10 de Janeiro, 2025",
    excerpt: "Fique atento aos prazos e documentos necessários para a declaração do Imposto de Renda de Pessoa Física.",
    category: "Imposto de Renda",
  },
  {
    title: "eSocial: Atualizações Importantes",
    date: "05 de Janeiro, 2025",
    excerpt: "Confira as novas obrigações e funcionalidades do eSocial que entram em vigor neste trimestre.",
    category: "Legislação",
  },
  {
    title: "Certificado Digital: Guia Completo",
    date: "28 de Dezembro, 2024",
    excerpt: "Saiba tudo sobre certificado digital, tipos disponíveis e como escolher o ideal para sua empresa.",
    category: "Tecnologia",
  },
  {
    title: "Reforma Tributária: O Que Muda",
    date: "20 de Dezembro, 2024",
    excerpt: "Análise completa das mudanças previstas na reforma tributária e seus impactos nas empresas brasileiras.",
    category: "Tributação",
  },
  {
    title: "Nota Fiscal Eletrônica: Dicas",
    date: "15 de Dezembro, 2024",
    excerpt: "Otimize a emissão de notas fiscais eletrônicas e evite erros comuns que podem gerar multas.",
    category: "Fiscal",
  },
];

const News = () => {
  return (
    <section id="news" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Newspaper className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Notícias e Atualizações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas novidades do universo contábil e fiscal. Informação que mantém você sempre atualizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {news.map((item, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 bg-background border-border overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todas as Notícias
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
