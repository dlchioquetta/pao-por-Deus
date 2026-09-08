import React, { useState } from 'react';
import { Flame, Sun, Moon } from 'lucide-react';
import { SacredQuatrefoil, SacredFlorentineCross, SacredDivider, CornerFlourish } from './SacredOrnaments';

export const RiteOfLightSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'simbolismo' | 'guia'>('simbolismo');

  return (
    <section 
      id="rito-da-luz" 
      className="py-20 sm:py-32 bg-sacred-lattice border-b border-[#b89047]/20 relative text-center overflow-hidden"
    >
      {/* Subtle Warm Light Glow Suggesting Candlelight on Sandstone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(244,239,231,0.9)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Emblem */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border border-[#b89047]/30 bg-[#f4efe7]/80 text-[#8a6825] text-[11px] font-cinzel tracking-[0.2em] uppercase font-semibold">
          <Flame className="w-3.5 h-3.5 text-[#b89047] stroke-[1.4]" />
          <span>O Rito da Luz • Sufrágio pelas Almas</span>
          <SacredQuatrefoil size={12} className="text-[#b89047]" />
        </div>

        {/* Title */}
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c221c] tracking-tight mb-4">
          A Luz na Janela pelas Almas do Purgatório
        </h2>

        <SacredDivider className="my-5" />

        {/* Narrative - Clear & accessible */}
        <div className="max-w-2xl mx-auto space-y-4 font-cormorant text-xl sm:text-2xl text-[#46382f] leading-relaxed md:leading-loose">
          <p className="italic">
            "Nas noites do Tríduo, as famílias católicas acendiam uma vela na janela com um propósito sagrado: 
            interceder pelas almas dos fiéis defuntos."
          </p>
          <p className="text-lg sm:text-xl text-[#6a5649]">
            A chama não serve para assustar nem para teatro. Ela é a súplica visível da nossa fé: 
            que a luz perpétua de Jesus Cristo resplandeça sobre as almas do Purgatório (a Igreja Padecente), 
            aliviando suas penas e apressando o seu encontro com Deus no Céu.
          </p>
        </div>

        {/* Refined Tab Switcher */}
        <div 
          role="tablist"
          aria-label="Opções do Rito da Luz"
          className="mt-10 inline-flex flex-wrap sm:flex-nowrap max-w-full border border-[#b89047]/35 bg-[#f4efe7] p-1 shadow-2xs justify-center"
        >
          <button
            role="tab"
            aria-selected={activeTab === 'simbolismo'}
            onClick={() => setActiveTab('simbolismo')}
            className={`px-4 sm:px-5 py-2.5 min-h-[44px] flex items-center justify-center font-cinzel text-xs uppercase tracking-[0.14em] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 ${
              activeTab === 'simbolismo'
                ? 'bg-[#2c221c] text-[#faf7f2] font-semibold shadow-xs'
                : 'text-[#5d4a3d] hover:text-[#2c221c]'
            }`}
          >
            O Significado Espiritual
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'guia'}
            onClick={() => setActiveTab('guia')}
            className={`px-4 sm:px-5 py-2.5 min-h-[44px] flex items-center justify-center font-cinzel text-xs uppercase tracking-[0.14em] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 ${
              activeTab === 'guia'
                ? 'bg-[#2c221c] text-[#faf7f2] font-semibold shadow-xs'
                : 'text-[#5d4a3d] hover:text-[#2c221c]'
            }`}
          >
            Como Fazer em Família
          </button>
        </div>

        {/* Tab Contents */}
        <div className="mt-8 text-left max-w-2xl mx-auto">
          {activeTab === 'simbolismo' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-8 bg-[#fdfbf7] border border-[#b89047]/30 shadow-xs relative">
              <CornerFlourish position="top-left" />
              <CornerFlourish position="bottom-right" />

              <div className="border-b sm:border-b-0 sm:border-r border-[#b89047]/20 pb-5 sm:pb-0 sm:pr-5">
                <div className="flex items-center gap-2 text-[#8a6825] font-cinzel font-semibold text-xs tracking-wider uppercase mb-2.5">
                  <Sun className="w-4 h-4 stroke-[1.4]" />
                  <span>O Sufrágio Católico</span>
                </div>
                <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose">
                  A vela acesa é sinal de oração contínua da Igreja Militante pela Igreja Padecente. 
                  Lembramos que as almas no Purgatório não podem mais merecer por si mesmas, 
                  mas dependem do nosso amor e das nossas preces para alcançar a visão beatífica de Deus.
                </p>
              </div>

              <div className="sm:pl-2">
                <div className="flex items-center gap-2 text-[#6a5649] font-cinzel font-semibold text-xs tracking-wider uppercase mb-2.5">
                  <Moon className="w-4 h-4 stroke-[1.4]" />
                  <span>O Vazio Comercial</span>
                </div>
                <p className="font-cormorant text-base sm:text-lg text-[#6a5649] leading-relaxed md:leading-loose">
                  O comércio mundano substituiu a reverência e a caridade pelos mortos por sustos, 
                  monstros e brincadeiras que apagam a eternidade e reduzem um momento sagrado a mero consumo.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 bg-[#fdfbf7] border border-[#b89047]/30 shadow-xs space-y-4 font-cormorant text-lg text-[#46382f] relative">
              <CornerFlourish position="top-left" />
              <CornerFlourish position="bottom-right" />

              <div className="flex items-start gap-3">
                <span className="text-[#8a6825] font-cinzel text-xs font-semibold mt-1">1.</span>
                <span>Coloque uma vela protegida em um suporte de vidro (ou vela de LED segura) na janela de casa durante o Tríduo das Almas (de 31 de outubro a 2 de novembro).</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8a6825] font-cinzel text-xs font-semibold mt-1">2.</span>
                <span>Se desejar, coloque uma pequena Cruz ou uma folha com os nomes dos seus entes queridos falecidos ao lado da vela.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8a6825] font-cinzel text-xs font-semibold mt-1">3.</span>
                <span>Ao acender a vela em família, rezem juntos em sufrágio pelas almas do Purgatório: façam a oração tradicional do <em>Requiem Æternam</em> ("Dai-lhes, Senhor, o descanso eterno...") e um Pai-Nosso com Ave-Maria.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8a6825] font-cinzel text-xs font-semibold mt-1">4.</span>
                <span>Ensine às crianças que rezar pelas almas do Purgatório é um dos maiores atos de caridade cristã, pois as almas que sobem ao Céu nunca esquecem de interceder por nós diante de Deus.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

