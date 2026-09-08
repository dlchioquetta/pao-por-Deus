import React from 'react';
import { BookOpen, Shield } from 'lucide-react';
import { SacredQuatrefoil } from './SacredOrnaments';

interface HeaderProps {
  onOpenPrayers: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPrayers }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#b89047]/20 transition-all">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 min-h-[4rem] sm:min-h-[5rem] py-2 flex items-center justify-between gap-2">
        {/* Title / Sacred Heraldic Seal */}
        <a 
          href="#portico" 
          aria-label="A Retomada do Altar - Voltar ao início"
          className="flex items-center gap-2 sm:gap-3.5 group focus:outline-none shrink min-w-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#2c221c] group-hover:border-[#b89047] group-hover:bg-[#faf7f2] transition-all shadow-xs relative shrink-0">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#b89047] stroke-[1.4]" />
            <div className="absolute -top-1 -right-1">
              <SacredQuatrefoil size={9} className="text-[#b89047]/80" />
            </div>
          </div>
          <div className="min-w-0">
            <span className="font-cinzel tracking-[0.1em] sm:tracking-[0.14em] text-[#2c221c] font-semibold text-xs sm:text-sm block uppercase leading-tight group-hover:text-[#b89047] transition-colors truncate">
              A Retomada do Altar
            </span>
            <span className="hidden sm:block text-[10px] sm:text-xs font-cormorant italic text-[#6a5649] tracking-wider truncate">
              O Pão por Deus & A Vela na Janela
            </span>
          </div>
        </a>

        {/* Center Quick Navigation (Desktop) */}
        <nav aria-label="Navegação Principal" className="hidden lg:flex items-center gap-5 xl:gap-6 text-[11px] xl:text-[12px] font-cinzel tracking-[0.1em] text-[#46382f]">
          <a href="#portico" className="hover:text-[#b89047] transition-colors py-2">
            Início
          </a>
          <a href="#contraste" className="hover:text-[#b89047] transition-colors py-2">
            O Contraste
          </a>
          <a href="#genealogia" className="hover:text-[#b89047] transition-colors py-2">
            História
          </a>
          <a href="#projeto-paroquial" className="hover:text-[#b89047] transition-colors py-2 text-[#8a6825] font-semibold">
            Projeto Paroquial
          </a>
          <a href="#pacto" className="hover:text-[#b89047] transition-colors py-2 text-[#6a5649]">
            No Lar
          </a>
          <a href="#rito-da-luz" className="hover:text-[#b89047] transition-colors py-2">
            A Vela
          </a>
          <a href="#chamado" className="hover:text-[#b89047] transition-colors text-[#8a6825] font-semibold flex items-center gap-1.5 py-2">
            <SacredQuatrefoil size={11} className="text-[#8a6825]" />
            <span>Inscrição</span>
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Quick Action: Prayers Modal */}
          <button
            id="open-prayers-btn"
            onClick={onOpenPrayers}
            aria-label="Abrir Orações Tradicionais"
            className="flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-h-[38px] sm:min-h-[42px] text-[10px] sm:text-xs font-cinzel tracking-wider border border-[#b89047]/30 bg-[#f4efe7]/80 text-[#2c221c] hover:border-[#b89047] hover:bg-[#faf7f2] transition-all shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#b89047] stroke-[1.5]" />
            <span className="hidden xs:inline">Orações</span>
          </button>

          {/* Direct CTA */}
          <a
            id="header-cta-alistamento"
            href="#chamado"
            aria-label="Ir para o cadastro de participação no projeto paroquial"
            className="px-2.5 sm:px-4 py-1.5 sm:py-2 min-h-[38px] sm:min-h-[42px] text-[10px] sm:text-xs font-cinzel tracking-wider sm:tracking-widest font-semibold bg-[#2c221c] text-[#faf7f2] border border-[#b89047]/50 hover:bg-[#46382f] hover:border-[#b89047] transition-all shadow-xs flex items-center justify-center gap-1 sm:gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 whitespace-nowrap"
          >
            <span className="sm:hidden">Participar</span>
            <span className="hidden sm:inline">Projeto Paroquial</span>
            <span className="text-[#c8a35e]">→</span>
          </a>
        </div>
      </div>
    </header>
  );
};
