export interface Service {
  id: string;
  icon: string;
  title: string;
  titleCn: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'accompaniment',
    icon: 'users',
    title: 'End-to-End Patient Care',
    titleCn: '一站式全程陪诊',
    description: 'Personal medical coordinators accompany you throughout your entire treatment journey, from arrival to departure.',
    features: [
      'Airport pickup and transfers',
      'Hospital appointment scheduling',
      'Medical procedure accompaniment',
      'Post-treatment care coordination',
    ],
  },
  {
    id: 'translation',
    icon: 'language',
    title: 'Professional Medical Translation',
    titleCn: '专业医疗翻译',
    description: 'Certified medical interpreters ensure clear communication between you and your healthcare providers.',
    features: [
      'Real-time interpretation during consultations',
      'Medical document translation',
      'Treatment plan explanation',
      '24/7 language support',
    ],
  },
  {
    id: 'registration',
    icon: 'calendar',
    title: 'VIP Express Registration',
    titleCn: 'VIP快速挂号',
    description: 'Priority access to top specialists and departments, skipping long wait times.',
    features: [
      'Priority appointment booking',
      'Access to renowned specialists',
      'Expedited medical procedures',
      'Dedicated VIP patient services',
    ],
  },
  {
    id: 'travel',
    icon: 'plane',
    title: 'Complete Travel Arrangements',
    titleCn: '食宿交通安排',
    description: 'We handle all logistics so you can focus on your health and recovery.',
    features: [
      'Hotel accommodation near hospitals',
      'Private transportation',
      'Visa assistance',
      'Local dining recommendations',
    ],
  },
];
