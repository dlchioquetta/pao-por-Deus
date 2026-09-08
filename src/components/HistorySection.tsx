import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/manifestoData';
import { BookOpen, ChevronRight } from 'lucide-react';
import { SacredQuatrefoil, SacredDivider, CornerFlourish } from './SacredOrnaments';

export const HistorySection: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1, 9]);

  const toggleExpand = (idx: number) => {
    setExpandedIndices(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleToggleAll = () => {
    if (expandedIndices.length === TIMELINE_DATA.length) {
      setExpandedIndices([]);
    } else {
      setExpandedIndices(TIMELINE_DATA.map((_, i) => i));
    }
  };

  const formatYearLabel = (year: string) => {
    if (year.startsWith('Século') || year.startsWith('Anos') || year === 'Hoje') {
      return year;
    }
    return `Ano ${year}`;
  };

  return (
    <section id="genealogia" className="py-14 sm:py-24 md:py-30 bg-sacred-stone border-b border-[#b89047]/20 relative">
      {/* Background Architectural Symmetry & Subtle Light */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-4xl mx-auto h-full border-x border-[#b89047]/20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-cinzel text-[#8a6825] tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3">
            <SacredQuatrefoil size={12} className="text-[#b89047]" />
            <span>Genealogia Histórica</span>
            <SacredQuatrefoil size={12} className="text-[#b89047]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#2c221c] tracking-tight">
            Como Essa História Chegou Até Nós
          </h2>

          <SacredDivider className="my-4 sm:my-5" />

          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#46382f] max-w-2xl mx-auto leading-relaxed md:leading-loose">
            Do pão das almas e da caridade monástica ao comércio moderno — 
            compreenda a linhagem histórica do sufrágio das almas e como restaurar essa tradição viva no seu lar.
          </p>

          <div className="mt-5 sm:mt-6 flex justify-center">
            <button
              onClick={handleToggleAll}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 border border-[#b89047]/30 bg-[#faf7f2] hover:bg-[#fdfbf7] text-[11px] sm:text-xs font-cinzel text-[#8a6825] hover:text-[#2c221c] transition-colors cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
            >
              <BookOpen className="w-3.5 h-3.5 stroke-[1.4]" />
              <span>
                {expandedIndices.length === TIMELINE_DATA.length 
                  ? 'Recolher Explicações' 
                  : 'Expandir Todos os Fatos'}
              </span>
            </button>
          </div>
        </div>

        {/* Noble Timeline Container */}
        <div className="relative border-l border-[#b89047]/35 ml-3 sm:ml-10 pl-4 sm:pl-10 space-y-6 sm:space-y-10">
          {TIMELINE_DATA.map((item, index) => {
            const isExpanded = expandedIndices.includes(index);
            const isLatest = index === TIMELINE_DATA.length - 1;

            return (
              <div 
                key={item.year + index}
                id={`genealogia-item-${index}`}
                className="relative group transition-all"
              >
                {/* Refined Roman/Crest Marker with Sacred Cross */}
                <div className={`absolute -left-[27px] sm:-left-[53px] top-0 w-6 h-6 sm:w-8 sm:h-8 border ${
                  isLatest ? 'border-[#b89047] bg-[#2c221c] text-[#dfc89d]' : 'border-[#b89047]/50 bg-[#f4efe7] text-[#8a6825]'
                } font-cinzel text-[11px] sm:text-sm flex items-center justify-center shadow-2xs group-hover:border-[#b89047] group-hover:bg-[#2c221c] group-hover:text-[#dfc89d] transition-all select-none`}>
                  {isLatest ? <SacredQuatrefoil size={11} className="text-[#dfc89d]" /> : '†'}
                </div>

                <div className={`border ${
                  isLatest ? 'border-[#b89047]/60 bg-[#fdfbf7]' : 'border-[#b89047]/25 bg-[#faf7f2]/90'
                } p-4 sm:p-6 md:p-7 shadow-2xs transition-all relative`}>
                  {isLatest && <CornerFlourish position="top-right" />}

                  {/* Epoch & Stately Title */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                      <span className="font-cinzel text-xs sm:text-sm tracking-[0.14em] uppercase text-[#8a6825] font-semibold">
                        {formatYearLabel(item.year)}
                      </span>
                      <span className="text-[#b89047]/40 text-xs hidden sm:inline">/</span>
                      <h3 className="font-cinzel text-base sm:text-lg md:text-xl font-normal text-[#2c221c]">
                        {item.title}
                      </h3>
                    </div>

                    {isLatest && (
                      <span className="inline-block self-start sm:self-auto px-2 py-0.5 border border-[#b89047]/40 text-[9px] sm:text-[10px] font-cinzel uppercase tracking-widest text-[#8a6825] bg-[#faf7f2]">
                        Hoje • Seu Lar
                      </span>
                    )}
                  </div>

                  {/* O Fato - Main Narrative */}
                  <div className="space-y-1.5">
                    <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#46382f] leading-relaxed md:leading-loose">
                      <strong className="font-cinzel text-[11px] sm:text-xs uppercase tracking-wider text-[#8a6825] font-semibold mr-1.5 not-italic">
                        O Fato:
                      </strong>
                      {item.description}
                    </p>
                  </div>

                  {/* Archival Theological Excerpt Toggle */}
                  {item.theologicalContext && (
                    <div className="mt-3 pt-2 border-t border-[#b89047]/15">
                      <button
                        onClick={() => toggleExpand(index)}
                        aria-expanded={isExpanded}
                        className="inline-flex items-center gap-1.5 py-1.5 min-h-[38px] text-[11px] sm:text-xs font-cinzel text-[#8a6825] hover:text-[#2c221c] tracking-wider uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 stroke-[1.4]" />
                        <span>{isExpanded ? 'Recolher Significado' : 'Significado Histórico'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-2 p-3 sm:p-4 bg-[#f4efe7]/85 border-l-2 border-[#b89047] text-sm sm:text-base md:text-lg font-cormorant italic text-[#46382f] leading-relaxed md:leading-loose animate-fadeIn">
                          <strong className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8a6825] font-semibold not-italic block mb-1">
                            O Significado:
                          </strong>
                          "{item.theologicalContext}"
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Noble Callout */}
        <div className="mt-10 sm:mt-16 p-5 sm:p-8 border border-[#b89047]/35 bg-[#faf7f2] text-center max-w-2xl mx-auto shadow-2xs relative">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />

          <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-[#2c221c] leading-relaxed md:leading-loose">
            "A chama da tradição nunca se apagou. Ela só estava esperando por você e sua família 
            para voltar a iluminar o mundo com amor e fé."
          </p>
          <span className="block mt-2.5 sm:mt-3.5 text-[10px] sm:text-[11px] font-cinzel text-[#8a6825] tracking-[0.16em] sm:tracking-[0.2em] uppercase font-semibold">
            — O Resgate das Tradições da Família
          </span>
        </div>
      </div>
    </section>
  );
};
