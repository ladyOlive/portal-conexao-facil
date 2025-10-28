import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="IMPERIAL Contabilidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold text-sm">
              Mais de 300 empresas atendidas
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Especialistas em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contabilidade
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Consultoria e contabilidade completa para empresas em Grajau-MA, Formosa-MA e Amarante do Maranhão
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToContact} className="group">
              Fale com um especialista
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linktr.ee/imperialcontabilidade.gra" target="_blank" rel="noopener noreferrer">
                Conheça nosso trabalho
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Empresas atendidas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Filiais ativas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
