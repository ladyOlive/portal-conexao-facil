import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Briefcase, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const careerSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome deve ter menos de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Email deve ter menos de 255 caracteres"),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone inválido"),
  position: z.string().trim().min(1, "Cargo pretendido é obrigatório").max(100, "Cargo deve ter menos de 100 caracteres"),
  message: z.string().trim().max(500, "Mensagem deve ter menos de 500 caracteres").optional(),
});

type CareerFormData = z.infer<typeof careerSchema>;

const Careers = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "Erro",
          description: "O arquivo deve ter no máximo 5MB",
          variant: "destructive",
        });
        return;
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        toast({
          title: "Erro",
          description: "Apenas arquivos PDF, DOC e DOCX são aceitos",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: CareerFormData) => {
    if (!selectedFile) {
      toast({
        title: "Erro",
        description: "Por favor, anexe seu currículo",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission - in production, this would send to backend
    setTimeout(() => {
      toast({
        title: "Currículo enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      reset();
      setSelectedFile(null);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="careers" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Trabalhe Conosco</h2>
            <p className="text-lg text-muted-foreground">
              Faça parte da nossa equipe. Envie seu currículo e venha crescer com a Imperial Contabilidade.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-background p-8 rounded-lg border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Nome Completo *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Seu nome completo"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Telefone *</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="(00) 00000-0000"
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="position" className="text-foreground">Cargo Pretendido *</Label>
                <Input
                  id="position"
                  {...register("position")}
                  placeholder="Ex: Contador, Assistente"
                  className={errors.position ? "border-destructive" : ""}
                />
                {errors.position && (
                  <p className="text-sm text-destructive">{errors.position.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Mensagem (Opcional)</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Conte-nos um pouco sobre sua experiência..."
                rows={4}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume" className="text-foreground">Currículo (PDF, DOC, DOCX - Max 5MB) *</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="cursor-pointer file:cursor-pointer"
                />
                {selectedFile && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Upload className="w-4 h-4" />
                    <span>{selectedFile.name}</span>
                  </div>
                )}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Currículo"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Careers;
