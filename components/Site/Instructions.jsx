import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const SwipeInstructionOverlay = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Auto-dismiss the instruction after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      dismissInstruction();
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const dismissInstruction = () => {
    setFadeOut(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-40 flex items-center justify-center pointer-events-none transition-opacity duration-1000 
        ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none"></div>
      
      <div className="relative bg-black/70 border border-indigo-500/30 rounded-xl p-6 max-w-md mx-4 shadow-xl pointer-events-auto">
        <button 
          onClick={dismissInstruction} 
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="bg-indigo-500/20 p-1 rounded">
            <ChevronLeft className="h-5 w-5 text-indigo-300" />
          </span>
          Navigation Instructions
          <span className="bg-indigo-500/20 p-1 rounded">
            <ChevronRight className="h-5 w-5 text-indigo-300" />
          </span>
        </h3>
        
        <div className="text-gray-200 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex text-indigo-300">
              <ChevronLeft className="h-5 w-5" />
              <ChevronRight className="h-5 w-5" />
            </div>
            <p>Swipe left or right to navigate through portfolio sections</p>
          </div>
          
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span className="w-2 h-2 rounded-full bg-gray-600"></span>
              <span className="w-2 h-2 rounded-full bg-gray-600"></span>
              <span className="w-2 h-2 rounded-full bg-gray-600"></span>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 text-center mt-2">
            You can also use the navigation tabs at the bottom
          </p>
        </div>
        
        <button 
          onClick={dismissInstruction}
          className="mt-6 w-full py-2 bg-indigo-600/80 hover:bg-indigo-700 text-white rounded transition-colors duration-300"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default SwipeInstructionOverlay;