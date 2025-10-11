import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import whatsappIcon from '@/assets/images/whatsapp.png';

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
        <OptimizedImage 
          src={whatsappIcon} 
          alt="Contato via WhatsApp" 
          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-200" 
        />
      </button>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[calc(100vw-2rem)] max-w-md rounded-2xl">
          <DialogHeader className="text-center">
            <DialogTitle className="flex items-center justify-center gap-2 text-xl font-bold">
              <MessageCircle className="h-6 w-6 text-green-500" />
              Chamar no Suporte?
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              Você será redirecionado(a) para o nosso WhatsApp para conversar com uma de nossas atendentes.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-row gap-2 pt-4">
            <Button 
              variant="outline" 
              onClick={() => setIsModalOpen(false)}
              className="flex-1"
            >
              Voltar
            </Button>
            <Button 
              onClick={handleWhatsAppRedirect}
              className="flex-1 bg-green-500 hover:bg-green-600"
            >
              Sim
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingWhatsAppButton;