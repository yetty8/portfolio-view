// src/components/Image.jsx
import { useState } from 'react';

export default function Image({ 
  src, 
  srcSet,        // For responsive images
  sizes,         // For responsive images
  alt, 
  className = '', 
  width,         // For layout shift prevention
  height,        // For layout shift prevention
  ...props 
}) {
  const [loaded, setLoaded] = useState(false);

  // Add error handling
  const [error, setError] = useState(false);

  // Fallback image in case of error
  const handleError = () => {
    setError(true);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined
      }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
      )}
      
      <img
        src={error ? '/images/placeholder.jpg' : src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}