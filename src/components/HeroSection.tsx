import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SacredQuatrefoil, SacredFlorentineCross, SacredDivider, CornerFlourish } from './SacredOrnaments';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <section 
      id="portico"
      className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-sacred-stone border-b border-[#b89047]/20 py-14 sm:py-24 md:py-32"
    >
      {/* Background Architectural Atmosphere: Natural Sunlight & Gothic Arches */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial illumination suggesting sunlight from a tall arch window */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.9)_0%,rgba(244,239,231,0.5)_50%,transparent_80%)]" />
        
        {/* Architectural arched contour reminiscent of Catholic cathedral portals */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[740px] max-w-[92vw] h-[600px] border border-[#b89047]/20 rounded-arch pointer-events-none" />
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[710px] max-w-[88vw] h-[580px] border border-[#b89047]/10 rounded-arch pointer-events-none" />
        
        {/* Fine vertical symmetry lines */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-8 flex justify-between opacity-15">
          <div className="w-[1px] h-full bg-[#b89047]" />
          <div className="w-[1px] h-full bg-[#b89047]" />
        </div>
      </div>

      {/* Hero Central Sanctuary */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Noble Seal / Crest with Sacred Cross */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 border border-[#b89047]/40 bg-[#f4efe7]/80 backdrop-blur-xs shadow-2xs relative max-w-full">
          <SacredFlorentineCross size={14} className="text-[#b89047] shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-cinzel tracking-[0.14em] sm:tracking-[0.2em] text-[#5d4a3d] uppercase font-semibold truncate">
            Tradição do Pão por Deus • Resgate em Família
          </span>
          <SacredQuatrefoil size={12} className="text-[#8a6825] shrink-0" />
        </div>

        {/* Main Display Headline - Objective & Accessible */}
        <h1 className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#2c221c] tracking-tight leading-[1.2] sm:leading-[1.14] max-w-3xl">
          A tradição mais bonita está de volta à sua porta.
          <span className="block font-cormorant italic font-normal text-[#8a6825] text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2.5 sm:mt-4 tracking-normal">
            Você quer fazer parte dessa história?
          </span>
        </h1>

        {/* Sacred Divider with Ornaments */}
        <SacredDivider className="my-5 sm:my-6" title="Fé • Família • Partilha" />

        {/* Subtitle written in clear, noble, accessible language */}
        <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#46382f] max-w-2xl leading-relaxed md:leading-loose text-center font-normal">
          Antes das máscaras e do comércio de açúcar, a cristandade unia a paróquia e as famílias 
          no santo escambo: pães caseiros simples com a marca da Cruz distribuídos em troca de orações pelas almas do Purgatório.
        </p>

        <p className="mt-2.5 sm:mt-3 font-cormorant italic text-sm sm:text-base md:text-lg text-[#6a5649] max-w-xl leading-relaxed md:leading-loose">
          Chegou o momento de resgatar o Tríduo das Almas através do <strong>Projeto Piloto Paroquial</strong>. 
          Junte-se à mobilização na paróquia ou participe de forma complementar no seu lar.
        </p>

        {/* Action Buttons: Primary (Paróquia) & Secondary (Em Casa) */}
        <div className="mt-8 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
          <a
            id="hero-cta-button"
            href="#chamado"
            onClick={handleCtaClick}
            className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 min-h-[46px] sm:min-h-[48px] bg-[#2c221c] hover:bg-[#3d2f26] text-[#faf7f2] font-cinzel font-semibold text-xs tracking-[0.14em] border border-[#b89047]/60 transition-all duration-300 shadow-sm text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 uppercase"
          >
            <SacredQuatrefoil size={13} className="text-[#dfc89d] shrink-0" />
            <span>PARTICIPAR NA PARÓQUIA</span>
          </a>

          <a
            id="hero-home-secondary-button"
            href="#pacto"
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 min-h-[46px] sm:min-h-[48px] flex items-center justify-center text-xs font-cinzel tracking-[0.12em] text-[#46382f] hover:text-[#2c221c] border border-[#b89047]/35 bg-[#f4efe7]/70 hover:bg-[#faf7f2] transition-colors text-center focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 uppercase"
          >
            Como Fazer em Casa
          </a>

          <a
            id="hero-explore-button"
            href="#contraste"
            className="w-full sm:w-auto px-4 py-3 sm:py-4 min-h-[42px] sm:min-h-[48px] flex items-center justify-center text-xs font-cinzel tracking-[0.12em] text-[#6a5649] hover:text-[#2c221c] transition-colors text-center"
          >
            Ver o que muda
          </a>
        </div>

        {/* Hallmarks of Sacred Order (Three Symmetrical Badges with Sacred Corner Details) */}
        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#b89047]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-3xl text-left">
          <div className="border border-[#b89047]/25 bg-[#fdfbf7]/80 p-3.5 sm:p-4 relative shadow-2xs">
            <CornerFlourish position="top-right" />
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center shrink-0 mt-0.5 text-[#8a6825] font-cinzel text-xs font-semibold">
                I
              </div>
              <div>
                <h4 className="font-cinzel text-xs uppercase tracking-wider text-[#2c221c] font-semibold">
                  O Pão Simples
                </h4>
                <p className="font-cormorant text-sm sm:text-base text-[#6a5649] mt-1 leading-snug">
                  Pãezinhos caseiros simples com a marca da Cruz, feitos em família para partilhar.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#b89047]/25 bg-[#fdfbf7]/80 p-3.5 sm:p-4 relative shadow-2xs">
            <CornerFlourish position="top-right" />
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center shrink-0 mt-0.5 text-[#8a6825] font-cinzel text-xs font-semibold">
                II
              </div>
              <div>
                <h4 className="font-cinzel text-xs uppercase tracking-wider text-[#2c221c] font-semibold">
                  Pelas Almas Padecentes
                </h4>
                <p className="font-cormorant text-sm sm:text-base text-[#6a5649] mt-1 leading-snug">
                  Oração e sufrágio sincero pelas almas do Purgatório que esperam a glória de Deus.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#b89047]/25 bg-[#fdfbf7]/80 p-3.5 sm:p-4 relative shadow-2xs">
            <CornerFlourish position="top-right" />
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center shrink-0 mt-0.5 text-[#8a6825] font-cinzel text-xs font-semibold">
                III
              </div>
              <div>
                <h4 className="font-cinzel text-xs uppercase tracking-wider text-[#2c221c] font-semibold">
                  A Vela na Janela
                </h4>
                <p className="font-cormorant text-sm sm:text-base text-[#6a5649] mt-1 leading-snug">
                  A chama de oração para que a luz perpétua resplandeça sobre os fiéis defuntos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Downward Scroll Cue */}
      <div className="relative mt-8 sm:mt-12 flex justify-center text-[#b89047]/50 hover:text-[#b89047] transition-colors">
        <a href="#contraste" aria-label="Ir para o Contraste" className="p-2">
          <ChevronDown className="w-5 h-5 animate-bounce stroke-[1.4]" />
        </a>
      </div>
    </section>
  );
};
