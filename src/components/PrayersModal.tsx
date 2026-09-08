import React, { useState, useEffect } from 'react';
import { TRADITIONAL_PRAYERS } from '../data/manifestoData';
import { X, BookOpen, Copy, Check } from 'lucide-react';
import { SacredQuatrefoil, CornerFlourish } from './SacredOrnaments';

interface PrayersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrayersModal: React.FC<PrayersModalProps> = ({ isOpen, onClose }) => {
  const [selectedPrayerId, setSelectedPrayerId] = useState<string>('requiem');
  const [copied, setCopied] = useState(false);

  // Close on Escape key and lock background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPrayer = TRADITIONAL_PRAYERS.find((p) => p.id === selectedPrayerId) || TRADITIONAL_PRAYERS[0];

  const handleCopy = () => {
    const text = `${currentPrayer.title} (${currentPrayer.subtitle})\n\n[Em Português]\n${currentPrayer.portugueseText}\n\n${currentPrayer.latinText ? `[Em Latim]\n${currentPrayer.latinText}\n\n` : ''}[Como rezar]\n${currentPrayer.rubric}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-[#2c221c]/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="presentation"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#faf7f2] border border-[#b89047]/50 shadow-2xl flex flex-col overflow-hidden text-[#2c221c]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="prayers-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <CornerFlourish position="top-left" />
        <CornerFlourish position="bottom-right" />

        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 border-b border-[#b89047]/20 bg-[#f4efe7] flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 sm:w-9 sm:h-9 border border-[#b89047]/40 bg-[#faf7f2] text-[#8a6825] flex items-center justify-center shadow-2xs shrink-0">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.4]" />
            </div>
            <div className="min-w-0">
              <h3 id="prayers-modal-title" className="font-cinzel text-sm sm:text-lg font-normal text-[#2c221c] tracking-tight truncate">
                Orações Tradicionais
              </h3>
              <p className="text-[11px] sm:text-xs font-cormorant italic text-[#6a5649] truncate">
                Preces pelas Almas do Purgatório
              </p>
            </div>
          </div>

          <button
            id="close-prayers-modal"
            onClick={onClose}
            aria-label="Fechar modal de orações"
            className="p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center text-[#6a5649] hover:text-[#2c221c] border border-[#b89047]/30 hover:border-[#b89047] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#b89047]/20 bg-[#f4efe7] px-2 sm:px-4 overflow-x-auto">
          {TRADITIONAL_PRAYERS.map((prayer) => (
            <button
              key={prayer.id}
              onClick={() => setSelectedPrayerId(prayer.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 min-h-[40px] sm:min-h-[44px] flex items-center font-cinzel text-[10px] sm:text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 ${
                selectedPrayerId === prayer.id
                  ? 'border-[#8a6825] text-[#2c221c] font-semibold bg-[#faf7f2]'
                  : 'border-transparent text-[#6a5649] hover:text-[#2c221c]'
              }`}
            >
              {prayer.title}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-3.5 sm:p-7 overflow-y-auto space-y-4 bg-[#fdfbf7] flex-1">
          {/* Subtitle & Rubric */}
          <div className="p-3 sm:p-4 bg-[#faf7f2] border-l-2 border-[#b89047]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-cinzel text-sm sm:text-base text-[#2c221c] font-normal">
                {currentPrayer.title}
              </h4>
              <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-wider text-[#8a6825]">
                {currentPrayer.subtitle}
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm font-cormorant italic text-[#6a5649]">
              Como rezar: {currentPrayer.rubric}
            </p>
          </div>

          {/* Bilingual Prayer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
            {/* Portuguese */}
            <div className="bg-[#faf7f2] p-3.5 sm:p-5 border border-[#b89047]/20">
              <span className="text-[10px] font-cinzel text-[#8a6825] uppercase tracking-wider block mb-2 font-semibold flex items-center gap-1">
                <SacredQuatrefoil size={11} className="text-[#8a6825]" />
                <span>Em Português</span>
              </span>
              <div className="font-cormorant text-base sm:text-lg text-[#2c221c] leading-relaxed md:leading-loose whitespace-pre-line">
                {currentPrayer.portugueseText}
              </div>
            </div>

            {/* Latin */}
            {currentPrayer.latinText && (
              <div className="bg-[#faf7f2] p-3.5 sm:p-5 border border-[#b89047]/20">
                <span className="text-[10px] font-cinzel text-[#8a6825] uppercase tracking-wider block mb-2 font-semibold flex items-center gap-1">
                  <SacredQuatrefoil size={11} className="text-[#8a6825]" />
                  <span>Em Latim (Tradição)</span>
                </span>
                <div className="font-cormorant text-base sm:text-lg text-[#46382f] italic leading-relaxed md:leading-loose whitespace-pre-line">
                  {currentPrayer.latinText}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-2.5 sm:p-4 border-t border-[#b89047]/20 bg-[#f4efe7] flex items-center justify-between gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[40px] border border-[#b89047]/40 bg-[#faf7f2] text-xs font-cinzel text-[#5d4a3d] hover:text-[#2c221c] hover:border-[#b89047] transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5 text-[#8a6825]" />}
            <span>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 sm:px-5 py-2 min-h-[40px] flex items-center justify-center bg-[#2c221c] hover:bg-[#3d2f26] text-[#faf7f2] font-cinzel text-xs font-semibold tracking-wider border border-[#b89047]/40 transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
