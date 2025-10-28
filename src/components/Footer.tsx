import logoImperial from "@/assets/logo-imperial.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logoImperial} alt="IMPERIAL Logo" className="h-10 w-auto" />
            <span className="font-bold text-secondary-foreground">IMPERIAL Contabilidade</span>
          </div>
          
          <p className="text-secondary-foreground/80 text-sm text-center">
            © {currentYear} IMPERIAL | Consultoria e Contabilidade. Todos os direitos reservados.
          </p>
          
          <div className="text-sm text-secondary-foreground/80">
            Grajau-MA • Formosa-MA • Amarante-MA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
