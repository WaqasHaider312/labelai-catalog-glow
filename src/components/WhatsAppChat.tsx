
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface WhatsAppChatProps {
  scene: number;
}

const WhatsAppChat = ({ scene }: WhatsAppChatProps) => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    if (scene === 1) {
      // Show user messages one by one
      const timer1 = setTimeout(() => setVisibleMessages(1), 500);
      const timer2 = setTimeout(() => setVisibleMessages(2), 1500);
      const timer3 = setTimeout(() => setVisibleMessages(3), 2500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else if (scene === 2) {
      setVisibleMessages(4);
      const timer = setTimeout(() => setVisibleMessages(5), 1000);
      return () => clearTimeout(timer);
    } else if (scene === 3) {
      setVisibleMessages(6);
    }
  }, [scene]);

  const messages = [
    {
      id: 1,
      type: 'user',
      content: {
        image: '/lovable-uploads/c36d83c1-039a-4eb3-abb7-2a82723105bd.png',
        text: 'Kantha Carryall Bag — Rs.1200 — One-of-a-kind jet-setting bag with front pocket'
      },
      time: '2:14 PM'
    },
    {
      id: 2,
      type: 'user',
      content: {
        image: '/lovable-uploads/a83672d9-eebc-455e-acf7-fa7d20e39c9e.png',
        text: 'Decorative Cushion Cover — Rs.950 — Cotton cushion cover, perfect for living spaces'
      },
      time: '2:15 PM'
    },
    {
      id: 3,
      type: 'user',
      content: {
        image: '/lovable-uploads/c1f8b8d2-a290-4b5e-804e-a2f42e66b0c2.png',
        text: 'Handcrafted Ceramic Mug — Rs.850 — Hand-thrown speckled glazed mug, holds 12 oz'
      },
      time: '2:16 PM'
    },
    {
      id: 4,
      type: 'bot',
      content: {
        text: 'Got it! ✨\nI\'m designing your product catalog now...'
      },
      time: '2:16 PM'
    },
    {
      id: 5,
      type: 'bot',
      content: {
        text: 'typing',
        isTyping: true
      },
      time: '2:17 PM'
    },
    {
      id: 6,
      type: 'bot',
      content: {
        text: '✅ Catalog ready!\nTap to download PDF or share link.\nYou look professional now 💼🌟'
      },
      time: '2:17 PM'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
      {/* WhatsApp Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-teal-700 text-white">LA</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">LabelAI</h3>
          <p className="text-xs text-teal-100">Online</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 h-96 overflow-y-auto bg-gray-50 space-y-3">
        {messages.slice(0, visibleMessages).map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div
              className={`max-w-xs p-3 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
              }`}
            >
              {message.content.image && (
                <div className="mb-2">
                  <img
                    src={message.content.image}
                    alt="Product"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
              )}
              
              {message.content.isTyping ? (
                <div className="flex gap-1 py-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              ) : (
                <p className="text-sm whitespace-pre-line leading-relaxed">
                  {message.content.text}
                </p>
              )}
              
              <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-teal-100' : 'text-gray-500'}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500 text-sm">
            Type a message...
          </div>
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">➤</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
