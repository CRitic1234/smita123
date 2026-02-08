import React, { useEffect, useRef, useState } from 'react';

interface MediaSectionProps {
  title?: string;
  text?: string;
  text2?: string;
  text3?: string;
  mediaType?: 'image' | 'video' | 'grid';
  mediaSrc?: string | string[];
  layout?: 'polaroid' | 'full' | 'grid' | 'cinematic' | 'portrait';
}

const MediaSection: React.FC<MediaSectionProps> = ({
  title,
  text,
  text2,
  text3,
  mediaType,
  mediaSrc,
  layout,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMediaError = () => {
    setMediaError(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-5xl mx-auto px-6 py-12 md:py-20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Title */}
      {title && (
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal mb-8 text-center">
          {title}
        </h2>
      )}

      {/* Text Content */}
      {text && (
        <div className="prose prose-lg md:prose-xl max-w-none mb-12 text-charcoal space-y-6">
          <p className="leading-relaxed">{text}</p>
          {text2 && <p className="leading-relaxed font-medium">{text2}</p>}
          {text3 && <p className="leading-relaxed">{text3}</p>}
        </div>
      )}

      {/* Media Content */}
      {mediaType && mediaSrc && (
        <div className={`mt-8 ${isVisible ? 'animate-slide-up' : ''}`}>
          {/* Polaroid Image */}
          {mediaType === 'image' && layout === 'polaroid' && typeof mediaSrc === 'string' && (
            <div className="flex justify-center">
              <div className="bg-white p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 rotate-2 max-w-lg">
                {mediaError ? (
                  <div className="w-full h-96 bg-blush flex items-center justify-center text-rosegold">
                    <p className="text-center px-4">📸 Add your photo here<br/><span className="text-sm">{mediaSrc}</span></p>
                  </div>
                ) : (
                  <img
                    src={mediaSrc}
                    alt="Memory"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    onError={handleMediaError}
                  />
                )}
                <div className="h-16 bg-white"></div>
              </div>
            </div>
          )}

          {/* Full Width Video */}
          {mediaType === 'video' && layout === 'full' && typeof mediaSrc === 'string' && (
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {mediaError ? (
                <div className="w-full h-96 bg-blush flex items-center justify-center text-rosegold">
                  <p className="text-center px-4">🎥 Add your video here<br/><span className="text-sm">{mediaSrc}</span></p>
                </div>
              ) : (
                <video
                  src={mediaSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  onError={handleMediaError}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* Image Grid */}
          {mediaType === 'grid' && layout === 'grid' && Array.isArray(mediaSrc) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mediaSrc.map((src, index) => (
                <ImageGridItem key={index} src={src} index={index} />
              ))}
            </div>
          )}

          {/* Cinematic Video */}
          {mediaType === 'video' && layout === 'cinematic' && typeof mediaSrc === 'string' && (
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              {mediaError ? (
                <div className="w-full h-96 bg-blush flex items-center justify-center text-rosegold">
                  <p className="text-center px-4">🎬 Add your cinematic video here<br/><span className="text-sm">{mediaSrc}</span></p>
                </div>
              ) : (
                <video
                  src={mediaSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  onError={handleMediaError}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* Portrait Image */}
          {mediaType === 'image' && layout === 'portrait' && typeof mediaSrc === 'string' && (
            <div className="flex justify-center my-12">
              <div className="bg-white p-6 shadow-2xl rounded-lg max-w-md transform hover:scale-105 transition-transform duration-300">
                {mediaError ? (
                  <div className="w-full h-96 bg-blush flex items-center justify-center text-rosegold">
                    <p className="text-center px-4">💝 Add Smita's portrait here<br/><span className="text-sm">{mediaSrc}</span></p>
                  </div>
                ) : (
                  <img
                    src={mediaSrc}
                    alt="Portrait"
                    className="w-full h-auto object-cover rounded"
                    loading="lazy"
                    onError={handleMediaError}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

// Helper component for grid images with individual error handling
const ImageGridItem: React.FC<{ src: string; index: number }> = ({ src, index }) => {
  const [error, setError] = useState(false);
  
  return (
    <div
      className={`bg-white p-3 shadow-xl transform hover:scale-105 transition-all duration-300 ${
        index === 0 ? '-rotate-2' : index === 1 ? 'rotate-1' : '-rotate-1'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {error ? (
        <div className="w-full h-64 bg-blush flex items-center justify-center text-rosegold text-sm">
          <p className="text-center px-2">📷 Photo {index + 1}<br/><span className="text-xs">{src}</span></p>
        </div>
      ) : (
        <img
          src={src}
          alt={`Memory ${index + 1}`}
          className="w-full h-64 object-cover"
          loading="lazy"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default MediaSection;
