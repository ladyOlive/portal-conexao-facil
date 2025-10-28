import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      city: "Grajau",
      state: "MA",
      address: "Centro, Grajau - MA",
      phone: "(99) 9999-9999",
      email: "grajau@imperialcontabilidade.com.br",
      highlight: true,
    },
    {
      city: "Formosa",
      state: "MA",
      address: "Centro, Formosa da Serra Negra - MA",
      phone: "(99) 9999-9999",
      email: "formosa@imperialcontabilidade.com.br",
      highlight: false,
    },
    {
      city: "Amarante",
      state: "MA",
      address: "Centro, Amarante do Maranhão - MA",
      phone: "(99) 9999-9999",
      email: "amarante@imperialcontabilidade.com.br",
      highlight: false,
    },
  ];

  return (
    <section id="localizacao" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-4 block">Onde Estamos</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Presença estratégica em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              3 cidades
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos presentes nas principais cidades da região para estar sempre próximo de você
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`group hover:shadow-[0_20px_60px_-15px_rgba(0,212,170,0.3)] transition-all duration-300 hover:-translate-y-1 ${
                location.highlight ? "border-primary border-2" : "border-border/50"
              }`}
            >
              <CardContent className="p-6">
                {location.highlight && (
                  <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-primary font-semibold text-xs">Matriz</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {location.city}
                  <span className="text-muted-foreground text-lg ml-2">- {location.state}</span>
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-muted-foreground text-sm">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary flex-shrink-0" size={18} />
                    <a
                      href={`tel:${location.phone.replace(/\D/g, "")}`}
                      className="text-foreground hover:text-primary transition-colors text-sm"
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary flex-shrink-0" size={18} />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-foreground hover:text-primary transition-colors text-sm break-all"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
