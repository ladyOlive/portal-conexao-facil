const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IC</span>
            </div>
            <span className="font-bold text-foreground">IMPERIAL Contabilidade</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} IMPERIAL | Consultoria e Contabilidade. Todos os direitos reservados.
          </p>
          
          <div className="text-sm text-muted-foreground">
            Grajau-MA • Formosa-MA • Amarante-MA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
