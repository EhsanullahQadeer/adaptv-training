declare module '@/types/faq' {
  export interface FAQItem {
    question: string;
    answer: string;
    id: string;
  }

  export interface FAQsData {
    createdAt: string;
    updatedAt: string;
    globalType: string;
    faq: FAQItem[];
    id: string;
  }
}
