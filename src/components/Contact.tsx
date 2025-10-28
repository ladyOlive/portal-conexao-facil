import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold mb-4 block">Entre em Contato</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Vamos conversar sobre{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                seu negócio?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atender você. Entre em contato através dos nossos canais
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Redes Sociais</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    asChild
                  >
                    <a
                      href="https://www.instagram.com/imperial.contabilidade"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={20} />
                      Instagram
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    asChild
                  >
                    <a
                      href="https://wa.me/5599999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Links Úteis</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    asChild
                  >
                    <a
                      href="https://linktr.ee/imperialcontabilidade.gra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                      Linktree
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    asChild
                  >
                    <a
                      href="https://www.facebook.com/imperial.contabilidade"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook size={20} />
                      Facebook
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">Ou ligue diretamente para uma de nossas unidades</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+5599999999999"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  Grajau: (99) 9999-9999
                </a>
                <span className="text-muted-foreground">|</span>
                <a
                  href="tel:+5599999999999"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  Formosa: (99) 9999-9999
                </a>
                <span className="text-muted-foreground">|</span>
                <a
                  href="tel:+5599999999999"
                  className="text-primary hover:text-accent transition-colors font-semibold"
                >
                  Amarante: (99) 9999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
