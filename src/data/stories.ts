export interface PatientStory {
  id: string;
  patientName: string;
  country: string;
  countryFlag: string;
  title: string;
  highlight: string;
  treatmentType: string;
  hospitalId: string;
  hospitalName: string;
  savingsAmount: string;
  savingsPercentage: string;
  treatmentDays: number;
  videoUrl?: string;
  thumbnailUrl: string;
  likes: number;
  comments: number;
  shares: number;
}

export const patientStories: PatientStory[] = [
  {
    id: 'story-1',
    patientName: 'John Smith',
    country: 'United States',
    countryFlag: '🇺🇸',
    title: 'I Saved $85,000 on Heart Surgery in Beijing',
    highlight: 'Needed bypass surgery. US quote: $120K. Beijing: $35K with world-class care.',
    treatmentType: 'Cardiac Bypass Surgery',
    hospitalId: 'fuwai',
    hospitalName: 'Fuwai Hospital',
    savingsAmount: '$85,000',
    savingsPercentage: '71%',
    treatmentDays: 14,
    thumbnailUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
    likes: 12400,
    comments: 892,
    shares: 2100
  },
  {
    id: 'story-2',
    patientName: 'Emma Wilson',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    title: 'Brain Tumor Removed - Back to Life in 3 Weeks',
    highlight: 'Diagnosed with brain tumor. NHS wait: 6 months. Beijing Tiantan: 3 weeks total.',
    treatmentType: 'Brain Tumor Surgery',
    hospitalId: 'tiantan',
    hospitalName: 'Beijing Tiantan Hospital',
    savingsAmount: '$95,000',
    savingsPercentage: '68%',
    treatmentDays: 21,
    thumbnailUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    likes: 18200,
    comments: 1240,
    shares: 3400
  },
  {
    id: 'story-3',
    patientName: 'Sarah & Michael Davis',
    country: 'Australia',
    countryFlag: '🇦🇺',
    title: 'Our IVF Journey - Twins After 5 Failed Attempts',
    highlight: '5 failed IVF cycles in Australia. First success in Beijing. Now proud parents of twins!',
    treatmentType: 'IVF / Fertility Treatment',
    hospitalId: 'peking-third',
    hospitalName: 'Peking University Third Hospital',
    savingsAmount: '$25,000',
    savingsPercentage: '65%',
    treatmentDays: 28,
    thumbnailUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800',
    likes: 24500,
    comments: 2100,
    shares: 5600
  },
  {
    id: 'story-4',
    patientName: 'Robert Johnson',
    country: 'Canada',
    countryFlag: '🇨🇦',
    title: 'Hip Replacement at 62 - Dancing Again!',
    highlight: 'Canadian wait time: 18 months. Beijing: 2 weeks. Dancing at my daughter\'s wedding!',
    treatmentType: 'Hip Replacement Surgery',
    hospitalId: 'peoples-hospital',
    hospitalName: 'Peking University People\'s Hospital',
    savingsAmount: '$60,000',
    savingsPercentage: '75%',
    treatmentDays: 12,
    thumbnailUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    likes: 9800,
    comments: 567,
    shares: 1200
  },
  {
    id: 'story-5',
    patientName: 'Anna Petrova',
    country: 'Russia',
    countryFlag: '🇷🇺',
    title: 'Cancer Treatment Saved My Life - And My Savings',
    highlight: 'Stage 3 breast cancer. Latest immunotherapy in Beijing. In remission, $120K saved.',
    treatmentType: 'Cancer Immunotherapy',
    hospitalId: 'cancer-hospital',
    hospitalName: 'National Cancer Center',
    savingsAmount: '$120,000',
    savingsPercentage: '60%',
    treatmentDays: 45,
    thumbnailUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    likes: 31200,
    comments: 2800,
    shares: 7200
  },
  {
    id: 'story-6',
    patientName: 'James Thompson',
    country: 'United States',
    countryFlag: '🇺🇸',
    title: 'Spine Surgery Fixed 10 Years of Back Pain',
    highlight: 'Chronic back pain for 10 years. One surgery in Beijing, pain-free life now.',
    treatmentType: 'Spinal Fusion Surgery',
    hospitalId: 'pla-301',
    hospitalName: 'PLA General Hospital',
    savingsAmount: '$45,000',
    savingsPercentage: '70%',
    treatmentDays: 10,
    thumbnailUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
    likes: 8900,
    comments: 445,
    shares: 980
  },
  {
    id: 'story-7',
    patientName: 'Maria Garcia',
    country: 'Spain',
    countryFlag: '🇪🇸',
    title: 'Traditional Chinese Medicine Changed Everything',
    highlight: 'Chronic fatigue for years. 3 weeks of TCM in Beijing. Energy restored, life transformed.',
    treatmentType: 'Traditional Chinese Medicine',
    hospitalId: 'china-japan',
    hospitalName: 'China-Japan Friendship Hospital',
    savingsAmount: '$15,000',
    savingsPercentage: '80%',
    treatmentDays: 21,
    thumbnailUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800',
    likes: 15600,
    comments: 1340,
    shares: 2800
  },
  {
    id: 'story-8',
    patientName: 'David Chen',
    country: 'United States',
    countryFlag: '🇺🇸',
    title: 'Complex Surgery That US Doctors Refused',
    highlight: 'Rare condition. 5 US hospitals said no. Beijing Peking Union said yes. Fully recovered.',
    treatmentType: 'Complex Tumor Resection',
    hospitalId: 'peking-union',
    hospitalName: 'Peking Union Medical College Hospital',
    savingsAmount: '$150,000',
    savingsPercentage: '65%',
    treatmentDays: 30,
    thumbnailUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
    likes: 42000,
    comments: 3600,
    shares: 9800
  }
];

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};
