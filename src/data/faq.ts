export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'medical' | 'travel' | 'cost' | 'process';
}

export const faqs: FAQItem[] = [
  // General Questions
  {
    id: 'what-is-silkroad',
    question: 'What is SilkRoad Health and how do you help patients?',
    answer: 'SilkRoad Health is a medical tourism facilitator that helps international patients access world-class healthcare in Beijing, China. We provide end-to-end services including hospital matching, appointment scheduling, medical translation, visa assistance, accommodation, and 24/7 patient support throughout your treatment journey.',
    category: 'general',
  },
  {
    id: 'why-beijing',
    question: 'Why should I choose Beijing for my medical treatment?',
    answer: 'Beijing is home to China\'s top-ranked hospitals including Peking Union, Fuwai Hospital, and Beijing Tiantan Hospital. These facilities offer world-class medical care at 60-85% lower costs than the US/UK, with no wait times, cutting-edge technology, and highly experienced specialists who see more cases than their Western counterparts.',
    category: 'general',
  },
  {
    id: 'language-barrier',
    question: 'I don\'t speak Chinese. How will I communicate with doctors?',
    answer: 'We provide professional medical interpreters who accompany you to all appointments, consultations, and procedures. Our interpreters are trained in medical terminology and ensure accurate communication between you and your healthcare team. We also provide translated medical documents and 24/7 language support.',
    category: 'general',
  },

  // Medical Questions
  {
    id: 'quality-of-care',
    question: 'Is the quality of medical care in Beijing comparable to Western countries?',
    answer: 'Yes. Beijing\'s top hospitals are internationally accredited (JCI) and equipped with the latest medical technology. Many specialists have trained at leading institutions worldwide. Due to high patient volumes, Chinese surgeons often have significantly more experience than their Western counterparts - for example, Fuwai Hospital performs more heart surgeries annually than any hospital in the US.',
    category: 'medical',
  },
  {
    id: 'medical-records',
    question: 'How do I share my medical records with you?',
    answer: 'You can securely upload your medical records through our consultation form or email them to us. We accept all formats including PDF, images, and DICOM files. Our medical team will review your records and coordinate with Beijing specialists to provide an initial assessment and treatment plan.',
    category: 'medical',
  },
  {
    id: 'follow-up-care',
    question: 'What happens after I return home? How is follow-up care handled?',
    answer: 'We coordinate with your local doctors to ensure continuity of care. You\'ll receive detailed medical reports, treatment summaries, and medication instructions in English. Our team remains available for any questions, and we can arrange virtual follow-up consultations with your Beijing doctors if needed.',
    category: 'medical',
  },

  // Travel Questions
  {
    id: 'visa-requirements',
    question: 'What visa do I need to travel to China for medical treatment?',
    answer: 'Most patients travel on a tourist visa (L visa) or medical visa (M visa) depending on treatment duration. We provide invitation letters and supporting documents to facilitate your visa application. For treatments longer than 30 days, we recommend the medical visa. Our team guides you through the entire visa process.',
    category: 'travel',
  },
  {
    id: 'accommodation',
    question: 'Where will I stay during my treatment?',
    answer: 'We arrange accommodation based on your preferences and budget, from comfortable hotels near the hospital to serviced apartments for longer stays. All our recommended accommodations are within 15 minutes of your treatment facility, have English-speaking staff, and meet international standards.',
    category: 'travel',
  },
  {
    id: 'companion-travel',
    question: 'Can my family member accompany me?',
    answer: 'Absolutely! We encourage patients to travel with a companion for support. We can arrange accommodation, meals, and activities for your companion. They\'re welcome to accompany you to appointments (space permitting) and our team will help them feel comfortable throughout your stay in Beijing.',
    category: 'travel',
  },

  // Cost Questions
  {
    id: 'cost-breakdown',
    question: 'What is included in the treatment cost?',
    answer: 'Our quotes include: hospital fees, surgeon fees, anesthesia, operating room, medications, hospital stay, and basic nursing care. Additional costs such as accommodation, flights, meals, and our service fee are quoted separately. We provide detailed cost breakdowns with no hidden fees.',
    category: 'cost',
  },
  {
    id: 'payment-methods',
    question: 'How do I pay for my treatment?',
    answer: 'We accept international wire transfers, credit cards (Visa, Mastercard, Amex), and can arrange payment plans for certain procedures. A deposit is typically required to secure your appointment, with the balance due before treatment. All payments are made through secure, documented channels.',
    category: 'cost',
  },
  {
    id: 'insurance-coverage',
    question: 'Will my insurance cover treatment in China?',
    answer: 'Some international insurance plans cover overseas treatment. We recommend checking with your provider before traveling. We provide detailed invoices and medical documentation that you can submit for reimbursement. Many patients find that even without insurance, the savings make Beijing treatment very affordable.',
    category: 'cost',
  },

  // Process Questions
  {
    id: 'how-to-start',
    question: 'How do I get started?',
    answer: 'Simply fill out our free consultation form with your medical information and requirements. Our medical team will review your case within 24-48 hours and provide an initial assessment, recommended hospitals/specialists, and estimated costs. There\'s no obligation, and the consultation is completely free.',
    category: 'process',
  },
  {
    id: 'timeline',
    question: 'How long does the entire process take?',
    answer: 'From initial consultation to treatment can be as quick as 2-3 weeks for urgent cases. Typical timeline: consultation (2-3 days), hospital/doctor matching (3-5 days), travel arrangements (1-2 weeks), treatment (varies by procedure). We can expedite the process for urgent medical needs.',
    category: 'process',
  },
  {
    id: 'cancellation-policy',
    question: 'What if I need to cancel or reschedule?',
    answer: 'We understand plans can change. Cancellations made more than 14 days before your scheduled treatment receive a full refund minus administrative fees. For cancellations within 14 days, refund terms depend on hospital policies. We work with you to reschedule whenever possible to minimize any losses.',
    category: 'process',
  },
];

export const faqCategories = [
  { id: 'all', name: 'All Questions' },
  { id: 'general', name: 'General' },
  { id: 'medical', name: 'Medical Care' },
  { id: 'travel', name: 'Travel & Stay' },
  { id: 'cost', name: 'Costs & Payment' },
  { id: 'process', name: 'Process' },
];
