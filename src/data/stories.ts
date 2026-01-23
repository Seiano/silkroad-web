export interface PatientStory {
  id: string;
  patientName: string;
  country: string;
  countryFlag: string;
  avatarUrl: string;
  title: string;
  highlight: string;
  treatmentType: string;
  city: string;
  hospitalName: string;
  savingsAmount: string;
  savingsPercentage: string;
  treatmentDays: number;
  thumbnailUrl: string;
  likes: number;
  comments: number;
  shares: number;
}

export const patientStories: PatientStory[] = [
  // Dental Cases
  {
    id: 'story-1',
    patientName: 'Michael Brown',
    country: 'United States',
    countryFlag: '🇺🇸',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    title: '4 Dental Implants for Less Than 1 in the US!',
    highlight: 'Needed 4 implants. US quote: $24K. Got all 4 done in Beijing for $5,200 with the same Swiss implants.',
    treatmentType: 'Dental Implants',
    city: 'Beijing',
    hospitalName: 'Peking University Stomatological Hospital',
    savingsAmount: '$18,800',
    savingsPercentage: '78%',
    treatmentDays: 7,
    thumbnailUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
    likes: 8400,
    comments: 562,
    shares: 1800
  },
  {
    id: 'story-2',
    patientName: 'Sarah Mitchell',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    title: 'Finally Got My Perfect Smile with Invisalign',
    highlight: 'Invisalign in London was £5,500. Got the exact same treatment in Shanghai for £1,800. Best decision ever!',
    treatmentType: 'Invisalign',
    city: 'Shanghai',
    hospitalName: 'Shanghai Ninth People\'s Hospital',
    savingsAmount: '$4,600',
    savingsPercentage: '67%',
    treatmentDays: 5,
    thumbnailUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800',
    likes: 12200,
    comments: 892,
    shares: 2400
  },
  
  // Eye Care Cases
  {
    id: 'story-3',
    patientName: 'James Wilson',
    country: 'Canada',
    countryFlag: '🇨🇦',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    title: 'Threw Away My Glasses After 25 Years!',
    highlight: 'LASIK in Canada: $5,500. Got SMILE surgery in Beijing for $1,800. Now seeing 20/20 without glasses!',
    treatmentType: 'SMILE Laser Eye Surgery',
    city: 'Beijing',
    hospitalName: 'Beijing Tongren Hospital',
    savingsAmount: '$3,700',
    savingsPercentage: '67%',
    treatmentDays: 3,
    thumbnailUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
    likes: 15600,
    comments: 1240,
    shares: 3100
  },
  {
    id: 'story-4',
    patientName: 'Margaret Chen',
    country: 'Australia',
    countryFlag: '🇦🇺',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    title: 'My Mom\'s Cataract Surgery - Smooth & Affordable',
    highlight: 'Brought my 72-year-old mom for cataract surgery. Premium lens, VIP care, all for $1,200. She sees clearly now!',
    treatmentType: 'Cataract Surgery',
    city: 'Shanghai',
    hospitalName: 'Shanghai Eye & ENT Hospital',
    savingsAmount: '$4,800',
    savingsPercentage: '80%',
    treatmentDays: 4,
    thumbnailUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
    likes: 9800,
    comments: 567,
    shares: 1500
  },

  // Health Checkup Cases
  {
    id: 'story-5',
    patientName: 'Robert Thompson',
    country: 'United States',
    countryFlag: '🇺🇸',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    title: 'Executive Health Checkup - Worth Every Penny',
    highlight: 'Full-body checkup with MRI, CT, all blood work, specialist consults. $600 vs $4,000+ in the US. Found early issue too!',
    treatmentType: 'Comprehensive Health Checkup',
    city: 'Beijing',
    hospitalName: 'Peking Union Medical College Hospital',
    savingsAmount: '$3,400',
    savingsPercentage: '85%',
    treatmentDays: 2,
    thumbnailUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800',
    likes: 7200,
    comments: 423,
    shares: 980
  },
  {
    id: 'story-6',
    patientName: 'Emma Davis',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    title: 'Gastroscopy Without the NHS Wait',
    highlight: '6-month NHS wait for gastroscopy. Flew to Guangzhou, done in 2 days. Painless, professional, $400 total.',
    treatmentType: 'Gastroscopy',
    city: 'Guangzhou',
    hospitalName: 'Sun Yat-sen University Hospital',
    savingsAmount: '$2,100',
    savingsPercentage: '84%',
    treatmentDays: 2,
    thumbnailUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
    likes: 6400,
    comments: 345,
    shares: 720
  },

  // TCM & Wellness Cases
  {
    id: 'story-7',
    patientName: 'Anna Petrova',
    country: 'Russia',
    countryFlag: '🇷🇺',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
    title: 'Traditional Chinese Medicine Changed My Life',
    highlight: 'Chronic fatigue for 3 years. 2 weeks of TCM in Beijing - acupuncture, herbs, massage. Energy restored, sleeping better!',
    treatmentType: 'TCM Wellness Program',
    city: 'Beijing',
    hospitalName: 'China-Japan Friendship Hospital',
    savingsAmount: '$3,500',
    savingsPercentage: '70%',
    treatmentDays: 14,
    thumbnailUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800',
    likes: 18200,
    comments: 1340,
    shares: 4200
  },
  {
    id: 'story-8',
    patientName: 'David Park',
    country: 'South Korea',
    countryFlag: '🇰🇷',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    title: 'Acupuncture Fixed My Back Pain',
    highlight: 'Lower back pain for 5 years. Western doctors said surgery. 10 acupuncture sessions in Beijing - 80% pain relief!',
    treatmentType: 'TCM Acupuncture',
    city: 'Beijing',
    hospitalName: 'Dongzhimen Hospital',
    savingsAmount: '$8,000',
    savingsPercentage: '90%',
    treatmentDays: 10,
    thumbnailUrl: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?w=800',
    likes: 11400,
    comments: 780,
    shares: 2100
  },

  // Skin & Beauty Cases
  {
    id: 'story-9',
    patientName: 'Lisa Anderson',
    country: 'United States',
    countryFlag: '🇺🇸',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    title: 'Acne Scars Gone After 4 Laser Sessions',
    highlight: 'Fractional laser treatment for acne scars. $800 for 4 sessions in Shenzhen vs $4,000 in LA. Amazing results!',
    treatmentType: 'Acne Scar Treatment',
    city: 'Shenzhen',
    hospitalName: 'Shenzhen University Hospital',
    savingsAmount: '$3,200',
    savingsPercentage: '80%',
    treatmentDays: 5,
    thumbnailUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800',
    likes: 21000,
    comments: 1680,
    shares: 5400
  },
  {
    id: 'story-10',
    patientName: 'Tom Richards',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
    title: 'Hair Transplant - My Confidence is Back!',
    highlight: 'Was quoted £12,000 in London. Got 2500 grafts FUE in Hangzhou for £3,200. Natural results, no one can tell!',
    treatmentType: 'Hair Transplant FUE',
    city: 'Hangzhou',
    hospitalName: 'Zhejiang University Hospital',
    savingsAmount: '$11,000',
    savingsPercentage: '73%',
    treatmentDays: 4,
    thumbnailUrl: 'https://images.unsplash.com/photo-1622253694238-3b22139576c6?w=800',
    likes: 14500,
    comments: 1120,
    shares: 3200
  },

  // Sports Medicine Cases
  {
    id: 'story-11',
    patientName: 'Chris Martinez',
    country: 'United States',
    countryFlag: '🇺🇸',
    avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop',
    title: 'Knee Arthroscopy - Back to Running in 6 Weeks',
    highlight: 'Meniscus tear from marathon running. $3,000 in Beijing vs $18,000 quoted in Boston. Same recovery, huge savings!',
    treatmentType: 'Knee Arthroscopy',
    city: 'Beijing',
    hospitalName: 'Peking University Third Hospital',
    savingsAmount: '$15,000',
    savingsPercentage: '83%',
    treatmentDays: 5,
    thumbnailUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    likes: 8900,
    comments: 612,
    shares: 1800
  },
  {
    id: 'story-12',
    patientName: 'Jennifer Lee',
    country: 'Singapore',
    countryFlag: '🇸🇬',
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    title: 'Fertility Testing Gave Us Hope',
    highlight: 'Comprehensive fertility workup for both of us. $500 total vs $3,500 in Singapore. Now we have a clear plan!',
    treatmentType: 'Fertility Assessment',
    city: 'Beijing',
    hospitalName: 'Peking University Third Hospital',
    savingsAmount: '$3,000',
    savingsPercentage: '86%',
    treatmentDays: 3,
    thumbnailUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800',
    likes: 16200,
    comments: 1450,
    shares: 3800
  },
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
