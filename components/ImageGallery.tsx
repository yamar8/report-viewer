
import React from 'react';
import type { ImageData } from '../types';

interface ImageGalleryProps {
  images: ImageData[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img src={image.src} alt={image.alt} className="w-full h-56 object-cover" />
          {image.caption && (
            <div className="p-4">
              <p className="text-sm text-gray-700 text-center font-medium">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
