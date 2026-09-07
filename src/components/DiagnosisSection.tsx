import React from 'react';
import { BookOpen } from 'lucide-react';
import { SacredQuatrefoil, SacredFlorentineCross, CornerFlourish, SacredDivider } from './SacredOrnaments';

export const DiagnosisSection: React.FC = () => {
  return (
    <section id="contraste" className="py-20 sm:py-32 bg-sacred-lattice border-b border-[#b89047]/20 relative">
      {/* Background Architectural Symmetry */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-6xl mx-auto h-full border-x border-[#b89047]/25" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header: Simples, Claro & Convidativo */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] font-cinzel text-[#8a6825] tracking-[0.2em] uppercase mb-3">
            <SacredQuatrefoil size={13} className="text-[#b89047]" />
            <span>O Contraste • Entenda a Diferença</span>
            <SacredQuatrefoil size={13} className="text-[#b89047]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c221c] tracking-tight">
            A Beleza do que é Simples
          </h2>
          
          <SacredDivider className="my-5" />

          <p className="font-cormorant text-xl sm:text-2xl text-[#46382f] max-w-2xl mx-auto leading-relaxed">
            A verdadeira alegria não precisa de barulho nem de coisas descartáveis. 
            Veja a diferença entre a moda passageira e o que realmente tem valor para a sua família.
          </p>
        </div>

        {/* Dual Comparison Columns: O que passa vs. O que fica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 items-stretch">
          {/* Side A: O Barulho que Passa Rápido */}
          <div className="border border-[#b89047]/25 bg-[#faf7f2]/95 p-7 sm:p-9 flex flex-col justify-between shadow-2xs relative">
            <CornerFlourish position="top-left" className="text-[#b89047]/25" />
            <CornerFlourish position="bottom-right" className="text-[#b89047]/25" />

            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#b89047]/15">
                <span className="text-[11px] font-cinzel tracking-[0.16em] uppercase text-[#6a5649]">
                  A Moda Comercial
                </span>
                <span className="text-xs font-cormorant italic text-[#8a6825]">
                  Passa em 24 Horas
                </span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-normal text-[#2c221c] mb-3">
                O Barulho e o Descartável
              </h3>

              <p className="font-cormorant text-lg sm:text-xl text-[#46382f] leading-relaxed mb-5">
                Máscaras feias de borracha, baldinhos de plástico descartáveis e sustos comprados prontos. 
                Tudo é consumido em poucas horas e, na manhã seguinte, só sobram embalagens 
                vazias jogadas na rua e nenhum ensinamento de verdade.
              </p>

              <ul className="space-y-2.5 font-cormorant text-base sm:text-lg text-[#6a5649] border-t border-[#b89047]/10 pt-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#8a6825] font-semibold">―</span>
                  Doces industriais cheios de açúcar e embalagens plásticas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#8a6825] font-semibold">―</span>
                  Monstros e sustos que geram medo em vez de paz
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#8a6825] font-semibold">―</span>
                  Uma comemoração que acaba assim que a festa termina
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-4 border-t border-[#b89047]/15 text-xs font-cinzel text-[#8a6825] tracking-wider uppercase">
              O que desaparece ao amanhecer
            </div>
          </div>

          {/* Side B: A Tradição do Pão e da Oração */}
          <div className="border border-[#b89047]/50 bg-[#fdfbf7] p-7 sm:p-9 flex flex-col justify-between shadow-sm relative">
            <CornerFlourish position="top-left" className="text-[#b89047]/60" />
            <CornerFlourish position="top-right" className="text-[#b89047]/60" />
            <CornerFlourish position="bottom-left" className="text-[#b89047]/60" />
            <CornerFlourish position="bottom-right" className="text-[#b89047]/60" />

            {/* Subtle Golden Frame Accent */}
            <div className="absolute -top-[1px] -left-[1px] -right-[1px] h-[2px] bg-[#b89047]" />

            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#b89047]/20">
                <span className="text-[11px] font-cinzel tracking-[0.16em] uppercase text-[#8a6825] font-semibold flex items-center gap-1.5">
                  <SacredQuatrefoil size={11} className="text-[#8a6825]" />
                  <span>O Pão por Deus</span>
                </span>
                <span className="text-xs font-cormorant italic text-[#8a6825]">
                  Fica no Coração
                </span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-normal text-[#2c221c] mb-3">
                O Pão Feito em Casa e a Oração
              </h3>

              <p className="font-cormorant text-lg sm:text-xl text-[#2c221c] leading-relaxed mb-5">
                O cheiro gostoso de pão caseiro simples e quentinho saindo do forno da família. 
                Pãezinhos com a marca da Cruz, repartidos com carinho com parentes e vizinhos, 
                pedindo em troca o sufrágio sagrado pelas almas do Purgatório.
              </p>

              <ul className="space-y-2.5 font-cormorant text-base sm:text-lg text-[#46382f] border-t border-[#b89047]/15 pt-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#b89047] font-semibold">✦</span>
                  Alimento de verdade preparado em família com amor e simplicidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b89047] font-semibold">✦</span>
                  Oração e sufrágio pelas almas do Purgatório (a Igreja Padecente)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b89047] font-semibold">✦</span>
                  Uma fé viva que une o Céu, a terra e a esperança da vida eterna
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-4 border-t border-[#b89047]/20 text-xs font-cinzel text-[#8a6825] tracking-wider uppercase font-semibold">
              O que fica guardado para sempre no coração
            </div>
          </div>
        </div>

        {/* Citação Inspiradora com Ornamento de Basílica */}
        <div className="p-7 sm:p-10 border border-[#b89047]/35 bg-[#faf7f2] shadow-2xs max-w-3xl mx-auto text-center relative">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />

          <div className="w-9 h-9 mx-auto -mt-12 mb-4 border border-[#b89047]/50 bg-[#faf7f2] flex items-center justify-center text-[#8a6825] shadow-xs">
            <SacredFlorentineCross size={18} className="text-[#b89047]" />
          </div>

          <p className="font-cormorant italic text-xl sm:text-2xl text-[#2c221c] leading-relaxed">
            "A verdadeira beleza não precisa de barulho para se fazer notar. 
            Quando uma família acende uma vela na janela e divide um pãozinho feito em casa, 
            a paz de Deus enche o lar e toda a escuridão vai embora."
          </p>

          <span className="block mt-4 text-[11px] font-cinzel text-[#8a6825] tracking-[0.2em] uppercase font-semibold">
            — Antiga Sabedoria Cristã dos Mosteiros
          </span>
        </div>
      </div>
    </section>
  );
};

