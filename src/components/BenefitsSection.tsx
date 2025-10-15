import React from 'react';

const BenefitsSection = () => {
  // Ícones SVG minimalistas profissionais (estilo lineart fino)
  const CheckShieldIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M32 8L12 16v16c0 12.15 8.39 23.49 20 26.37 11.61-2.88 20-14.22 20-26.37V16L32 8z" 
            stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 32l6 6 12-12" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const TruckIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M8 16h28v24H8z" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 24h8l8 8v8h-16v-16z" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="44" r="4" stroke="#6366f1" strokeWidth="1.5"/>
      <circle cx="44" cy="44" r="4" stroke="#6366f1" strokeWidth="1.5"/>
      <path d="M20 44h16M8 40h0" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const SparkleIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M32 8v48M52 28H12M46 14L18 50M46 50L18 14" 
            stroke="#d946ef" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const HeadsetIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M48 30v-8c0-8.837-7.163-16-16-16s-16 7.163-16 16v8" 
            stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 30h-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h4v-16zM48 30h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4v-16z" 
            stroke="#0ea5e9" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M48 46v2a8 8 0 0 1-8 8h-8" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const benefits = [
    {
      id: 1,
      icon: CheckShieldIcon,
      title: 'Certificado Anvisa',
      description: '100% dos produtos saõ registrados e testados dermatologicamente pela Agência Nacional de Vigilância Sanitária',
      accent: 'emerald'
    },
    {
      id: 2,
      icon: TruckIcon,
      title: 'Frete Grátis',
      description: 'Entrega Gratuita dos produtos para todo o território nacional via Correios ou transportadora',
      accent: 'indigo',
    },
    {
      id: 3,
      icon: SparkleIcon,
      title: 'Efeito Profissional',
      description: 'Produtos de alta performance que proporcionam resultados comparáveis aos tratamentos de salões especializados',
      accent: 'fuchsia'
    },
    {
      id: 4,
      icon: HeadsetIcon,
      title: 'Suporte Especializado',
      description: 'Equipe de Suporte disponível via WhatsApp para esclarecer dúvidas sobre produtos, aplicação e rastreamento de pedidos',
      accent: 'sky',
      link: 'https://wa.me/?phone=5531984723813&text=Olá!+Gostaria+de+falar+com+o+suporte+da+Lunara.+Fico+no+aguardo.'
    }
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Resultados Comprovados por{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Mais de 10 Mil Brasileiras
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Produtos que reduzem frizz em até 85%, clareiam manchas em 30 dias e fortalecem raízes capilares com ingredientes aprovados
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const accentColors = {
              emerald: 'group-hover:border-emerald-500 group-hover:shadow-emerald-100',
              indigo: 'group-hover:border-indigo-500 group-hover:shadow-indigo-100',
              fuchsia: 'group-hover:border-fuchsia-500 group-hover:shadow-fuchsia-100',
              sky: 'group-hover:border-sky-500 group-hover:shadow-sky-100'
            };

            return (
              <div
                key={benefit.id}
                className={`
                  group relative
                  p-6 md:p-8
                  bg-white
                  border-2 border-gray-100
                  rounded-lg
                  transition-all duration-300
                  hover:shadow-xl
                  ${accentColors[benefit.accent]}
                `}
              >
                {/* Icon */}
                <div className="mb-5">
                  <IconComponent />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                  {benefit.description}
                </p>

                {/* Optional Link */}
                {benefit.link && (
                  <a 
                    href={benefit.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-700 mt-3 transition-colors"
                  >
                    Falar com especialista
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
