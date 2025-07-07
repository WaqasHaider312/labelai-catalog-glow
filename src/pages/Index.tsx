
import { useState, useEffect } from 'react';
import WhatsAppChat from '../components/WhatsAppChat';
import CatalogPreview from '../components/CatalogPreview';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const startDemo = () => {
    setCurrentScene(1);
    setIsAutoPlaying(true);
  };

  const resetDemo = () => {
    setCurrentScene(0);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (isAutoPlaying && currentScene < 4) {
      const timer = setTimeout(() => {
        setCurrentScene(prev => prev + 1);
      }, currentScene === 2 ? 3000 : 4000); // Longer pause for loading scene
      
      return () => clearTimeout(timer);
    }
  }, [currentScene, isAutoPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-teal-50">
      {/* Hero Section */}
      {currentScene === 0 && (
        <div className="min-h-screen flex items-center justify-center p-6 animate-fade-in">
          <div className="text-center max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Demo</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-600 via-orange-500 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight">
              LabelAI
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light leading-relaxed">
              Transform your products into beautiful catalogs
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Watch how Sara from Lahore creates a professional catalog for her handmade business in seconds
            </p>
            
            <Button 
              onClick={startDemo}
              className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Watch Demo ✨
            </Button>
          </div>
        </div>
      )}

      {/* Chat Demo */}
      {currentScene >= 1 && currentScene <= 3 && (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <WhatsAppChat scene={currentScene} />
          </div>
        </div>
      )}

      {/* Catalog Preview */}
      {currentScene === 4 && (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <CatalogPreview onReset={resetDemo} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
