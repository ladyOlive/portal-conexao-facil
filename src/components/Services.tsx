import { Card, CardContent } from "@/components/ui/card";
import { FileText, TrendingUp, Users, Calculator, Shield, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Contabilidade Completa",
      description: "Escrituração contábil e fiscal completa, com entrega de todas as obrigações acessórias dentro dos prazos legais.",
    },
    {
      icon: Calculator,
      title: "Gestão Tributária",
      description: "Planejamento tributário inteligente para reduzir custos e manter sua empresa em conformidade com a legislação.",
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, admissões, demissões e obrigações trabalhistas.",
    },
    {
      icon: TrendingUp,
      title: "Consultoria Empresarial",
      description: "Análises financeiras e estratégicas para apoiar a tomada de decisões e o crescimento do seu negócio.",
    },
    {
      icon: Shield,
      title: "Abertura de Empresas",
      description: "Assessoria completa na abertura e regularização de empresas, com todo suporte burocrático necessário.",
    },
    {
      icon: BarChart3,
      title: "Análise de Resultados",
      description: "Relatórios gerenciais detalhados para acompanhar a performance financeira do seu negócio.",
    },
  ];

  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-4 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Soluções completas para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              sua empresa
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços contábeis e de consultoria para empresas de todos os segmentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-[0_20px_60px_-15px_rgba(0,212,170,0.3)] transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
