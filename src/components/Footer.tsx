import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SacredFlorentineCross, SacredQuatrefoil, SacredDivider } from './SacredOrnaments';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f4efe7] text-[#5d4a3d] border-t border-[#b89047]/25 py-10 sm:py-14 px-4 sm:px-8 relative bg-sacred-stone">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6">
        {/* Solemn Seal */}
        <a 
          href="#portico"
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-10 sm:h-10 border border-[#b89047]/40 bg-[#faf7f2] text-[#8a6825] flex items-center justify-center hover:border-[#b89047] hover:bg-[#fdfbf7] transition-all cursor-pointer shadow-2xs"
          title="Voltar ao início"
        >
          <SacredFlorentineCross size={16} className="text-[#8a6825]" />
        </a>

        {/* Liturgical Blessing */}
        <div className="text-[10px] sm:text-[11px] font-cinzel text-[#8a6825] tracking-[0.14em] sm:tracking-[0.16em] uppercase flex items-center justify-center gap-1.5 sm:gap-2 px-2">
          <SacredQuatrefoil size={10} className="text-[#8a6825] shrink-0" />
          <span>Dai-lhes, Senhor, o descanso eterno • E que a luz perpétua os ilumine</span>
          <SacredQuatrefoil size={10} className="text-[#8a6825] shrink-0" />
        </div>

        {/* Core Purpose Statement */}
        <div className="space-y-1 font-cormorant text-sm sm:text-base md:text-lg text-[#46382f]">
          <p className="font-semibold text-[#2c221c]">
            A Retomada do Altar • Tríduo das Almas
          </p>
          <p className="italic text-[#6a5649]">
            Restaurando a fé católica, a partilha do pão e a oração em família.
          </p>
        </div>

        <SacredDivider className="my-1.5" />

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-cinzel text-[#6a5649] tracking-wider">
          <a href="#portico" className="hover:text-[#8a6825] transition-colors py-1.5 px-1 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40">Início</a>
          <span className="text-[#b89047]/40">•</span>
          <a href="#contraste" className="hover:text-[#8a6825] transition-colors py-1.5 px-1 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40">O Contraste</a>
          <span className="text-[#b89047]/40">•</span>
          <a href="#genealogia" className="hover:text-[#8a6825] transition-colors py-1.5 px-1 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40">História</a>
          <span className="text-[#b89047]/40">•</span>
          <a href="#pacto" className="hover:text-[#8a6825] transition-colors py-1.5 px-1 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40">No Lar</a>
          <span className="text-[#b89047]/40">•</span>
          <a href="#rito-da-luz" className="hover:text-[#8a6825] transition-colors py-1.5 px-1 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40">A Vela</a>
          <span className="text-[#b89047]/40">•</span>
          <a href="#chamado" className="hover:text-[#8a6825] transition-colors py-1.5 px-1 text-[#8a6825] font-semibold focus:outline-none focus:ring-2 focus:ring-[#b89047]/40">Inscrição</a>
        </div>

        {/* Bottom Back-to-Top Button */}
        <div className="pt-3.5 border-t border-[#b89047]/15 w-full flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-cinzel text-[#6a5649] gap-2.5">
          <span>A beleza e a fé católica preservadas no seu lar.</span>
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="inline-flex items-center gap-1 min-h-[38px] px-2 py-1 hover:text-[#2c221c] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[1.4]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
