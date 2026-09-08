import React, { useState, useEffect } from 'react';
import { EnlistmentForm, EnlistmentRecord } from '../types';
import { Church, BookOpen, Flame, HeartHandshake, Wheat, Check, Sparkles, Home } from 'lucide-react';
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
      setErrorMessage('Por favor, informe sua Paróquia e Cidade para direcionamento da coordenação.');
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
    <section id="chamado" className="py-20 sm:py-32 bg-sacred-stone border-b border-[#b89047]/20 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* PAROQUIAL PILOT PRESENTATION: SEÇÃO VII DO MANUAL DE RETOMADA */}
        {/* ========================================================================= */}
        <div id="projeto-paroquial" className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] font-cinzel text-[#8a6825] tracking-[0.2em] uppercase mb-3 font-semibold">
            <Church className="w-3.5 h-3.5 text-[#b89047]" />
            <span>Manual de Retomada • Projeto Piloto Paroquial</span>
            <Church className="w-3.5 h-3.5 text-[#b89047]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#2c221c] tracking-tight">
            O Resgate do Altar na Paróquia
          </h2>

          <SacredDivider className="my-5" />

          {/* Solemn Guiding Principle from the Dossier */}
          <div className="max-w-3xl mx-auto p-5 sm:p-6 bg-[#faf7f2] border-y sm:border border-[#b89047]/30 shadow-2xs mb-8 text-left relative">
            <CornerFlourish position="top-right" />
            <span className="font-cinzel text-[11px] uppercase tracking-[0.16em] text-[#8a6825] font-semibold block mb-1">
              Princípio Reitor do Projeto Piloto
            </span>
            <p className="font-cormorant italic text-lg sm:text-xl text-[#2c221c] leading-relaxed md:leading-loose">
              "Não propomos uma versão católico-tímida do Halloween americano. Propomos o combate pastoral direto. 
              O objetivo é restabelecer a soberania da Cruz sobre o tempo por meio de ações concretas assentes na simetria 
              de <strong className="not-italic text-[#8a6825] font-semibold">PÃO EM TROCA DE ORAÇÕES</strong>."
            </p>
            <span className="block mt-2 font-cinzel text-[10px] tracking-wider text-[#6a5649] text-right">
              — Seção VII do Dossiê «A Retomada do Altar»
            </span>
          </div>

          <p className="font-cormorant text-xl sm:text-2xl text-[#46382f] max-w-3xl mx-auto leading-relaxed md:leading-loose">
            O objetivo primordial é a <strong className="font-semibold text-[#2c221c]">inscrição de famílias para atuarem no Projeto Piloto na Paróquia</strong>. 
            A realização individual em casa é uma alternativa secundária para quem não puder estar presente. 
            Conheça as 4 fases que serão executadas:
          </p>
        </div>

        {/* 4 Phases Grid from Section VII of the PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Fase 1 */}
          <div className="border border-[#b89047]/35 bg-[#faf7f2]/95 p-6 sm:p-7 shadow-2xs relative flex flex-col justify-between">
            <CornerFlourish position="top-right" />
            <div>
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#b89047]/20">
                <div className="w-8 h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs">
                  <BookOpen className="w-4 h-4 stroke-[1.4]" />
                </div>
                <div>
                  <span className="font-cinzel text-[10px] text-[#8a6825] tracking-widest uppercase font-semibold block">
                    Fase 1 • Formação Pastoral
                  </span>
                  <h3 className="font-cinzel text-lg text-[#2c221c] font-normal leading-tight">
                    Catequese & Doutrinação Teológica
                  </h3>
                </div>
              </div>
              <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-3">
                Formação profunda e séria de catequistas, padres e leigos. O ensino se apoia na gravidade das realidades do Purgatório (CIC 1030), 
                no intercâmbio de bens da Comunhão dos Santos (CIC 946), no valor redentor da Esmola (CIC 2447) e na condenação 
                inegociável das artes mágicas e esotéricas (CIC 2115).
              </p>
            </div>
            <div className="pt-3 border-t border-[#b89047]/15 text-xs font-cinzel text-[#8a6825] tracking-wider">
              ✦ A clareza da Fé contra a tibieza espiritual
            </div>
          </div>

          {/* Fase 2 */}
          <div className="border border-[#b89047]/35 bg-[#faf7f2]/95 p-6 sm:p-7 shadow-2xs relative flex flex-col justify-between">
            <CornerFlourish position="top-right" />
            <div>
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#b89047]/20">
                <div className="w-8 h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs">
                  <Wheat className="w-4 h-4 stroke-[1.4]" />
                </div>
                <div>
                  <span className="font-cinzel text-[10px] text-[#8a6825] tracking-widest uppercase font-semibold block">
                    Fase 2 • Trabalho Comunitário
                  </span>
                  <h3 className="font-cinzel text-lg text-[#2c221c] font-normal leading-tight">
                    A Oficina do Pão das Almas
                  </h3>
                </div>
              </div>
              <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-3">
                Organizada na paróquia antes do início do Tríduo com as famílias. Os adultos lideram o trabalho manual de amassar 
                o trigo para que as crianças aprendam pelo testemunho prático. Elimina-se o preciosismo moderno com receitas: 
                trata-se de um ato físico e penitencial de fazer o pão comunitário, marcando as broas com o sinal da Cruz.
              </p>
            </div>
            <div className="pt-3 border-t border-[#b89047]/15 text-xs font-cinzel text-[#8a6825] tracking-wider">
              ✦ O trigo amassado em comunidade para sufrágio
            </div>
          </div>

          {/* Fase 3 */}
          <div className="border border-[#b89047]/35 bg-[#faf7f2]/95 p-6 sm:p-7 shadow-2xs relative flex flex-col justify-between">
            <CornerFlourish position="top-right" />
            <div>
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#b89047]/20">
                <div className="w-8 h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs">
                  <HeartHandshake className="w-4 h-4 stroke-[1.4]" />
                </div>
                <div>
                  <span className="font-cinzel text-[10px] text-[#8a6825] tracking-widest uppercase font-semibold block">
                    Fase 3 • O Coração Litúrgico
                  </span>
                  <h3 className="font-cinzel text-lg text-[#2c221c] font-normal leading-tight">
                    O Escambo Sagrado: Pão por Oração
                  </h3>
                </div>
              </div>
              <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-3">
                Distribuição massiva em três frentes:
                <span className="block mt-1"><strong>1. Famílias Assistidas:</strong> recebem as broas assumindo a obrigação de rezar pelas almas e preenchem o Cartão dos Defuntos para a paróquia inteira sufragar nas Missas.</span>
                <span className="block mt-1"><strong>2. Ação Direta de Rua:</strong> famílias levam cotas de pães para vizinhos: <em>"Aqui está o pão; a sua parte é rezar pelas almas hoje."</em></span>
                <span className="block mt-1"><strong>3. Comunhão à Mesa:</strong> partilha do trigo doméstico com oração pelas almas.</span>
              </p>
            </div>
            <div className="pt-3 border-t border-[#b89047]/15 text-xs font-cinzel text-[#8a6825] tracking-wider">
              ✦ "O trigo sacia o corpo; o joelho dobrado liberta a alma"
            </div>
          </div>

          {/* Fase 4 */}
          <div className="border border-[#b89047]/35 bg-[#faf7f2]/95 p-6 sm:p-7 shadow-2xs relative flex flex-col justify-between">
            <CornerFlourish position="top-right" />
            <div>
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#b89047]/20">
                <div className="w-8 h-8 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs">
                  <Flame className="w-4 h-4 stroke-[1.4]" />
                </div>
                <div>
                  <span className="font-cinzel text-[10px] text-[#8a6825] tracking-widest uppercase font-semibold block">
                    Fase 4 • Vigília & Santa Missa
                  </span>
                  <h3 className="font-cinzel text-lg text-[#2c221c] font-normal leading-tight">
                    Vigília de Luz & Procissão ao Altar
                  </h3>
                </div>
              </div>
              <p className="font-cormorant text-base sm:text-lg text-[#46382f] leading-relaxed md:leading-loose mb-3">
                Bane-se a abóbora comercial e resgatam-se as tradicionais Lanternas de Turnipo (Nabo ou beterraba) com velas 
                na janela na véspera. No Dia de Todos os Santos, a paróquia realiza a solene Procissão de Velas, depositando os 
                Cartões dos Defuntos e intenções aos pés do Altar, culminando na Santa Missa no Dia de Finados.
              </p>
            </div>
            <div className="pt-3 border-t border-[#b89047]/15 text-xs font-cinzel text-[#8a6825] tracking-wider">
              ✦ As intenções depositadas aos pés do Santo Altar
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SACRED ENLISTMENT FORM CARD */}
        {/* ========================================================================= */}
        <div className="border border-[#b89047]/40 bg-[#fdfbf7] p-6 sm:p-10 md:p-12 shadow-sm relative">
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#b89047]" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#8a6825] font-semibold mb-2">
              <SacredQuatrefoil size={11} className="text-[#8a6825]" />
              <span>Inscrição Oficial do Projeto</span>
              <SacredQuatrefoil size={11} className="text-[#8a6825]" />
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-normal text-[#2c221c]">
              Participe do Projeto na Paróquia
            </h3>
            <p className="font-cormorant text-base sm:text-lg text-[#5d4a3d] mt-2">
              Inscreva sua família para as frentes ativas do projeto paroquial. 
              Caso resida longe ou não possa estar presencialmente, selecione a opção secundária para realizar no lar.
            </p>
          </div>

          {hasEnlistedBefore && (
            <div className="mb-6 p-4 bg-[#f4efe7] border border-[#b89047]/30 text-sm font-cormorant text-[#5d4a3d] flex items-center gap-3">
              <SacredQuatrefoil size={14} className="text-[#8a6825] shrink-0" />
              <span>Sua família já possui um registro de participação! Se desejar cadastrar outra pessoa ou atualizar seus dados, preencha o formulário abaixo.</span>
            </div>
          )}

          {errorMessage && (
            <div role="alert" aria-live="assertive" className="mb-6 p-4 bg-[#fbf0f0] border border-[#a83232] text-[#6b1c1c] text-sm font-cormorant">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Modalidade Selector: Principal (Paróquia) vs Secundário (Em Casa) */}
            <div className="p-4 sm:p-5 bg-[#f4efe7]/80 border border-[#b89047]/30">
              <span className="block font-cinzel text-xs uppercase tracking-[0.14em] text-[#2c221c] mb-3 font-semibold">
                Escolha a sua Modalidade de Participação:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Opção Principal: Na Paróquia */}
                <button
                  type="button"
                  onClick={() => handleModeChange('paroquial')}
                  className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    formData.mode === 'paroquial'
                      ? 'border-[#8a6825] bg-[#faf7f2] shadow-xs ring-1 ring-[#8a6825]'
                      : 'border-[#b89047]/30 bg-[#faf7f2]/50 hover:bg-[#faf7f2] opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 font-cinzel text-xs font-semibold uppercase tracking-wider text-[#2c221c]">
                      <Church className="w-3.5 h-3.5 text-[#8a6825]" />
                      <span>Na Paróquia (Principal)</span>
                    </span>
                    {formData.mode === 'paroquial' && (
                      <span className="px-2 py-0.5 text-[9px] font-cinzel uppercase tracking-wider bg-[#2c221c] text-[#faf7f2] font-semibold">
                        Principal
                      </span>
                    )}
                  </div>
                  <p className="font-cormorant text-sm text-[#5d4a3d] leading-relaxed md:leading-loose">
                    Quero me envolver presencialmente: na oficina comunitária de pães, na entrega às famílias assistidas, na procissão ou doando trigo para a paróquia.
                  </p>
                </button>

                {/* Opção Secundária: No Lar */}
                <button
                  type="button"
                  onClick={() => handleModeChange('domestico')}
                  className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    formData.mode === 'domestico'
                      ? 'border-[#8a6825] bg-[#faf7f2] shadow-xs ring-1 ring-[#8a6825]'
                      : 'border-[#b89047]/30 bg-[#faf7f2]/50 hover:bg-[#faf7f2] opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 font-cinzel text-xs font-semibold uppercase tracking-wider text-[#2c221c]">
                      <Home className="w-3.5 h-3.5 text-[#6a5649]" />
                      <span>No Lar / Em Casa (Secundário)</span>
                    </span>
                    <span className="px-2 py-0.5 text-[9px] font-cinzel uppercase tracking-wider bg-[#f4efe7] border border-[#b89047]/30 text-[#6a5649]">
                      Opção Secundária
                    </span>
                  </div>
                  <p className="font-cormorant text-sm text-[#5d4a3d] leading-relaxed md:leading-loose">
                    Não posso estar presencialmente na paróquia, mas quero viver a tradição em família: assando pães caseiros com a Cruz e colocando a vela na janela de casa.
                  </p>
                </button>
              </div>
            </div>

            {/* Frente de Atuação / Papel */}
            <div className="form-group">
              <label 
                htmlFor="enlistment-role" 
                className="block font-cinzel text-xs uppercase tracking-[0.14em] text-[#2c221c] mb-1.5 font-semibold"
              >
                {formData.mode === 'paroquial' 
                  ? 'Como você e sua família gostariam de atuar na Paróquia?' 
                  : 'Compromisso da Família no Lar:'}
              </label>

              {formData.mode === 'paroquial' ? (
                <select
                  id="enlistment-role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as EnlistmentForm['role'] })}
                  className="w-full px-4 py-2.5 min-h-[44px] bg-[#faf7f2] border border-[#b89047]/35 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-base cursor-pointer transition-all"
                >
                  <option value="oficina_paroquial">Participar da Oficina do Pão das Almas (amassar o trigo e assar na paróquia)</option>
                  <option value="distribuicao_assistidas">Entrega de pães e Cartão dos Defuntos às famílias assistidas da paróquia</option>
                  <option value="acao_direta">Ação Direta com vizinhos (levar cota de broas sob o pacto de preces pelas almas)</option>
                  <option value="procissao_vigilia">Participar da Procissão Paroquial de Velas e Vigília do Altar</option>
                  <option value="doacao_ingredientes">Apoiar com doação de sacos de trigo e ingredientes para a fornada da paróquia</option>
                </select>
              ) : (
                <div className="p-3.5 bg-[#faf7f2] border border-[#b89047]/25 text-[#46382f] font-cormorant text-base">
                  <span className="font-cinzel text-xs font-semibold text-[#8a6825] uppercase tracking-wider block mb-1">
                    Compromisso Doméstico no Lar:
                  </span>
                  Assar os pãezinhos caseiros com a Santa Cruz em família, partilhar com orações e colocar a vela na janela em sufrágio pelas Almas do Purgatório.
                </div>
              )}
            </div>

            {/* Grid: Nome Completo & Contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-group">
                <label 
                  htmlFor="enlistment-name" 
                  className="block font-cinzel text-xs uppercase tracking-[0.14em] text-[#2c221c] mb-1.5 font-semibold"
                >
                  Seu Nome Completo (ou Nome da Família)
                </label>
                <input
                  id="enlistment-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Família Souza Silva ou João Carlos"
                  className="w-full px-4 py-2.5 min-h-[44px] bg-[#faf7f2] border border-[#b89047]/35 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-lg placeholder-[#8a7b6f]/60 transition-all"
                />
              </div>

              <div className="form-group">
                <label 
                  htmlFor="enlistment-contact" 
                  className="block font-cinzel text-xs uppercase tracking-[0.14em] text-[#2c221c] mb-1.5 font-semibold"
                >
                  Seu WhatsApp ou E-mail
                </label>
                <input
                  id="enlistment-contact"
                  type="text"
                  required
                  autoComplete="email"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Para a coordenação paroquial enviar horários"
                  className="w-full px-4 py-2.5 min-h-[44px] bg-[#faf7f2] border border-[#b89047]/35 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-lg placeholder-[#8a7b6f]/60 transition-all"
                />
              </div>
            </div>

            {/* Paróquia e Localidade */}
            <div className="form-group">
              <label 
                htmlFor="enlistment-parish" 
                className="block font-cinzel text-xs uppercase tracking-[0.14em] text-[#2c221c] mb-1.5 font-semibold"
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
                className="w-full px-4 py-2.5 min-h-[44px] bg-[#faf7f2] border border-[#b89047]/35 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-lg placeholder-[#8a7b6f]/60 transition-all"
              />
            </div>

            {/* Cartão dos Defuntos: Intenções para o Altar (Fase 3 e 4 do Manual) */}
            <div className="form-group p-4 bg-[#faf7f2] border border-[#b89047]/25">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Flame className="w-3.5 h-3.5 text-[#8a6825]" />
                <label 
                  htmlFor="enlistment-deceased" 
                  className="block font-cinzel text-xs uppercase tracking-[0.14em] text-[#2c221c] font-semibold"
                >
                  Cartão dos Defuntos • Nomes para o Altar (Opcional)
                </label>
              </div>
              <p className="font-cormorant text-xs sm:text-sm text-[#6a5649] mb-2 leading-relaxed md:leading-loose">
                Conforme a Fase 3 e 4 do projeto, as intenções serão depositadas aos pés do Altar durante a Procissão de Velas e sufragadas nas Missas de Finados. Escreva abaixo os nomes dos seus entes queridos falecidos:
              </p>
              <textarea
                id="enlistment-deceased"
                rows={2}
                value={formData.deceasedNames || ''}
                onChange={(e) => setFormData({ ...formData, deceasedNames: e.target.value })}
                placeholder="Ex: Antonio Souza (avô), Maria Silva (mãe), almas mais abandonadas..."
                className="w-full px-4 py-2 bg-[#fdfbf7] border border-[#b89047]/30 focus:border-[#b89047] focus:ring-2 focus:ring-[#b89047]/35 focus:outline-none text-[#2c221c] font-cormorant text-base placeholder-[#8a7b6f]/60 transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                id="enlistment-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 min-h-[48px] px-6 bg-[#2c221c] hover:bg-[#3d2f26] text-[#faf7f2] font-cinzel font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 border border-[#b89047]/60 shadow-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
              >
                <SacredFlorentineCross size={15} className="text-[#dfc89d]" />
                <span>
                  {isSubmitting
                    ? 'REGISTRANDO NO LIVRO PAROQUIAL...'
                    : formData.mode === 'paroquial'
                      ? 'INSCREVER MINHA FAMÍLIA NO PROJETO PAROQUIAL'
                      : 'CONFIRMAR PARTICIPAÇÃO NO LAR (SECUNDÁRIO)'}
                </span>
              </button>
            </div>

            <div className="text-center">
              <span className="text-xs font-cormorant italic text-[#6a5649]">
                "O Altar aguarda. A caridade pelas almas necessita de sua ação. Amasse o trigo, erga o estandarte e recupere o Reinado de Cristo hoje."
              </span>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};
