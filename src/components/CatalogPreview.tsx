
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CatalogPreviewProps {
  onReset: () => void;
}

const CatalogPreview = ({ onReset }: CatalogPreviewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 500);
    const timer2 = setTimeout(() => setShowFinalMessage(true), 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: 'Handmade Tote Bag',
      price: 'Rs. 1,200',
      description: 'Eco-friendly, cotton-based, washable',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Embroidered Cushion',
      price: 'Rs. 950',
      description: 'Soft, pastel colors, great for sofas',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Clay Coffee Mug',
      price: 'Rs. 850',
      description: 'Handmade, microwave safe, matte finish',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="text-center">
      {/* Catalog */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white px-6 py-2 rounded-full mb-4">
              <span className="text-lg font-semibold">Sara Handmade</span>
              <span className="text-sm opacity-90">✨ Lahore</span>
            </div>
            <p className="text-gray-600">Handcrafted with love, designed for life</p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                📱 WhatsApp: +92-300-1234567
              </div>
              <div className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                📷 Instagram: @sarahandmade
              </div>
            </div>
            <p className="text-xs text-gray-400">Catalog created with LabelAI ✨</p>
          </div>
        </div>
      </div>

      {/* Final Message */}
      {showFinalMessage && (
        <div className="mt-12 animate-fade-in">
          <div className="bg-gradient-to-r from-teal-600 via-orange-500 to-pink-600 bg-clip-text text-transparent">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              LabelAI
            </h2>
            <p className="text-xl md:text-2xl font-light mb-8">
              Instant catalog. Instant confidence.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button
              onClick={onReset}
              className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-6 py-3 rounded-full"
            >
              Watch Again
            </Button>
            <Button
              variant="outline"
              className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPreview;
