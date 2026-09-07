export interface EnlistmentForm {
  name: string;
  contact: string;
  parishOrLocation: string;
  mode: 'paroquial' | 'domestico';
  role: 'oficina_paroquial' | 'distribuicao_assistidas' | 'acao_direta' | 'procissao_vigilia' | 'doacao_ingredientes' | 'domestico_casa';
  deceasedNames?: string;
  notes?: string;
}

export interface EnlistmentRecord extends EnlistmentForm {
  id: string;
  date: string;
  code: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  theologicalContext?: string;
}

export interface PillarItem {
  numeral: string;
  title: string;
  description: string;
  detail: string;
}

export interface PrayerItem {
  id: string;
  title: string;
  subtitle: string;
  latinText?: string;
  portugueseText: string;
  rubric: string;
}
