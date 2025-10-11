import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
const Footer = () => {
  return <footer id="rodape" className="text-white" style={{
    backgroundColor: '#935aee'
  }}>
      {/* Main Footer */}
      <div className="container mx-auto px-6 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
          {/* Brand Section */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">Lunara</h3>
            <p className="text-white leading-relaxed text-sm sm:text-base px-2 sm:px-0">A Lunara é especializada na importação de cosméticos femininos de alta qualidade. Como empresa nacional, Nosso compromisso é a qualidade garantida e satisfação do cliente, Proporcionamos acesso a produtos de beleza selecionados que valorizam o cuidado pessoal com praticidade e confiança.</p>
            <div className="flex space-x-3 justify-center sm:justify-start pt-2">
              <a href="https://www.facebook.com/people/Lunara/61574815833708/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/lunaracosmeticos.store?igsh=ZWVvMjVremhsM280" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>


          {/* Support */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Suporte</h4>
            <ul className="space-y-2 text-white text-sm sm:text-base">
              <li>
                <a href="https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+d%C3%BAvidas.+Voc%C3%AA+pode+me+ajudar?+" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors inline-block py-0">Suporte WhatsApp</a>
              </li>
              
              
              
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">(31) 98472-3813</span>
              </div>
              <div className="flex items-center gap-3 text-white justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">lunarahairs@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Belo Horizonte, MG 30110-001</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center px-0 mx-[17px]">
            <h4 className="text-xl font-semibold mb-0">Meios de pagamento</h4>
            <div className="flex justify-center -mt-1">
              <OptimizedImage src="/lovable-uploads/payment-methods-new.webp" alt="Meios de pagamento aceitos - Visa, Mastercard, American Express, Diners, Elo, Alelo, Hipercard, Banco do Brasil, PIX, Boleto" className="w-full max-w-[280px] h-auto object-contain" width={280} height={120} />
            </div>
          </div>

          {/* Security */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-0">Segurança</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center -mt-1 px-[39px]">
              <OptimizedImage src="/lovable-uploads/ssl-google-safe-new.webp" alt="Site seguro com certificado SSL 256 bits e Google Safe Browsing" className="w-full max-w-[280px] h-auto object-contain -mr-2" width={280} height={80} />
              <OptimizedImage src="/lovable-uploads/reclame-aqui-new.webp" alt="Loja verificada por Reclame Aqui" className="w-full max-w-[200px] h-auto object-contain" width={200} height={100} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 sm:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white text-xs sm:text-sm text-center sm:text-left">
              © 2025 Lunara. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white">
              <Link to="/privacy-policy" className="hover:text-pink-400 transition-colors py-1">
                Política de Privacidade
              </Link>
              <Link to="/terms-of-service" className="hover:text-pink-400 transition-colors py-1">
                Termos de Uso
              </Link>
              <Link to="/cookies" className="hover:text-pink-400 transition-colors py-1">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;