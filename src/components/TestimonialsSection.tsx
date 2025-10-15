import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
// Using verification badge from uploads
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    id: 1,
    name: 'Mariana Oliveira',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Tinha muita queda de cabelo e algumas falhas. Com o Kit SOS Crescimento, a queda praticamente parou e o crescimento dos fios acelerou. Hoje, meus cabelos estão mais fortes, volumosos e sem cair!',
    image: '/lovable-uploads/depoimento-1.webp',
    product: 'Kit SOS Crescimento'
  }, {
    id: 2,
    name: 'Patrícia Souza',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Minha pele estava ressecada e com manchas. O Sérum Rosa Amazônica deixou minha pele mais hidratada, uniforme e com brilho natural. Recomendo muitoooo 🫶🥰🥰',
    image: '/lovable-uploads/depoimento-2.webp',
    product: 'Sérum Rosa Amazônica 11 em 1'
  }, {
    id: 3,
    name: 'Ana Costa',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'A menopausa trouxe ondas de calor e insônia, mas com o Amora Miúra + Vit, esses sintomas diminuíram muito! Me sinto mais disposta, e minha pele e cabelo estão melhores. Super recomendo!',
    image: '/lovable-uploads/depoimento-3.webp',
    product: 'Amora Miúra + Vit'
  }, {
    id: 4,
    name: 'Luciana Mendes',
    location: 'Curitiba, PR',
    rating: 5,
    text: 'Meu cabelo estava ressecado por causa de química. A Máscara Karseell deixou meus fios hidratados, sedosos e brilhantes desde a primeira aplicação. Não preciso mais de salão!',
    image: '/lovable-uploads/depoimento-4.webp',
    product: 'Máscara Karseell Original Collagen'
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  return <section id="depoimentos" className="pt-8 pb-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 lg:mb-16 fade-in">
          <h2 className="md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 lg:mb-6 text-3xl">
            O que nossas <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">Mais de 10.000 mulheres já transformaram seus cabelos e sua pele com a Lunara! Veja alguns depoimentos de nossas lindas clientes:</p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
                {testimonials.map(testimonial => <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                    <Card className="mx-auto max-w-3xl shadow-lg">
                      <CardContent className="p-4 md:p-6 lg:p-8">
                        <div className="text-center">
                          {/* Quote Icon */}
                          <Quote className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-pink-300 mx-auto mb-3 md:mb-4 lg:mb-6" />
                          
                          {/* Rating */}
                          <div className="flex justify-center mb-4 md:mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />)}
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className="text-sm md:text-base lg:text-xl xl:text-2xl text-gray-700 italic mb-4 md:mb-6 lg:mb-8 leading-relaxed px-2">
                            "{testimonial.text}"
                          </blockquote>

                           {/* Customer Info */}
                           <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                             <OptimizedImage src={testimonial.image} alt={`Foto de ${testimonial.name}, cliente satisfeita`} className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full object-cover flex-shrink-0" width={60} height={60} />
                             <div className="text-center md:text-left min-w-0">
                               <div className="flex items-center justify-center md:justify-start gap-1 mb-1 flex-wrap">
                                 <span className="text-xs md:text-sm">📸</span>
                                 <h4 className="font-bold text-gray-800 text-xs md:text-base">
                                   {testimonial.name} – {testimonial.location}
                                 </h4>
                               </div>
                               <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
                                 <span className="text-xs md:text-sm text-gray-600">Cliente Verificada</span>
                                 <img src="/lovable-uploads/e5bc6017-5786-4d67-a89d-28203bee7026.png" alt="Selo de verificação" className="w-3 h-3 md:w-4 md:h-4" />
                               </div>
                               <div className="flex items-center justify-center md:justify-start gap-1">
                                 <span className="text-xs md:text-sm">👉</span>
                                 <p className="text-xs md:text-sm text-pink-600 font-medium">
                                   Comprou: {testimonial.product}
                                 </p>
                               </div>
                             </div>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>)}
              </div>
            </div>

            {/* Navigation Buttons - Positioned outside the card */}
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="absolute -left-4 md:-left-14 lg:-left-20 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl z-10 rounded-full w-10 h-10 md:w-12 md:h-12">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="absolute -right-4 md:-right-14 lg:-right-20 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl z-10 rounded-full w-10 h-10 md:w-12 md:h-12">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-8 md:mt-12 lg:mt-16 text-center">
            <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-gradient font-bold text-lg md:text-xl lg:text-2xl">+10.000</p>
                <p className="text-gradient text-sm md:text-base">clientes satisfeitas</p>
              </div>
              <div className="text-center">
                <p className="text-gradient font-bold text-lg md:text-xl lg:text-2xl">7 dias</p>
                <p className="text-gradient text-sm md:text-base">de garantia</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div id="whatsapp-cta" className="text-center mt-12 fade-in fade-in-delay-3">
            <p className="text-gray-600 mb-6">
              Tem alguma dúvida? Nossa equipe está pronta para ajudar!
            </p>
            <div className="flex justify-center">
              <a href="https://wa.me/?phone=5531984723813&text=Olá!+Gostaria+de+falar+com+o+suporte+da+Lunara.+Fico+no+aguardo." target="_blank" rel="noopener noreferrer" className="whatsapp-cta-button bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-transform duration-300 inline-block">
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;