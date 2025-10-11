import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage'; // Importando OptimizedImage

const FloatingWhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+dúvidas.+Voc%C3%AA+pode+me+ajudar?+', '_blank');
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-5 right-5 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        <OptimizedImage // Substituindo o ícone MessageCircle
          src='lovable-uploads/whatsapp logo.png'
          alt="Ícone do WhatsApp"
          className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
        />
      </button>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <OptimizedImage // Adicionando o logo do WhatsApp no cabeçalho do modal
              src='lovable-uploads/whatsapp logo.png'
              alt="Logo do WhatsApp"
              className="w-12 h-12 mx-auto mb-4"
            />
            <DialogTitle className="text-center">Chamar no Suporte?</DialogTitle> {/* Alterando o título */}
            <DialogDescription className="text-center">
              Você será redirecionado(a) para o nosso WhatsApp para conversar com uma de nossas atendentes. {/* Alterando a descrição */}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => setIsModalOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancelar {/* Alterando o texto do botão */}
            </Button>
            <Button 
              onClick={handleWhatsAppRedirect}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600"
            >
              Sim, chamar agora {/* Alterando o texto do botão */}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingWhatsAppButton;