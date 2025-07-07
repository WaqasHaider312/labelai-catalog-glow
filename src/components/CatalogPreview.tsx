
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  fullDescription: string;
  image: string;
  specifications: string[];
}

interface CatalogPreviewProps {
  onReset: () => void;
}

const CatalogPreview = ({ onReset }: CatalogPreviewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 500);
    const timer2 = setTimeout(() => setShowFinalMessage(true), 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: 'Kantha Carryall Bag',
      price: 'Rs. 1,200',
      description: 'One-of-a-kind jet-setting bag with front pocket',
      fullDescription: 'This one-of-a-kind Kantha Carryall Bag is your ideal jet-setting bag! The front pocket is great for swiping through your phone in an instant, and the side pockets are perfect for stashing your water bottle, keys, and other essentials. Crafted from repurposed Kantha quilts and lined with organic cotton, each bag is completely one-of-a-kind and colors vary.',
      image: '/lovable-uploads/c36d83c1-039a-4eb3-abb7-2a82723105bd.png',
      specifications: [
        'Sustainably handcrafted by artisans in Bangladesh',
        'Made from repurposed Kantha quilts',
        'Lined with organic cotton',
        'Front pocket for phone access',
        'Side pockets for essentials',
        'Each piece is unique - colors vary'
      ]
    },
    {
      id: 2,
      name: 'Decorative Cushion Cover',
      price: 'Rs. 950',
      description: 'Cotton cushion cover, perfect for living spaces',
      fullDescription: 'Beautiful decorative cushion cover that looks stunning in living Room, Bedroom, Kids Room, Home Office, Dining Room, Sofa & Chair and will make you feel comfortable.',
      image: '/lovable-uploads/a83672d9-eebc-455e-acf7-fa7d20e39c9e.png',
      specifications: [
        'Size: 18″ x 18″ (45 x 45 cm)',
        'Cover material: Cotton',
        'Washing Instruction: Wash with Cold Water',
        'Decorative For Couch Throw Pillow Case',
        'Perfect for multiple room settings',
        'Comfortable and stylish design'
      ]
    },
    {
      id: 3,
      name: 'Handcrafted Ceramic Mug',
      price: 'Rs. 850',
      description: 'Hand-thrown speckled glazed mug, holds 12 oz',
      fullDescription: 'This fabulous hand-thrown mug allows the normal moments in life to be full of beauty and craft. Enjoy sipping your daily coffee or tea from this speckled white and speckled blue smoke glazed mug. A thin unglazed band wraps around the exterior of mug revealing its clay origins. Holds around 12 oz.',
      image: '/lovable-uploads/c1f8b8d2-a290-4b5e-804e-a2f42e66b0c2.png',
      specifications: [
        'Capacity: 12 oz',
        'Dimensions: 3"x3"',
        'Food Safe',
        'Oven Safe',
        'Microwave Safe',
        'Dishwasher Safe',
        'Each piece is handcrafted and unique',
        'Glazes may vary slightly from photo'
      ]
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
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedProduct(product)}
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
                  <p className="text-xs text-teal-600 mt-2 font-medium">Click for details →</p>
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

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent mb-4">
                    {selectedProduct.price}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProduct.fullDescription}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h3>
                    <ul className="space-y-1">
                      {selectedProduct.specifications.map((spec, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                    Contact on WhatsApp
                  </Button>
                  <Button variant="outline" className="flex-1 border-teal-500 text-teal-600 hover:bg-teal-50">
                    Share Product
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
