import React from 'react';
import { PILLARS_DATA } from '../data/manifestoData';
import { HeartHandshake, Flame, Crown, BookOpen } from 'lucide-react';
import { SacredQuatrefoil, SacredFlorentineCross, SacredDivider, CornerFlourish } from './SacredOrnaments';

interface PracticalSectionProps {
  onOpenPrayers: () => void;
}

export const PracticalSection: React.FC<PracticalSectionProps> = ({
  onOpenPrayers
}) => {
  const getPillarIcon = (numeral: string) => {
    switch (numeral) {
      case 'I':
        return <HeartHandshake className="w-5 h-5 text-[#8a6825] stroke-[1.4]" />;
      case 'II':
        return <Flame className="w-5 h-5 text-[#8a6825] stroke-[1.4]" />;
      case 'III':
        return <Crown className="w-5 h-5 text-[#8a6825] stroke-[1.4]" />;
      default:
        return <SacredQuatrefoil size={16} className="text-[#8a6825]" />;
    }
  };

  return (
    <section id="pacto" className="py-14 sm:py-24 md:py-30 bg-sacred-stone border-b border-[#b89047]/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-cinzel text-[#8a6825] tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 font-semibold">
            <SacredQuatrefoil size={12} className="text-[#b89047]" />
            <span>Guia Prático • Para Fazer em Casa</span>
            <SacredQuatrefoil size={12} className="text-[#b89047]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#2c221c] tracking-tight">
            Como Viver essa Tradição no Lar
          </h2>

          <SacredDivider className="my-4 sm:my-5" />

          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#46382f] leading-relaxed md:leading-loose">
            Se a sua família não puder comparecer à oficina da paróquia ou quiser celebrar
            em casa, aqui está o guia prático em três passos simples: 
            fazer os pãezinhos com a Cruz, rezar pelas almas do Purgatório e acender a vela na janela.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.numeral}
              id={`pilar-${pillar.numeral.toLowerCase()}`}
              className="border border-[#b89047]/30 bg-[#faf7f2]/95 p-5 sm:p-7 shadow-2xs hover:border-[#b89047]/70 transition-all flex flex-col justify-between relative"
            >
              <CornerFlourish position="top-right" />

              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#b89047]/15">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center shadow-2xs">
                      {getPillarIcon(pillar.numeral)}
                    </div>
                    <span className="font-cinzel text-xs text-[#8a6825] tracking-widest uppercase font-semibold">
                      Passo {pillar.numeral}
                    </span>
                  </div>
                  <SacredQuatrefoil size={11} className="text-[#8a6825]/50" />
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-normal text-[#2c221c] mb-2">
                  {pillar.title}
                </h3>

                <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-3.5">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#b89047]/15 text-sm sm:text-base font-cormorant text-[#6a5649] italic">
                {pillar.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Action Toolkit Box */}
        <div className="border border-[#b89047]/40 bg-[#fdfbf7] p-5 sm:p-8 md:p-10 shadow-sm relative">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />

          {/* Thin subtle gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#b89047]/60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] sm:text-[11px] font-cinzel text-[#8a6825] uppercase tracking-[0.16em] block mb-1.5 font-semibold flex items-center gap-1.5">
                <SacredQuatrefoil size={11} className="text-[#8a6825]" />
                <span>Guia Espiritual para a Família</span>
              </span>

              <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-normal text-[#2c221c] mb-2.5">
                As Orações pelas Almas e a Partilha
              </h3>

              <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#46382f] leading-relaxed md:leading-loose mb-5">
                Qualquer pão caseiro simples com a marca da Santa Cruz serve para este ato de caridade. 
                O essencial não é uma receita complicada, mas o amor ao partilhar o pão e a oração pelas almas do Purgatório.
              </p>

              <div>
                <button
                  id="practical-open-prayers"
                  onClick={onOpenPrayers}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 min-h-[44px] bg-[#2c221c] hover:bg-[#46382f] text-[#faf7f2] font-cinzel text-xs tracking-[0.12em] font-semibold border border-[#b89047]/60 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 uppercase"
                >
                  <BookOpen className="w-4 h-4 text-[#dfc89d] stroke-[1.5]" />
                  <span>Ver Orações Tradicionais</span>
                </button>
              </div>
            </div>

            {/* O Que Falar ao Entregar */}
            <div className="lg:col-span-5 bg-[#f4efe7] border border-[#b89047]/30 p-4 sm:p-6 relative">
              <div className="flex items-center gap-1.5 text-[10px] font-cinzel text-[#8a6825] uppercase tracking-[0.16em] mb-2.5 font-semibold">
                <SacredFlorentineCross size={13} className="text-[#b89047]" />
                <span>O Que Falar ao Entregar o Pão</span>
              </div>

              <blockquote className="font-cormorant italic text-base sm:text-lg md:text-xl text-[#2c221c] leading-relaxed md:leading-loose">
                "Preparamos este pãozinho com a marca da Cruz em família para você! 
                Em troca, pedimos uma oração pelas almas do Purgatório: podemos rezar um Pai-Nosso juntos?"
              </blockquote>

              <div className="mt-3 pt-2 border-t border-[#b89047]/20 text-[10px] sm:text-[11px] font-cinzel text-[#6a5649] tracking-wider">
                — Frase simples e solene para partilhar na porta
              </div>
            </div>
          </div>
        </div>

        {/* Bridge to Parochial Project (Primary Goal) */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-[#faf7f2] border border-[#b89047]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shrink-0">
              <SacredQuatrefoil size={13} className="text-[#8a6825]" />
            </div>
            <div>
              <span className="font-cinzel text-[11px] sm:text-xs uppercase tracking-wider text-[#8a6825] font-semibold block">
                Ação Comunitária
              </span>
              <p className="font-cormorant text-base sm:text-lg text-[#2c221c]">
                Participe também da <strong>Oficina e Procissão na Paróquia</strong>.
              </p>
            </div>
          </div>

          <a
            href="#chamado"
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 min-h-[42px] sm:min-h-[44px] bg-[#2c221c] hover:bg-[#3d2f26] text-[#faf7f2] font-cinzel text-xs tracking-wider uppercase font-semibold border border-[#b89047]/50 whitespace-nowrap transition-all shadow-xs flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
          >
            Participar na Paróquia
          </a>
        </div>
      </div>
    </section>
  );
};
