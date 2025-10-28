import { CheckCircle2 } from "lucide-react";
import teamImage from "@/assets/team-office.jpg";

const About = () => {
  const values = [
    "Atendimento personalizado e humanizado",
    "Transparência em todos os processos",
    "Tecnologia aplicada à contabilidade",
    "Compromisso com prazos e qualidade",
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold mb-4 block">Sobre a IMPERIAL</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Parceiros do seu{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                crescimento
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A IMPERIAL | Consultoria e Contabilidade é especialista em atender empresas de todos os portes,
              oferecendo soluções completas em contabilidade, consultoria fiscal e gestão empresarial.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com presença estratégica em Grajau-MA, Formosa-MA e Amarante do Maranhão, estamos próximos
              dos nossos clientes para oferecer o melhor atendimento e suporte.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,212,170,0.3)]">
              <img
                src={teamImage}
                alt="Equipe IMPERIAL"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl -z-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
