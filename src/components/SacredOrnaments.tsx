import React from 'react';

/**
 * Elementos ornamentais inspirados na arquitetura sacra católica tradicional
 * (catedrais góticas, mosteiros românicos, arabescos e rosáceas).
 * Desenhados com traços finos e delicados (stroke 1px a 1.2px) para requinte sutil.
 */

// Quadrifólio Gótico (Rosácea clássica de basílica - símbolo de harmonia e dos 4 Evangelistas)
export const SacredQuatrefoil: React.FC<{ className?: string; size?: number }> = ({ 
  className = "text-[#b89047]", 
  size = 20 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central ring */}
    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1" />
    {/* 4 Gothic lobes */}
    <path 
      d="M12 4.5C13.8 4.5 15.2 5.9 15.2 7.7C15.2 8.7 14.8 9.5 14.1 10.1C14.7 9.4 15.6 9 16.5 9C18.3 9 19.7 10.4 19.7 12.2C19.7 14 18.3 15.4 16.5 15.4C15.6 15.4 14.7 15 14.1 14.3C14.8 14.9 15.2 15.7 15.2 16.7C15.2 18.5 13.8 19.9 12 19.9C10.2 19.9 8.8 18.5 8.8 16.7C8.8 15.7 9.2 14.9 9.9 14.3C9.3 15 8.4 15.4 7.5 15.4C5.7 15.4 4.3 14 4.3 12.2C4.3 10.4 5.7 9 7.5 9C8.4 9 9.3 9.4 9.9 10.1C9.2 9.5 8.8 8.7 8.8 7.7C8.8 5.9 10.2 4.5 12 4.5Z" 
      stroke="currentColor" 
      strokeWidth="1.1" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Center tiny cross */}
    <path d="M12 10.5V13.5M10.5 12H13.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Cruz Florida Tradicional (Cruz Patonce clássica dos portais sacros)
export const SacredFlorentineCross: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#b89047]",
  size = 24
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Halo ring */}
    <circle cx="12" cy="11" r="5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 2" opacity="0.6" />
    {/* Vertical shaft with fleur ends */}
    <path d="M12 2.5V21.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M10 3.5C11 2.5 13 2.5 14 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M10 20.5C11 21.5 13 21.5 14 20.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    {/* Horizontal arm with fleur ends */}
    <path d="M3.5 11H20.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M4.5 9C3.5 10 3.5 12 4.5 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M19.5 9C20.5 10 20.5 12 19.5 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Divisor Arquitetônico Sacro com arabesco fino e cruz central
export const SacredDivider: React.FC<{ className?: string; title?: string }> = ({ 
  className = "my-6", 
  title 
}) => (
  <div className={`flex items-center justify-center gap-3 text-[#b89047]/70 ${className}`}>
    <div className="flex items-center gap-1.5">
      <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#b89047]/60" />
      <span className="w-1.5 h-1.5 rotate-45 border border-[#b89047]/60" />
    </div>

    <div className="flex items-center gap-2">
      <SacredQuatrefoil size={15} className="text-[#8a6825]" />
      {title && (
        <span className="font-cinzel text-[10px] sm:text-[11px] text-[#8a6825] uppercase tracking-[0.2em] font-semibold px-1">
          {title}
        </span>
      )}
      <SacredQuatrefoil size={15} className="text-[#8a6825]" />
    </div>

    <div className="flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rotate-45 border border-[#b89047]/60" />
      <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#b89047]/60" />
    </div>
  </div>
);

// Cantoneiras Arquitetônicas (Ornamentos de canto inspirados em missais e retábulos sacros)
export const CornerFlourish: React.FC<{ 
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = "text-[#b89047]/40" }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return 'top-1.5 left-1.5';
      case 'top-right':
        return 'top-1.5 right-1.5 scale-x-[-1]';
      case 'bottom-left':
        return 'bottom-1.5 left-1.5 scale-y-[-1]';
      case 'bottom-right':
        return 'bottom-1.5 right-1.5 scale-[-1]';
    }
  };

  return (
    <div className={`absolute pointer-events-none w-5 h-5 ${getTransform()} ${className}`}>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Fine ornamental corner lines with tiny leaf scroll */}
        <path d="M1 19V6C1 3.2 3.2 1 6 1H19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M4 4C4 5.5 5.5 7 7 7" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
      </svg>
    </div>
  );
};
