/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DiagnosisSection } from './components/DiagnosisSection';
import { HistorySection } from './components/HistorySection';
import { PracticalSection } from './components/PracticalSection';
import { RiteOfLightSection } from './components/RiteOfLightSection';
import { EnlistmentSection } from './components/EnlistmentSection';
import { Footer } from './components/Footer';
import { PrayersModal } from './components/PrayersModal';
import { CertificateModal } from './components/CertificateModal';
import { EnlistmentRecord } from './types';

export default function App() {
  const [isPrayersOpen, setIsPrayersOpen] = useState(false);
  const [certificateRecord, setCertificateRecord] = useState<EnlistmentRecord | null>(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const handleEnlisted = (record: EnlistmentRecord) => {
    setCertificateRecord(record);
    setIsCertificateOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2c221c] font-cormorant selection:bg-[#dfc89d] selection:text-[#2c221c] flex flex-col">
      {/* Liturgical Navigation Bar */}
      <Header
        onOpenPrayers={() => setIsPrayersOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Block */}
        <HeroSection />

        {/* Section 2: Diagnóstico (A Inversão do Inferno) */}
        <DiagnosisSection />

        {/* Section 3: Ruptura Histórica (A Raiz da Desgraça) */}
        <HistorySection />

        {/* Section 4: Retomada Prática (Pão por Oração) */}
        <PracticalSection
          onOpenPrayers={() => setIsPrayersOpen(true)}
        />

        {/* Section 5: Rito da Luz */}
        <RiteOfLightSection />

        {/* Section 6: Alistamento na Cruzada */}
        <EnlistmentSection onEnlisted={handleEnlisted} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <PrayersModal
        isOpen={isPrayersOpen}
        onClose={() => setIsPrayersOpen(false)}
      />

      <CertificateModal
        record={certificateRecord}
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />
    </div>
  );
}
