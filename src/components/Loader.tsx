
import React from 'react';
import { Heart } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Heart className="text-pink-500 animate-pulse" size={48} />
          <div className="absolute inset-0 heart-animation"></div>
        </div>
        <p className="mt-4 text-purple-600 font-medium">Loading amazing things...</p>
        <div className="mt-4 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
