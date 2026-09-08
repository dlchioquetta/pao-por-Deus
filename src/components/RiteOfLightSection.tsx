import React, { useState } from 'react';
import { Flame, Sun, Moon } from 'lucide-react';
import { SacredQuatrefoil, SacredDivider, CornerFlourish } from './SacredOrnaments';

export const RiteOfLightSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'simbolismo' | 'guia'>('simbolismo');

  return (
    <section 
      id="rito-da-luz" 
      className="py-14 sm:py-24 md:py-30 bg-sacred-lattice border-b border-[#b89047]/20 relative text-center overflow-hidden"
    >
      {/* Subtle Warm Light Glow Suggesting Candlelight on Sandstone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(244,239,231,0.9)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Emblem */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-3 sm:mb-4 border border-[#b89047]/30 bg-[#f4efe7]/80 text-[#8a6825] text-[10px] sm:text-[11px] font-cinzel tracking-[0.16em] sm:tracking-[0.2em] uppercase font-semibold">
          <Flame className="w-3.5 h-3.5 text-[#b89047] stroke-[1.4]" />
          <span>O Rito da Luz • Sufrágio pelas Almas</span>
          <SacredQuatrefoil size={11} className="text-[#b89047]" />
        </div>

        {/* Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#2c221c] tracking-tight mb-3 sm:mb-4">
          A Luz na Janela pelas Almas
        </h2>

        <SacredDivider className="my-4 sm:my-5" />

        {/* Narrative - Clear & accessible */}
        <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4 font-cormorant text-lg sm:text-xl md:text-2xl text-[#46382f] leading-relaxed md:leading-loose">
          <p className="italic">
            "Nas noites do Tríduo, as famílias acendiam uma vela na janela com um propósito sagrado: 
            interceder pelas almas dos fiéis defuntos."
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#6a5649]">
            A chama é a súplica visível da nossa fé: 
            que a luz perpétua de Jesus Cristo resplandeça sobre as almas do Purgatório, 
            aliviando suas penas e apressando o seu encontro com Deus no Céu.
          </p>
        </div>

        {/* Refined Tab Switcher */}
        <div 
          role="tablist"
          aria-label="Opções do Rito da Luz"
          className="mt-8 sm:mt-10 inline-flex w-full sm:w-auto border border-[#b89047]/35 bg-[#f4efe7] p-1 shadow-2xs justify-center"
        >
          <button
            role="tab"
            aria-selected={activeTab === 'simbolismo'}
            onClick={() => setActiveTab('simbolismo')}
            className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 min-h-[42px] flex items-center justify-center font-cinzel text-[11px] sm:text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 ${
              activeTab === 'simbolismo'
                ? 'bg-[#2c221c] text-[#faf7f2] font-semibold shadow-xs'
                : 'text-[#5d4a3d] hover:text-[#2c221c]'
            }`}
          >
            Significado Espiritual
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'guia'}
            onClick={() => setActiveTab('guia')}
            className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 min-h-[42px] flex items-center justify-center font-cinzel text-[11px] sm:text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 ${
              activeTab === 'guia'
                ? 'bg-[#2c221c] text-[#faf7f2] font-semibold shadow-xs'
                : 'text-[#5d4a3d] hover:text-[#2c221c]'
            }`}
          >
            Como Fazer no Lar
          </button>
        </div>

        {/* Tab Contents */}
        <div className="mt-6 sm:mt-8 text-left max-w-2xl mx-auto">
          {activeTab === 'simbolismo' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 p-5 sm:p-7 md:p-8 bg-[#fdfbf7] border border-[#b89047]/30 shadow-xs relative">
              <CornerFlourish position="top-left" />
              <CornerFlourish position="bottom-right" />

              <div className="border-b sm:border-b-0 sm:border-r border-[#b89047]/20 pb-4 sm:pb-0 sm:pr-4">
                <div className="flex items-center gap-1.5 text-[#8a6825] font-cinzel font-semibold text-xs tracking-wider uppercase mb-2">
                  <Sun className="w-4 h-4 stroke-[1.4]" />
                  <span>O Sufrágio Católico</span>
                </div>
                <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose">
                  A vela acesa é sinal de oração contínua pelas almas no Purgatório, que
                  dependem do nosso amor e preces para alcançar a glória de Deus no Céu.
                </p>
              </div>

              <div className="sm:pl-2">
                <div className="flex items-center gap-1.5 text-[#6a5649] font-cinzel font-semibold text-xs tracking-wider uppercase mb-2">
                  <Moon className="w-4 h-4 stroke-[1.4]" />
                  <span>O Vazio Comercial</span>
                </div>
                <p className="font-cormorant text-base sm:text-lg text-[#6a5649] leading-relaxed md:leading-loose">
                  O comércio substituiu a reverência e a caridade aos defuntos por sustos e
                  consumo descartável que apagam o sentido eterno da vida.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-5 sm:p-7 md:p-8 bg-[#fdfbf7] border border-[#b89047]/30 shadow-xs space-y-3 sm:space-y-4 font-cormorant text-base sm:text-lg text-[#46382f] relative">
              <CornerFlourish position="top-left" />
              <CornerFlourish position="bottom-right" />

              <div className="flex items-start gap-2.5">
                <span className="text-[#8a6825] font-cinzel text-xs font-semibold mt-0.5">1.</span>
                <span>Coloque uma vela protegida (ou de LED) na janela de casa durante o Tríduo das Almas (de 31 de outubro a 2 de novembro).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#8a6825] font-cinzel text-xs font-semibold mt-0.5">2.</span>
                <span>Se desejar, coloque uma pequena Cruz ou uma folha com os nomes dos seus entes queridos falecidos ao lado da vela.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#8a6825] font-cinzel text-xs font-semibold mt-0.5">3.</span>
                <span>Ao acender a vela em família, rezem juntos o <em>Requiem Æternam</em> ("Dai-lhes, Senhor, o descanso eterno...") e um Pai-Nosso.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#8a6825] font-cinzel text-xs font-semibold mt-0.5">4.</span>
                <span>Rezar pelas almas do Purgatório é um dos maiores atos de caridade: as almas que vão para o Céu intercedem por nós diante de Deus.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
