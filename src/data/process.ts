export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Free Consultation',
    description: 'Share your medical records and requirements with our team for initial assessment.',
    icon: 'chat',
  },
  {
    step: 2,
    title: 'Medical Review',
    description: 'Our medical experts review your case and recommend suitable hospitals and specialists.',
    icon: 'clipboard',
  },
  {
    step: 3,
    title: 'Hospital Match',
    description: 'We connect you with the best hospital and doctor for your specific condition.',
    icon: 'hospital',
  },
  {
    step: 4,
    title: 'Travel Planning',
    description: 'We arrange your visa, flights, accommodation, and all logistics.',
    icon: 'plane',
  },
  {
    step: 5,
    title: 'Treatment',
    description: 'Receive world-class medical care with our full support and accompaniment.',
    icon: 'heart',
  },
  {
    step: 6,
    title: 'Follow-up Care',
    description: 'Post-treatment support and coordination with your home doctors.',
    icon: 'check',
  },
];
