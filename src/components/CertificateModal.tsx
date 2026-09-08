import React, { useState, useEffect } from 'react';
import { EnlistmentRecord } from '../types';
import { X, Printer, Check, Copy } from 'lucide-react';
import { SacredQuatrefoil, SacredFlorentineCross, CornerFlourish } from './SacredOrnaments';

interface CertificateModalProps {
  record: EnlistmentRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  record,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !record) return null;

  const roleLabels: Record<string, string> = {
    oficina_paroquial: 'Oficina do Pão das Almas na Paróquia',
    distribuicao_assistidas: 'Entrega às Famílias Assistidas & Cartão dos Defuntos',
    acao_direta: 'Ação Direta • Escambo Sagrado («Pão por Oração»)',
    procissao_vigilia: 'Procissão Paroquial de Velas & Vigília do Altar',
    doacao_ingredientes: 'Doação de Trigo & Apoio à Fornada Paroquial',
    domestico_casa: 'Participação Familiar no Lar (Opção Secundária)',
    produzir: 'Oficina do Pão das Almas na Paróquia',
    distribuir: 'Ação Direta • Escambo Sagrado',
    financeiro: 'Doação de Trigo & Apoio à Fornada',
    vigilia: 'Vigília & Oração',
  };

  const handleCopyCode = () => {
    const text = `Comprovante de Inscrição — A Retomada do Altar\nNome: ${record.name}\nModalidade: ${record.mode === 'paroquial' ? 'Presencial na Paróquia (Principal)' : 'No Lar / Doméstico (Secundário)'}\nParóquia / Localidade: ${record.parishOrLocation}\nFrente de Atuação: ${roleLabels[record.role] || record.role}\nCódigo de Registro: ${record.code}${record.deceasedNames ? `\nIntenções para o Altar: ${record.deceasedNames}` : ''}\n"O trigo sacia o corpo; o joelho dobrado liberta a alma."`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#2c221c]/75 backdrop-blur-sm animate-fadeIn print-certificate-container"
      onClick={onClose}
      role="presentation"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#faf7f2] text-[#2c221c] border border-[#b89047]/50 shadow-2xl flex flex-col overflow-hidden max-h-[92vh] print-certificate-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <CornerFlourish position="top-left" />
        <CornerFlourish position="bottom-right" />

        {/* Certificate Top Header */}
        <div className="py-2.5 px-4 sm:px-5 bg-[#f4efe7] border-b border-[#b89047]/20 flex items-center justify-between text-[#5d4a3d] no-print">
          <div className="flex items-center gap-2 min-w-0">
            <SacredQuatrefoil size={13} className="text-[#8a6825] shrink-0" />
            <span id="certificate-modal-title" className="font-cinzel text-[11px] uppercase tracking-[0.16em] font-semibold text-[#8a6825] truncate">
              Comprovante Oficial de Inscrição • Projeto Piloto Paroquial
            </span>
          </div>
          <button 
            onClick={onClose}
            aria-label="Fechar Certificado"
            className="text-[#6a5649] hover:text-[#2c221c] transition-colors p-2 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Certificate Body */}
        <div className="p-5 sm:p-8 md:p-10 text-center space-y-4 sm:space-y-5 relative bg-sacred-vellum overflow-y-auto">
          {/* Subtle Arch Outline */}
          <div className="absolute inset-2 sm:inset-3 border border-[#b89047]/20 pointer-events-none" />

          {/* Crest */}
          <div className="mx-auto w-10 h-10 sm:w-11 sm:h-11 border border-[#b89047]/40 bg-[#f4efe7] flex items-center justify-center text-[#8a6825] shadow-2xs">
            <SacredFlorentineCross size={20} className="text-[#b89047]" />
          </div>

          <div>
            <span className="text-[11px] font-cinzel text-[#8a6825] tracking-[0.2em] uppercase font-semibold block mb-1">
              Testemunho de Aliança e Sufrágio
            </span>
            <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-normal text-[#2c221c] tracking-tight">
              Certificado de Guardião do Altar
            </h2>
            <div className="w-16 h-[1px] bg-[#b89047]/40 mx-auto mt-2 sm:mt-2.5" />
          </div>

          <p className="font-cormorant text-base sm:text-lg md:text-xl italic text-[#46382f] leading-relaxed md:leading-loose max-w-lg mx-auto">
            Certificamos solenemente que esta família assumiu compromisso no resgate do Tríduo das Almas 
            e no restabelecimento do escambo sagrado de pão em troca de orações:
          </p>

          {/* Enlisted Name Box */}
          <div className="border-y border-[#b89047]/30 py-2.5 sm:py-3 bg-[#f4efe7]/80 px-3">
            <span className="text-[10px] font-cinzel uppercase tracking-[0.18em] text-[#8a6825] block mb-0.5">
              Família / Guardião Inscrito
            </span>
            <span className="font-cinzel text-lg sm:text-xl md:text-2xl font-normal text-[#2c221c] tracking-wide break-words">
              {record.name}
            </span>
            {record.parishOrLocation && (
              <span className="block text-xs sm:text-sm font-cormorant text-[#6a5649] mt-0.5 font-semibold">
                {record.parishOrLocation}
              </span>
            )}
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left font-cormorant text-base bg-[#faf7f2] p-3.5 sm:p-4 border border-[#b89047]/20">
            <div>
              <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#8a6825] block font-semibold mb-0.5">
                Modalidade:
              </span>
              <span className="text-[#2c221c] text-sm sm:text-base font-semibold">
                {record.mode === 'paroquial' ? 'Presencial na Paróquia (Principal)' : 'No Lar / Doméstico (Secundário)'}
              </span>
            </div>

            <div>
              <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#8a6825] block font-semibold mb-0.5">
                Código de Registro:
              </span>
              <span className="font-mono text-xs text-[#8a6825] font-semibold tracking-wider">
                {record.code}
              </span>
            </div>

            <div className="sm:col-span-2">
              <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#8a6825] block font-semibold mb-0.5">
                Frente de Atuação Escolhida:
              </span>
              <span className="text-[#2c221c] text-sm sm:text-base">
                {roleLabels[record.role] || record.role}
              </span>
            </div>

            {record.deceasedNames && (
              <div className="sm:col-span-2 pt-2 border-t border-[#b89047]/15">
                <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#8a6825] block font-semibold mb-0.5">
                  Cartão dos Defuntos (Intenções para o Altar):
                </span>
                <span className="text-[#46382f] italic text-xs sm:text-sm block">
                  "{record.deceasedNames}"
                </span>
              </div>
            )}
          </div>

          {/* Solemn Quote */}
          <div className="text-xs sm:text-sm font-cormorant italic text-[#6a5649] border-l-2 border-[#b89047]/40 pl-3.5 text-left">
            "O Altar aguarda. A caridade pelas almas necessita de sua ação. Amasse o trigo, erga o estandarte e recupere o Reinado de Cristo hoje."
          </div>

          {/* Signatures & Seal */}
          <div className="pt-2.5 sm:pt-3 flex items-center justify-between border-t border-[#b89047]/20 text-[10px] sm:text-[11px] font-cinzel text-[#8a6825]">
            <div className="text-left">
              <span className="block font-semibold">Data do Registro:</span>
              <span className="text-[#5d4a3d]">{record.date}</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-[#8a6825]">
              <SacredQuatrefoil size={13} className="text-[#b89047]" />
              <span>RETOMADA DO ALTAR • PARÓQUIA</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="p-3 sm:p-4 bg-[#f4efe7] border-t border-[#b89047]/20 flex flex-wrap items-center justify-between gap-2.5 no-print">
          <button
            onClick={handleCopyCode}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[44px] border border-[#b89047]/40 bg-[#faf7f2] text-xs font-cinzel text-[#5d4a3d] hover:text-[#2c221c] hover:border-[#b89047] transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5 text-[#8a6825]" />}
            <span>{copied ? 'Copiado!' : 'Copiar Dados'}</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[44px] bg-[#faf7f2] hover:bg-[#fdfbf7] text-xs font-cinzel text-[#5d4a3d] border border-[#b89047]/30 hover:border-[#b89047] transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
            >
              <Printer className="w-3.5 h-3.5 text-[#8a6825]" />
              <span>Imprimir Certificado</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 min-h-[44px] flex items-center justify-center bg-[#2c221c] hover:bg-[#3d2f26] text-[#faf7f2] font-cinzel text-xs font-semibold uppercase tracking-wider border border-[#b89047]/50 transition-all cursor-pointer shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#b89047]/40"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

