import { useMemo } from 'react';
import { Product } from '@/contexts/CartContext';

export const useProducts = () => {
  const products: Product[] = useMemo(() => [
    {
      id: 12,
      name: "Kit S.O.S Crescimento Capilar – Tratamento Antiqueda que Acelera o Crescimento dos Fios",
      price: 179.00,
      originalPrice: 229.00,
      image: "/lovable-uploads/kit-sos-crescimento-new.png",
      category: "Cabelos",
      images: [
        "/lovable-uploads/kit-sos-crescimento-new.png",
        "/lovable-uploads/07046e8b-1f36-4709-a349-ccb29661a667.webp",
        "/lovable-uploads/3cd0e289-6d5d-48cd-a84c-0a55da8be7c9.webp",
        "/lovable-uploads/4af7aa72-7478-45bf-9ba2-31819c123c6e.webp",
        "/lovable-uploads/dcb39001-c099-4e4e-868d-9694ef97cdf3.webp"
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
      image: "/lovable-uploads/rosa-amazonica-new.png",
      category: "Skincare",
      images: [
        "/lovable-uploads/rosa-amazonica-new.png",
        "/lovable-uploads/301de960-2270-4dc7-9d66-87a76c4ac564.webp",
        "/lovable-uploads/89a41d0a-e561-44ec-bb0f-42331d65a98a.webp",
        "/lovable-uploads/445f51d4-0392-493c-9974-cb366278ffe9.webp",
        "/lovable-uploads/9c7bcf2a-5924-4122-9f8a-2698dd13022b.webp"
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
      image: "/lovable-uploads/karseell-collagen-new.png",
      category: "Cabelos",
      images: [
        "/lovable-uploads/karseell-collagen-new.png",
        "/lovable-uploads/4db1b939-ad5a-41e2-81c2-1a4efb1f5447.webp",
        "/lovable-uploads/b06295ff-e7b1-4b64-9deb-08579e11f2f8.webp",
        "/lovable-uploads/5ee8a1ce-0424-42db-94df-4b06a0742531.webp",
        "/lovable-uploads/05e00818-91f9-4cd0-932a-07b948dce20f.webp",
        "/lovable-uploads/74dcd28a-406e-40ec-82ba-eaae18086424.webp",
        "/lovable-uploads/2cdc1769-b03e-422b-972b-4bf9f20aa107.webp",
        "/lovable-uploads/3094b33f-72e9-403d-b61f-6c3731c696ee.webp",
        "/lovable-uploads/b3c0b236-bad7-4c78-ac7f-5cfcbb61453b.webp"
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
      image: "/lovable-uploads/amora-miura-vit-new.png",
      category: "Skincare",
      images: [
        "/lovable-uploads/amora-miura-vit-new.png",
        "/lovable-uploads/f4c6ee76-771b-4d92-9e24-063a7ee6cc1d.webp",
        "/lovable-uploads/85c63495-c156-4d25-aa5d-931814d8cb99.webp"
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
      image: "/lovable-uploads/progressiva-vegetal-havana-new.png",
      category: "Cabelos",
      images: [
        "/lovable-uploads/progressiva-vegetal-havana-new.png",
        "/lovable-uploads/e305af6d-f14d-4b93-bc0e-9881a85b906e.webp",
        "/lovable-uploads/dd7305ac-c697-45fe-a913-f1f1b5ccaea6.webp",
        "/lovable-uploads/31651d9f-c5ca-49e0-939a-c069b7808002.webp",
        "/lovable-uploads/7ba57dbe-6727-4638-a387-220637b0f3a3.webp"
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
      image: "/lovable-uploads/pente-alisador-new.png",
      category: "Cabelos",
      images: [
        "/lovable-uploads/pente-alisador-new.png",
        "/lovable-uploads/95b2c441-1687-4339-94fb-25163a088821.webp",
        "/lovable-uploads/b657aab5-ac9c-428a-bd80-1f9f389fb57d.webp",
        "/lovable-uploads/d813c7be-668c-4b10-a217-535eb8483752.webp",
        "/lovable-uploads/abe0f5f7-03f5-42b9-b26a-3dc77d8c8253.webp"
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