import React, { useState, useEffect } from 'react';
import { EnlistmentForm, EnlistmentRecord } from '../types';
import { Church, BookOpen, Flame, HeartHandshake, Wheat, Home } from 'lucide-react';
import { SacredQuatrefoil, SacredFlorentineCross, SacredDivider, CornerFlourish } from './SacredOrnaments';

interface EnlistmentSectionProps {
  onEnlisted: (record: EnlistmentRecord) => void;
}

const STORAGE_KEY = 'retomada_altar_inscricoes_paroquia';

export const EnlistmentSection: React.FC<EnlistmentSectionProps> = ({ onEnlisted }) => {
  const [formData, setFormData] = useState<EnlistmentForm>({
    name: '',
    contact: '',
    parishOrLocation: '',
    mode: 'paroquial',
    role: 'oficina_paroquial',
    deceasedNames: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasEnlistedBefore, setHasEnlistedBefore] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const records = JSON.parse(saved);
        if (records && records.length > 0) {
          setHasEnlistedBefore(true);
        }
      }
    } catch {
      // ignore parsing error
    }
  }, []);

  const handleModeChange = (mode: 'paroquial' | 'domestico') => {
    setFormData((prev) => ({
      ...prev,
      mode,
      role: mode === 'domestico' ? 'domestico_casa' : (prev.role === 'domestico_casa' ? 'oficina_paroquial' : prev.role),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Por favor, informe o seu nome ou o nome da sua família.');
      return;
    }
    if (!formData.contact.trim()) {
      setErrorMessage('Por favor, informe seu WhatsApp ou e-mail para receber as orientações paroquiais.');
      return;
    }
    if (!formData.parishOrLocation.trim()) {
      setErrorMessage('Por favor, informe sua Paróquia e Cidade.');
      return;
    }

    setIsSubmitting(true);

    const record: EnlistmentRecord = {
      ...formData,
      id: 'PAROQUIA-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      code: `ALTAR-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`,
    };

    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const list: EnlistmentRecord[] = existing ? JSON.parse(existing) : [];
      list.push(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      setHasEnlistedBefore(true);
      onEnlisted(record);
    } catch {
      onEnlisted(record);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="chamado" className="py-14 sm:py-24 md:py-30 bg-sacred-stone border-b border-[#b89047]/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* PAROQUIAL PILOT PRESENTATION */}
        <div id="projeto-paroquial" className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-cinzel text-[#8a6825] tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 font-semibold">
            <Church className="w-3.5 h-3.5 text-[#b89047]" />
            <span>Projeto Piloto Paroquial</span>
            <Church className="w-3.5 h-3.5 text-[#b89047]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#2c221c] tracking-tight">
            O Resgate do Altar na Paróquia
          </h2>

          <SacredDivider className="my-4 sm:my-5" />

          {/* Solemn Guiding Principle */}
          <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-[#faf7f2] border-y sm:border border-[#b89047]/30 shadow-2xs mb-6 sm:mb-8 text-left relative">
            <CornerFlourish position="top-right" />
            <span className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#8a6825] font-semibold block mb-1">
              Princípio Reitor
            </span>
            <p className="font-cormorant italic text-base sm:text-lg md:text-xl text-[#2c221c] leading-relaxed md:leading-loose">
              "Não propomos uma versão católico-tímida do Halloween. Propomos o combate pastoral direto: 
              restabelecer a soberania da Cruz por meio da simetria de <strong className="not-italic text-[#8a6825] font-semibold">PÃO EM TROCA DE ORAÇÕES</strong>."
            </p>
            <span className="block mt-2 font-cinzel text-[9px] sm:text-[10px] tracking-wider text-[#6a5649] text-right">
              — Dossiê «A Retomada do Altar»
            </span>
          </div>

          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#46382f] max-w-3xl mx-auto leading-relaxed md:leading-loose">
            O objetivo principal é a <strong className="font-semibold text-[#2c221c]">inscrição de famílias para o Projeto Paroquial</strong>. 
            Conheça as 4 fases que serão executadas:
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {/* Fase 1 */}
          <div className="border border-[#b89047]/35 bg-[#faf7f2]/95 p-4 sm:p-6 shadow-2xs relative flex flex-col justify-between">
            <CornerFlourish position="top-right" />
            <div>
              <div className="flex items-center gap-2.5 pb-2.5 mb-3 border-b border-[#b89047]/20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs shrink-0">
                  <BookOpen className="w-3.5 h-3.5 stroke-[1.4]" />
                </div>
                <div>
                  <span className="font-cinzel text-[9px] sm:text-[10px] text-[#8a6825] tracking-widest uppercase font-semibold block">
                    Fase 1 • Formação
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg text-[#2c221c] font-normal leading-tight">
                    Catequese & Doutrinação
                  </h3>
                </div>
              </div>
              <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-2.5">
                Formação profunda de catequistas, padres e leigos: realidades do Purgatório (CIC 1030), 
                Comunhão dos Santos (CIC 946) e o valor redentor da Esmola (CIC 2447).
              </p>
            </div>
            <div className="pt-2.5 border-t border-[#b89047]/15 text-[11px] sm:text-xs font-cinzel text-[#8a6825] tracking-wider">
              ✦ A clareza da Fé contra a tibieza
            </div>
          </div>

          {/* Fase 2 */}
          <div className="border border-[#b89047]/35 bg-[#faf7f2]/95 p-4 sm:p-6 shadow-2xs relative flex flex-col justify-between">
            <CornerFlourish position="top-right" />
            <div>
              <div className="flex items-center gap-2.5 pb-2.5 mb-3 border-b border-[#b89047]/20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs shrink-0">
                  <Wheat className="w-3.5 h-3.5 stroke-[1.4]" />
                </div>
                <div>
                  <span className="font-cinzel text-[9px] sm:text-[10px] text-[#8a6825] tracking-widest uppercase font-semibold block">
                    Fase 2 • Trabalho Comunitário
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg text-[#2c221c] font-normal leading-tight">
                    A Oficina do Pão das Almas
                  </h3>
                </div>
              </div>
              <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-2.5">
                Organizada na paróquia com as famílias: os adultos lideram o trabalho de amassar o trigo
                para que as crianças aprendam pelo exemplo, marcando as broas com a Cruz.
              </p>
            </div>
            <div className="pt-2.5 border-t border-[#b89047]/15 text-[11px] sm:text-xs font-cinzel text-[#8a6825] tracking-wider">
              ✦ O trigo amassado em comunidade
            </div>
          </div>

          {/* Fase 3 */}
          <div className="border border-[#b89047]/35 bg-[#faf7f2]/95 p-4 sm:p-6 shadow-2xs relative flex flex-col justify-between">
            <CornerFlourish position="top-right" />
            <div>
              <div className="flex items-center gap-2.5 pb-2.5 mb-3 border-b border-[#b89047]/20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5 stroke-[1.4]" />
                </div>
                <div>
                  <span className="font-cinzel text-[9px] sm:text-[10px] text-[#8a6825] tracking-widest uppercase font-semibold block">
                    Fase 3 • Escambo Sagrado
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg text-[#2c221c] font-normal leading-tight">
                    Pão por Oração
                  </h3>
                </div>
              </div>
              <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-2.5">
                Distribuição das broas às famílias assistidas e vizinhos sob o pacto sagrado:
                <em> "Aqui está o pão; sua parte é rezar pelas almas hoje."</em>
              </p>
            </div>
            <div className="pt-2.5 border-t border-[#b89047]/15 text-[11px] sm:text-xs font-cinzel text-[#8a6825] tracking-wider">
              ✦ "O trigo sacia o corpo; a prece liberta a alma"
            </div>
          </div>

          {/* Fase 4 */}
          <div className="border border-[#b89047]/35 bg-[#faf7f2]/95 p-4 sm:p-6 shadow-2xs relative flex flex-col justify-between">
            <CornerFlourish position="top-right" />
            <div>
              <div className="flex items-center gap-2.5 pb-2.5 mb-3 border-b border-[#b89047]/20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs shrink-0">
                  <Flame className="w-3.5 h-3.5 stroke-[1.4]" />
                </div>
                <div>
                  <span className="font-cinzel text-[9px] sm:text-[10px] text-[#8a6825] tracking-widest uppercase font-semibold block">
                    Fase 4 • Vigília & Missa
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg text-[#2c221c] font-normal leading-tight">
                    Procissão de Velas ao Altar
                  </h3>
                </div>
              </div>
              <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-2.5">
                Lanternas com velas e Procissão Paroquial no Dia de Todos os Santos,
                depositando os nomes dos defuntos aos pés do Altar na Santa Missa.
              </p>
            </div>
            <div className="pt-2.5 border-t border-[#b89047]/15 text-[11px] sm:text-xs font-cinzel text-[#8a6825] tracking-wider">
              ✦ Intenções aos pés do Santo Altar
            </div>
          </div>
        </div>

        {/* SACRED ENLISTMENT FORM CARD */}
        <div className="border border-[#b89047]/40 bg-[#fdfbf7] p-4 sm:p-8 md:p-10 shadow-sm relative">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#b89047]" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-cinzel uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#8a6825] font-semibold mb-1.5">
              <SacredQuatrefoil size={11} className="text-[#8a6825]" />
              <span>Inscrição Oficial</span>
              <SacredQuatrefoil size={11} className="text-[#8a6825]" />
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-normal text-[#2c221c]">
              Participe do Projeto
            </h3>
            <p className="font-cormorant text-sm sm:text-base md:text-lg text-[#5d4a3d] mt-1.5">
              Inscreva sua família para as frentes paroquiais ou confirme sua participação no lar.
            </p>
          </div>

          {hasEnlistedBefore && (
            <div className="mb-5 p-3.5 bg-[#f4efe7] border border-[#b89047]/30 text-xs sm:text-sm font-cormorant text-[#5d4a3d] flex items-center gap-2.5">
              <SacredQuatrefoil size={13} className="text-[#8a6825] shrink-0" />
              <span>Sua família já possui um registro. Caso deseje cadastrar outra pessoa, preencha abaixo:</span>
            </div>
          )}

          {errorMessage && (
            <div role="alert" aria-live="assertive" className="mb-5 p-3.5 bg-[#fbf0f0] border border-[#a83232] text-[#6b1c1c] text-xs sm:text-sm font-cormorant">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            
            {/* Modalidade Selector */}
            <div className="p-3.5 sm:p-4 bg-[#f4efe7]/80 border border-[#b89047]/30">
              <span className="block font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#2c221c] mb-2.5 font-semibold">
                Modalidade de Participação:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Opção Principal */}
                <button
                  type="button"
                  onClick={() => handleModeChange('paroquial')}
                  className={`p-3 sm:p-3.5 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    formData.mode === 'paroquial'
                      ? 'border-[#8a6825] bg-[#faf7f2] shadow-xs ring-1 ring-[#8a6825]'
                      : 'border-[#b89047]/30 bg-[#faf7f2]/50 hover:bg-[#faf7f2] opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="inline-flex items-center gap-1.5 font-cinzel text-xs font-semibold uppercase tracking-wider text-[#2c221c]">
                      <Church className="w-3.5 h-3.5 text-[#8a6825]" />
                      <span>Na Paróquia</span>
                    </span>
                    {formData.mode === 'paroquial' && (
                      <span className="px-1.5 py-0.5 text-[9px] font-cinzel uppercase tracking-wider bg-[#2c221c] text-[#faf7f2] font-semibold">
                        Principal
                      </span>
                    )}
                  </div>
                  <p className="font-cormorant text-xs sm:text-sm text-[#5d4a3d] leading-relaxed">
                    Participar da oficina de pães, entrega às famílias, procissão ou doação de trigo.
                  </p>
                </button>

                {/* Opção Secundária */}
                <button
                  type="button"
                  onClick={() => handleModeChange('domestico')}
                  className={`p-3 sm:p-3.5 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    formData.mode === 'domestico'
                      ? 'border-[#8a6825] bg-[#faf7f2] shadow-xs ring-1 ring-[#8a6825]'
                      : 'border-[#b89047]/30 bg-[#faf7f2]/50 hover:bg-[#faf7f2] opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="inline-flex items-center gap-1.5 font-cinzel text-xs font-semibold uppercase tracking-wider text-[#2c221c]">
                      <Home className="w-3.5 h-3.5 text-[#6a5649]" />
                      <span>No Lar (Em Casa)</span>
                    </span>
                    <span className="px-1.5 py-0.5 text-[9px] font-cinzel uppercase tracking-wider bg-[#f4efe7] border border-[#b89047]/30 text-[#6a5649]">
                      Secundário
                    </span>
                  </div>
                  <p className="font-cormorant text-xs sm:text-sm text-[#5d4a3d] leading-relaxed">
                    Assar os pães com a Cruz e acender a vela na janela de casa em família.
                  </p>
                </button>
              </div>
            </div>

            {/* Frente de Atuação / Papel */}
            <div className="form-group">
              <label 
                htmlFor="enlistment-role" 
                className="block font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#2c221c] mb-1 font-semibold"
              >
                {formData.mode === 'paroquial' 
                  ? 'Como gostaria de atuar na Paróquia?' 
                  : 'Compromisso no Lar:'}
              </label>

              {formData.mode === 'paroquial' ? (
                <select
                  id="enlistment-role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as EnlistmentForm['role'] })}
                  className="w-full px-3.5 py-2.5 min-h-[44px] bg-[#faf7f2] border border-[#b89047]/35 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-base cursor-pointer transition-all"
                >
                  <option value="oficina_paroquial">Oficina do Pão das Almas (amassar e assar)</option>
                  <option value="distribuicao_assistidas">Entrega de pães às famílias assistidas</option>
                  <option value="acao_direta">Ação Direta com vizinhos (Pão por Oração)</option>
                  <option value="procissao_vigilia">Procissão de Velas e Vigília do Altar</option>
                  <option value="doacao_ingredientes">Doação de trigo e ingredientes para a fornada</option>
                </select>
              ) : (
                <div className="p-3 bg-[#faf7f2] border border-[#b89047]/25 text-[#46382f] font-cormorant text-sm sm:text-base">
                  Assar os pãezinhos com a Santa Cruz em família, partilhar com orações e colocar a vela na janela em sufrágio pelas almas.
                </div>
              )}
            </div>

            {/* Grid: Nome Completo & Contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="form-group">
                <label 
                  htmlFor="enlistment-name" 
                  className="block font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#2c221c] mb-1 font-semibold"
                >
                  Seu Nome (ou Família)
                </label>
                <input
                  id="enlistment-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Família Souza Silva ou João Carlos"
                  className="w-full px-3.5 py-2.5 min-h-[44px] bg-[#faf7f2] border border-[#b89047]/35 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-base sm:text-lg placeholder-[#8a7b6f]/60 transition-all"
                />
              </div>

              <div className="form-group">
                <label 
                  htmlFor="enlistment-contact" 
                  className="block font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#2c221c] mb-1 font-semibold"
                >
                  WhatsApp ou E-mail
                </label>
                <input
                  id="enlistment-contact"
                  type="text"
                  required
                  autoComplete="email"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Para receber orientações"
                  className="w-full px-3.5 py-2.5 min-h-[44px] bg-[#faf7f2] border border-[#b89047]/35 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-base sm:text-lg placeholder-[#8a7b6f]/60 transition-all"
                />
              </div>
            </div>

            {/* Paróquia e Localidade */}
            <div className="form-group">
              <label 
                htmlFor="enlistment-parish" 
                className="block font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#2c221c] mb-1 font-semibold"
              >
                Sua Paróquia / Comunidade e Cidade
              </label>
              <input
                id="enlistment-parish"
                type="text"
                required
                value={formData.parishOrLocation}
                onChange={(e) => setFormData({ ...formData, parishOrLocation: e.target.value })}
                placeholder="Ex: Paróquia São José Operário — Curitiba / PR"
                className="w-full px-3.5 py-2.5 min-h-[44px] bg-[#faf7f2] border border-[#b89047]/35 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-base sm:text-lg placeholder-[#8a7b6f]/60 transition-all"
              />
            </div>

            {/* Cartão dos Defuntos */}
            <div className="form-group p-3 sm:p-4 bg-[#faf7f2] border border-[#b89047]/25">
              <div className="flex items-center gap-1.5 mb-1">
                <Flame className="w-3.5 h-3.5 text-[#8a6825]" />
                <label 
                  htmlFor="enlistment-deceased" 
                  className="block font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#2c221c] font-semibold"
                >
                  Nomes para o Altar (Opcional)
                </label>
              </div>
              <p className="font-cormorant text-xs sm:text-sm text-[#6a5649] mb-1.5 leading-relaxed">
                Nomes de familiares falecidos para serem colocados aos pés do Altar na Procissão e Missa de Finados:
              </p>
              <textarea
                id="enlistment-deceased"
                rows={2}
                value={formData.deceasedNames || ''}
                onChange={(e) => setFormData({ ...formData, deceasedNames: e.target.value })}
                placeholder="Ex: Antonio Souza (avô), Maria Silva (mãe)..."
                className="w-full px-3.5 py-2 bg-[#fdfbf7] border border-[#b89047]/30 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-base placeholder-[#8a7b6f]/60 transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                id="enlistment-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 min-h-[48px] px-4 sm:px-6 bg-[#2c221c] hover:bg-[#3d2f26] text-[#faf7f2] font-cinzel font-semibold text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.16em] uppercase transition-all duration-300 border border-[#b89047]/60 shadow-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40 text-center"
              >
                <SacredFlorentineCross size={14} className="text-[#dfc89d] shrink-0" />
                <span>
                  {isSubmitting
                    ? 'CONFIRMANDO...'
                    : formData.mode === 'paroquial'
                      ? 'CONFIRMAR INSCRIÇÃO NA PARÓQUIA'
                      : 'CONFIRMAR PARTICIPAÇÃO NO LAR'}
                </span>
              </button>
            </div>

            <div className="text-center">
              <span className="text-xs font-cormorant italic text-[#6a5649]">
                "O trigo sacia o corpo; o joelho dobrado liberta a alma."
              </span>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};
