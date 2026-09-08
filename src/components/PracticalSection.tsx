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
        return <SacredQuatrefoil size={18} className="text-[#8a6825]" />;
    }
  };

  return (
    <section id="pacto" className="py-20 sm:py-32 bg-sacred-stone border-b border-[#b89047]/20 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] font-cinzel text-[#8a6825] tracking-[0.2em] uppercase mb-3 font-semibold">
            <SacredQuatrefoil size={13} className="text-[#b89047]" />
            <span>Opção Secundária • Para Fazer em Família no Lar</span>
            <SacredQuatrefoil size={13} className="text-[#b89047]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c221c] tracking-tight">
            Como Viver essa Tradição em Casa
          </h2>

          <SacredDivider className="my-5" />

          <p className="font-cormorant text-xl sm:text-2xl text-[#46382f] leading-relaxed md:leading-loose">
            Se a sua família não puder comparecer à oficina comunitária da paróquia ou quiser reproduzir o rito 
            no recesso da sua casa, aqui está o guia prático em três passos simples e santos: 
            fazer os pãezinhos caseiros com a Cruz, rezar pelas almas do Purgatório e acender a vela na janela.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.numeral}
              id={`pilar-${pillar.numeral.toLowerCase()}`}
              className="border border-[#b89047]/30 bg-[#faf7f2]/95 p-6 sm:p-8 shadow-2xs hover:border-[#b89047]/70 transition-all flex flex-col justify-between relative"
            >
              <CornerFlourish position="top-right" />

              <div>
                <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-[#b89047]/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center shadow-2xs">
                      {getPillarIcon(pillar.numeral)}
                    </div>
                    <span className="font-cinzel text-xs text-[#8a6825] tracking-widest uppercase font-semibold">
                      Passo {pillar.numeral}
                    </span>
                  </div>
                  <SacredQuatrefoil size={12} className="text-[#8a6825]/50" />
                </div>

                <h3 className="font-cinzel text-xl font-normal text-[#2c221c] mb-2.5">
                  {pillar.title}
                </h3>

                <p className="font-cormorant text-lg text-[#46382f] leading-relaxed md:leading-loose mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#b89047]/15 text-base font-cormorant text-[#6a5649] italic">
                {pillar.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Action Toolkit Box */}
        <div className="border border-[#b89047]/40 bg-[#fdfbf7] p-7 sm:p-10 shadow-sm relative">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />

          {/* Thin subtle gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#b89047]/60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-cinzel text-[#8a6825] uppercase tracking-[0.18em] block mb-2 font-semibold flex items-center gap-1.5">
                <SacredQuatrefoil size={12} className="text-[#8a6825]" />
                <span>Guia Espiritual para a Família</span>
              </span>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-normal text-[#2c221c] mb-3">
                As Orações pelas Almas e a Partilha
              </h3>

              <p className="font-cormorant text-lg sm:text-xl text-[#46382f] leading-relaxed md:leading-loose mb-6">
                Qualquer pão caseiro simples ou broa feita em casa, com a marca da Santa Cruz, serve para este ato nobre de caridade. 
                O essencial não é um preparo complexo, mas o amor cristão ao partilhar o pão e sufragá-lo com orações pelas almas do Purgatório.
              </p>

              <div>
                <button
                  id="practical-open-prayers"
                  onClick={onOpenPrayers}
                  className="w-full sm:w-auto px-6 py-3.5 min-h-[44px] bg-[#2c221c] hover:bg-[#46382f] text-[#faf7f2] font-cinzel text-xs tracking-[0.14em] font-semibold border border-[#b89047]/60 transition-all flex items-center justify-center gap-2.5 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
                >
                  <BookOpen className="w-4 h-4 text-[#dfc89d] stroke-[1.5]" />
                  <span>Ver Orações Tradicionais pelas Almas</span>
                </button>
              </div>
            </div>

            {/* O Que Falar ao Entregar */}
            <div className="lg:col-span-5 bg-[#f4efe7] border border-[#b89047]/30 p-5 sm:p-7 relative">
              <div className="flex items-center gap-1.5 text-[10px] font-cinzel text-[#8a6825] uppercase tracking-[0.18em] mb-3 font-semibold">
                <SacredFlorentineCross size={14} className="text-[#b89047]" />
                <span>O Que Falar ao Entregar o Pãozinho</span>
              </div>

              <blockquote className="font-cormorant italic text-lg sm:text-xl text-[#2c221c] leading-relaxed md:leading-loose">
                "Preparamos este pãozinho caseiro simples com a marca da Cruz em família para você! 
                Em troca deste presente, nós lhe pedimos uma oração pelas almas do Purgatório e pelos falecidos da sua família: podemos rezar um Pai-Nosso juntos?"
              </blockquote>

              <div className="mt-3.5 pt-2.5 border-t border-[#b89047]/20 text-[11px] font-cinzel text-[#6a5649] tracking-wider">
                — Uma frase simples e solene para partilhar na porta
              </div>
            </div>
          </div>
        </div>

        {/* Bridge to Parochial Project (Primary Goal) */}
        <div className="mt-10 p-5 sm:p-6 bg-[#faf7f2] border border-[#b89047]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shrink-0">
              <SacredQuatrefoil size={14} className="text-[#8a6825]" />
            </div>
            <div>
              <span className="font-cinzel text-xs uppercase tracking-wider text-[#8a6825] font-semibold block">
                Objetivo Principal • Ação Comunitária
              </span>
              <p className="font-cormorant text-base sm:text-lg text-[#2c221c]">
                Além de viver no lar, o projeto ganha força plena com a <strong>Oficina e Procissão Paroquial</strong>.
              </p>
            </div>
          </div>

          <a
            href="#chamado"
            className="px-6 py-3 min-h-[44px] bg-[#2c221c] hover:bg-[#3d2f26] text-[#faf7f2] font-cinzel text-xs tracking-wider uppercase font-semibold border border-[#b89047]/50 whitespace-nowrap transition-all shadow-xs flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
          >
            Inscrever-se na Paróquia
          </a>
        </div>
      </div>
    </section>
  );
};

