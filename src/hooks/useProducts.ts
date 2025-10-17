import { useMemo } from 'react';
import { Product } from '@/contexts/CartContext';

export const useProducts = () => {
  const products: Product[] = useMemo(() => [
    {
      id: 12,
      name: "Kit S.O.S Crescimento Capilar – Tratamento Antiqueda que Acelera o Crescimento dos Fios",
      price: 179.00,
      originalPrice: 229.00,
      image: "/lovable-uploads/kit-sos-1.webp",
      category: "Cabelos",
      images: [
        "/lovable-uploads/kit-sos-1.webp",
        "/lovable-uploads/kit-sos-2.webp",
        "/lovable-uploads/kit-sos-3.webp",
        "/lovable-uploads/kit-sos-4.webp",
        "/lovable-uploads/kit-sos-5.webp"
      ],
      rating: 4.9,
      reviews: 1072,
      badge: "Clínica em Casa",
      badgeColor: "bg-red-500",
      slug: "kit-sos-crescimento",
      minicopy: "💆‍♀️ 7 ativos contra queda e falhas — clínica capilar em casa!",
      customButtonText: "Iniciar Meu Tratamento",
      extraInfo: "Cupom CLIENTE10: ganhe 10% OFF",
      weeklySales: 130
    },
    {
      id: 13,
      name: "Sérum Facial Rosa Amazônica – Rejuvenescedor 11 em 1 com Efeito Lifting e Clareador",
      price: 197.00,
      originalPrice: 247.00,
      image: "/lovable-uploads/rosa-amazonica-1.webp",
      category: "Skincare",
      images: [
        "/lovable-uploads/rosa-amazonica-1.webp",
        "/lovable-uploads/rosa-amazonica-2.webp",
        "/lovable-uploads/rosa-amazonica-3.webp",
        "/lovable-uploads/rosa-amazonica-4.webp",
        "/lovable-uploads/rosa-amazonica-5.webp"
      ],
      rating: 4.8,
      reviews: 823,
      badge: "11 em 1 Exclusivo",
      badgeColor: "bg-pink-500",
      slug: "rosa-amazonica",
      minicopy: "🌸 11 benefícios em 1 sérum poderoso",
      customButtonText: "Ganhar Meu Glow Natural",
      extraInfo: "🔥 Leve 2, Pague 1 – Oferta Relâmpago",
      weeklySales: 100
    },
    {
      id: 11,
      name: "Máscara Capilar Karseell Collagen – Tratamento de Colágeno para Reparação Intensa (500g)",
      price: 170.00,
      originalPrice: 189.00,
      image: "/lovable-uploads/karseell-1.webp",
      category: "Cabelos",
      images: [
        "/lovable-uploads/karseell-1.webp",
        "/lovable-uploads/karseell-2.webp",
        "/lovable-uploads/karseell-3.webp",
        "/lovable-uploads/karseell-4.webp",
        "/lovable-uploads/karseell-5.webp",
        "/lovable-uploads/karseell-6.webp",
        "/lovable-uploads/karseell-7.webp",
        "/lovable-uploads/karseell-8.webp",
        "/lovable-uploads/karseell-9.webp"
      ],
      rating: 4.7,
      reviews: 703,
      badge: "Brinde Exclusivo",
      badgeColor: "bg-yellow-500",
      slug: "mascara-karseell",
      minicopy: "✨ Hidratação profunda e brilho desde a 1ª aplicação",
      customButtonText: "Resgatar a Saúde dos Meus Fios",
      extraInfo: "🎁 Brinde: Óleo Karseell 50ml",
      weeklySales: 100
    },
    {
      id: 14,
      name: "Amora Miúra + VIT – Suplemento Natural para Alívio dos Sintomas da Menopausa (60 Cápsulas)",
      price: 97.90,
      originalPrice: 137.90,
      image: "/lovable-uploads/amora-miura-1.webp",
      category: "Skincare",
      images: [
        "/lovable-uploads/amora-miura-1.webp",
        "/lovable-uploads/amora-miura-2.webp",
        "/lovable-uploads/amora-miura-3.webp",
        "/lovable-uploads/amora-miura-4.webp",
        "/lovable-uploads/amora-miura-5.webp"
      ],
      rating: 4.7,
      reviews: 712,
      badge: "Alívio Natural da Menopausa",
      badgeColor: "bg-purple-500",
      slug: "amora-miura",
      minicopy: "🍇 Equilíbrio e bem-estar sem hormônios",
      customButtonText: "Aliviar Meus Sintomas Já",
      extraInfo: "💰 Kit 3 meses por R$187,90 (economize ainda mais)",
      weeklySales: 80
    },
    {
      id: 4,
      name: "Progressiva Vegetal Havana (500ml) – Alisamento Profissional Sem Formol e Sem Cheiro",
      price: 150.00,
      originalPrice: 197.00,
      image: "/lovable-uploads/progressiva-vegetal-1.webp",
      category: "Cabelos",
      images: [
        "/lovable-uploads/progressiva-vegetal-1.webp",
        "/lovable-uploads/progressiva-vegetal-2.webp",
        "/lovable-uploads/progressiva-vegetal-3.webp",
        "/lovable-uploads/progressiva-vegetal-4.webp",
        "/lovable-uploads/progressiva-vegetal-5.webp"
      ],
      rating: 4.6,
      reviews: 514,
      badge: "Sem Formol",
      badgeColor: "bg-green-500",
      slug: "progressiva-vegetal",
      weeklySales: 40
    },
    {
      id: 10,
      name: "Pente Alisador Portátil 2 em 1 – Alisa e Modela Sem Fio (Bivolt Recarregável)",
      price: 109.99,
      originalPrice: 159.90,
      image: "/lovable-uploads/pente-alisador-1.webp",
      category: "Cabelos",
      images: [
        "/lovable-uploads/pente-alisador-1.webp",
        "/lovable-uploads/pente-alisador-2.webp",
        "/lovable-uploads/pente-alisador-3.webp",
        "/lovable-uploads/pente-alisador-4.webp",
        "/lovable-uploads/pente-alisador-5.webp"
      ],
      rating: 4.5,
      reviews: 492,
      badge: "Queridinho",
      badgeColor: "bg-purple-400",
      slug: "pente-alisador-portatil",
      weeklySales: 20
    }
  ], []);

  const getProductById = (id: number) => {
    return products.find(product => product.id === id);
  };

  const getProductBySlug = (slug: string) => {
    return products.find(product => product.slug === slug);
  };

  const getFeaturedProducts = (count: number = 3) => {
    return products.slice(0, count);
  };

  return {
    products,
    getProductById,
    getProductBySlug,
    getFeaturedProducts
  };
};