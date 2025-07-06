import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const [gifLoaded, setGifLoaded] = React.useState(false);
  const [gifError, setGifError] = React.useState(false);

  const handleGifLoad = () => {
    setGifLoaded(true);
    setGifError(false);
  };

  const handleGifError = () => {
    setGifError(true);
    setGifLoaded(false);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen w-full ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        {!gifError ? (
          <img 
            src="/loading.gif" 
            alt="Loading..." 
            className="w-full h-full object-contain"
            onLoad={handleGifLoad}
            onError={handleGifError}
          />
        ) : (
          // Fallback spinner when GIF fails to load
          <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin`}></div>
        )}
      </div>
    </div>
  );
};

export default Loading; 