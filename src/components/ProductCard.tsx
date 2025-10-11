import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import OptimizedImage from './OptimizedImage';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard = ({ product, priority = false }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = () => {
    navigate(`/produto/${product.slug}`);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="relative overflow-hidden rounded-t-lg flex-shrink-0 bg-white">
        <div className="w-full aspect-square p-3 sm:p-4">
          <OptimizedImage
            src={product.image}
            alt={`${product.name} - Produto de cuidado e beleza`}
            className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-contain"
            width={400}
            height={400}
            priority={priority}
          />
        </div>
        <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>
          {product.badge}
        </Badge>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ShoppingCart className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      <CardContent className="p-4 sm:p-6">
        <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-500 fill-yellow-500 brightness-110 saturate-150'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">
            {product.rating} ({product.reviews})
            {product.id === 6 && <span className="text-green-600 font-medium"> | +500 vendas nesta semana</span>}
            {product.id === 2 && <span className="text-green-600 font-medium"> | +450 vendas nesta semana</span>}
            {product.id === 4 && <span className="text-green-600 font-medium"> | +300 vendas nesta semana</span>}
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-sm sm:text-base text-gray-600 mb-1">
            De <span className="line-through">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span> por
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl sm:text-3xl font-bold text-pink-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xs sm:text-sm text-green-600 font-medium">
              | Economize R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        {/* Dynamic Highlight Messages */}
        {product.id === 12 && (
          <div className="mb-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
            <p className="text-xs sm:text-sm text-gray-800 text-center">
              🎟️ <span className="font-bold">10% OFF</span> usando cupom <span className="font-bold">CLIENTE10</span>
            </p>
          </div>
        )}
        {product.id === 13 && (
          <div className="mb-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
            <p className="text-xs sm:text-sm text-gray-800 text-center">
              ⏳ Oferta Válida <span className="font-bold">APENAS</span> enquanto durar o <span className="font-bold">estoque</span>!
            </p>
          </div>
        )}
        {product.id === 11 && (
          <div className="mb-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
            <p className="text-xs sm:text-sm text-gray-800 text-center">
              🎁 <span className="font-bold">BRINDE EXCLUSIVO:</span> <span className="font-bold">Ganhe</span> 1 Óleo Karseell 50ml!
            </p>
          </div>
        )}
        {product.id === 14 && (
          <div className="mb-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
            <p className="text-xs sm:text-sm text-gray-800 text-center">
              🛍️ <span className="font-bold">OFERTA 2 por 1!</span> Compre 1 e Leve Outro <span className="font-bold">GRÁTIS</span>!
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className={`w-full btn-gradient text-white rounded-full font-semibold text-xs sm:text-sm py-2 sm:py-3 leading-tight`}
        >
          COMPRAR
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;