import React from 'react';
import { SacredQuatrefoil, SacredFlorentineCross, CornerFlourish, SacredDivider } from './SacredOrnaments';

export const DiagnosisSection: React.FC = () => {
  return (
    <section id="contraste" className="py-14 sm:py-24 md:py-30 bg-sacred-lattice border-b border-[#b89047]/20 relative">
      {/* Background Architectural Symmetry */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-6xl mx-auto h-full border-x border-[#b89047]/25" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header: Simples, Claro & Convidativo */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-cinzel text-[#8a6825] tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3">
            <SacredQuatrefoil size={12} className="text-[#b89047]" />
            <span>O Contraste • Entenda a Diferença</span>
            <SacredQuatrefoil size={12} className="text-[#b89047]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#2c221c] tracking-tight">
            A Beleza do que é Simples
          </h2>
          
          <SacredDivider className="my-4 sm:my-5" />

          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#46382f] max-w-2xl mx-auto leading-relaxed md:leading-loose">
            A verdadeira alegria não precisa de barulho nem de coisas descartáveis. 
            Veja a diferença entre a moda passageira e o que realmente tem valor para a sua família.
          </p>
        </div>

        {/* Dual Comparison Columns: O que passa vs. O que fica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 mb-10 sm:mb-16 items-stretch">
          {/* Side A: O Barulho que Passa Rápido */}
          <div className="border border-[#b89047]/25 bg-[#faf7f2]/95 p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-2xs relative">
            <CornerFlourish position="top-left" className="text-[#b89047]/25" />
            <CornerFlourish position="bottom-right" className="text-[#b89047]/25" />

            <div>
              <div className="flex items-center justify-between pb-2.5 mb-4 border-b border-[#b89047]/15">
                <span className="text-[10px] sm:text-[11px] font-cinzel tracking-[0.14em] uppercase text-[#6a5649]">
                  A Moda Comercial
                </span>
                <span className="text-xs font-cormorant italic text-[#8a6825]">
                  Passa em 24 Horas
                </span>
              </div>

              <h3 className="font-cinzel text-lg sm:text-xl md:text-2xl font-normal text-[#2c221c] mb-2.5">
                O Barulho e o Descartável
              </h3>

              <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#46382f] leading-relaxed md:leading-loose mb-4">
                Máscaras de borracha, baldinhos de plástico descartáveis e sustos prontos. 
                Tudo é consumido em poucas horas e só sobram embalagens 
                jogadas e nenhum ensinamento duradouro.
              </p>

              <ul className="space-y-2 font-cormorant text-sm sm:text-base md:text-lg text-[#6a5649] border-t border-[#b89047]/10 pt-3.5">
                <li className="flex items-center gap-2">
                  <span className="text-[#8a6825] font-semibold">―</span>
                  Doces industriais com excesso de açúcar e plástico
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#8a6825] font-semibold">―</span>
                  Monstros e sustos que geram agitação em vez de paz
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#8a6825] font-semibold">―</span>
                  Uma agitação que termina no dia seguinte
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#b89047]/15 text-[11px] sm:text-xs font-cinzel text-[#8a6825] tracking-wider uppercase">
              O que desaparece ao amanhecer
            </div>
          </div>

          {/* Side B: A Tradição do Pão e da Oração */}
          <div className="border border-[#b89047]/50 bg-[#fdfbf7] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm relative">
            <CornerFlourish position="top-left" className="text-[#b89047]/60" />
            <CornerFlourish position="top-right" className="text-[#b89047]/60" />
            <CornerFlourish position="bottom-left" className="text-[#b89047]/60" />
            <CornerFlourish position="bottom-right" className="text-[#b89047]/60" />

            {/* Subtle Golden Frame Accent */}
            <div className="absolute -top-[1px] -left-[1px] -right-[1px] h-[2px] bg-[#b89047]" />

            <div>
              <div className="flex items-center justify-between pb-2.5 mb-4 border-b border-[#b89047]/20">
                <span className="text-[10px] sm:text-[11px] font-cinzel tracking-[0.14em] uppercase text-[#8a6825] font-semibold flex items-center gap-1.5">
                  <SacredQuatrefoil size={11} className="text-[#8a6825]" />
                  <span>O Pão por Deus</span>
                </span>
                <span className="text-xs font-cormorant italic text-[#8a6825]">
                  Fica no Coração
                </span>
              </div>

              <h3 className="font-cinzel text-lg sm:text-xl md:text-2xl font-normal text-[#2c221c] mb-2.5">
                O Pão em Família e a Oração
              </h3>

              <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#2c221c] leading-relaxed md:leading-loose mb-4">
                O cheiro gostoso de pão caseiro simples saindo do forno. 
                Pãezinhos com a marca da Cruz, repartidos com parentes e vizinhos, 
                tendo em troca a oração pelas almas do Purgatório.
              </p>

              <ul className="space-y-2 font-cormorant text-sm sm:text-base md:text-lg text-[#46382f] border-t border-[#b89047]/15 pt-3.5">
                <li className="flex items-center gap-2">
                  <span className="text-[#b89047] font-semibold">✦</span>
                  Alimento preparado em família com amor e simplicidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b89047] font-semibold">✦</span>
                  Oração e sufrágio sincero pelas almas do Purgatório
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b89047] font-semibold">✦</span>
                  Uma fé viva que une o Céu, a terra e a esperança cristã
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#b89047]/20 text-[11px] sm:text-xs font-cinzel text-[#8a6825] tracking-wider uppercase font-semibold">
              O que fica guardado para sempre no coração
            </div>
          </div>
        </div>

        {/* Citação Inspiradora com Ornamento de Basílica */}
        <div className="p-5 sm:p-8 md:p-10 border border-[#b89047]/35 bg-[#faf7f2] shadow-2xs max-w-3xl mx-auto text-center relative">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />

          <div className="w-8 h-8 sm:w-9 sm:h-9 mx-auto -mt-9 sm:-mt-12 mb-3 sm:mb-4 border border-[#b89047]/50 bg-[#faf7f2] flex items-center justify-center text-[#8a6825] shadow-xs">
            <SacredFlorentineCross size={16} className="text-[#b89047]" />
          </div>

          <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-[#2c221c] leading-relaxed md:leading-loose">
            "A verdadeira beleza não precisa de barulho para se fazer notar. 
            Quando uma família acende uma vela na janela e divide um pãozinho feito em casa, 
            a paz de Deus enche o lar e toda a escuridão vai embora."
          </p>

          <span className="block mt-3 sm:mt-4 text-[10px] sm:text-[11px] font-cinzel text-[#8a6825] tracking-[0.16em] sm:tracking-[0.2em] uppercase font-semibold">
            — Antiga Sabedoria Cristã dos Mosteiros
          </span>
        </div>
      </div>
    </section>
  );
};
