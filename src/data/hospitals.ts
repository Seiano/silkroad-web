export interface Hospital {
  id: string;
  name: string;
  nameZh: string;
  level: string;
  image: string;
  specialties: string[];
  rating: number;
  internationalSavings: string;
  consultationFeeFrom: number;
  highlights: string[];
  description: string;
}

export const hospitals: Hospital[] = [
  {
    id: 'peking-union',
    name: 'Peking Union Medical College Hospital',
    nameZh: '北京协和医院',
    level: 'AAA (Top Tier)',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800',
    specialties: ['Oncology', 'Cardiology', 'Neurology', 'Internal Medicine'],
    rating: 4.9,
    internationalSavings: '60-80%',
    consultationFeeFrom: 50,
    highlights: ['Top 1 Hospital in China', 'World-class specialists', 'JCI Accredited'],
    description: 'Founded in 1921, PUMCH is consistently ranked as China\'s #1 hospital with world-renowned expertise in complex medical cases.'
  },
  {
    id: 'pla-301',
    name: 'PLA General Hospital (301 Hospital)',
    nameZh: '中国人民解放军总医院',
    level: 'AAA (Top Tier)',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    specialties: ['Cardiac Surgery', 'Orthopedics', 'Neurosurgery', 'Oncology'],
    rating: 4.8,
    internationalSavings: '65-85%',
    consultationFeeFrom: 45,
    highlights: ['Military Hospital Excellence', 'Advanced Cardiac Center', 'International VIP Services'],
    description: 'China\'s top military hospital offering cutting-edge treatments with state-of-the-art facilities and experienced surgeons.'
  },
  {
    id: 'peking-third',
    name: 'Peking University Third Hospital',
    nameZh: '北京大学第三医院',
    level: 'AAA (Top Tier)',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
    specialties: ['Reproductive Medicine', 'Sports Medicine', 'Orthopedics', 'Ophthalmology'],
    rating: 4.8,
    internationalSavings: '70-85%',
    consultationFeeFrom: 40,
    highlights: ['China\'s First IVF Baby', 'Top Fertility Center', 'Olympic Athletes Treatment'],
    description: 'World-famous for reproductive medicine - birthplace of China\'s first IVF baby. Leading sports medicine and orthopedics.'
  },
  {
    id: 'china-japan',
    name: 'China-Japan Friendship Hospital',
    nameZh: '中日友好医院',
    level: 'AAA (Top Tier)',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800',
    specialties: ['Traditional Chinese Medicine', 'Integrative Medicine', 'Pulmonology', 'Dermatology'],
    rating: 4.7,
    internationalSavings: '70-90%',
    consultationFeeFrom: 35,
    highlights: ['TCM Excellence', 'East-West Integration', 'International Ward'],
    description: 'Unique integration of Traditional Chinese Medicine with Western medicine. Excellent for chronic conditions and holistic healing.'
  },
  {
    id: 'tiantan',
    name: 'Beijing Tiantan Hospital',
    nameZh: '北京天坛医院',
    level: 'AAA (Top Tier)',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800',
    specialties: ['Neurosurgery', 'Neurology', 'Brain Tumor', 'Epilepsy'],
    rating: 4.9,
    internationalSavings: '65-80%',
    consultationFeeFrom: 50,
    highlights: ['Asia\'s Top Neurosurgery', '30,000+ Brain Surgeries/Year', 'World-renowned Surgeons'],
    description: 'Asia\'s largest neurosurgical center. World leader in brain tumor surgery with outstanding success rates.'
  },
  {
    id: 'fuwai',
    name: 'Fuwai Hospital',
    nameZh: '中国医学科学院阜外医院',
    level: 'AAA (Top Tier)',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
    specialties: ['Cardiovascular Surgery', 'Cardiac Intervention', 'Heart Transplant', 'Vascular Surgery'],
    rating: 4.9,
    internationalSavings: '70-85%',
    consultationFeeFrom: 55,
    highlights: ['World\'s Largest Heart Center', '60,000+ Heart Surgeries', 'Highest Success Rates'],
    description: 'The world\'s largest cardiovascular disease center. Performs more heart surgeries annually than any other hospital globally.'
  },
  {
    id: 'cancer-hospital',
    name: 'National Cancer Center / Cancer Hospital',
    nameZh: '中国医学科学院肿瘤医院',
    level: 'AAA (Top Tier)',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800',
    specialties: ['Oncology', 'Cancer Surgery', 'Radiation Therapy', 'Immunotherapy'],
    rating: 4.8,
    internationalSavings: '60-80%',
    consultationFeeFrom: 60,
    highlights: ['China\'s Top Cancer Center', 'Latest Immunotherapy', 'Comprehensive Cancer Care'],
    description: 'China\'s leading comprehensive cancer center with cutting-edge treatments including CAR-T therapy and precision oncology.'
  },
  {
    id: 'peoples-hospital',
    name: 'Peking University People\'s Hospital',
    nameZh: '北京大学人民医院',
    level: 'AAA (Top Tier)',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800',
    specialties: ['Hematology', 'Joint Replacement', 'Trauma Surgery', 'Hepatology'],
    rating: 4.7,
    internationalSavings: '65-85%',
    consultationFeeFrom: 40,
    highlights: ['Leading Hematology Center', 'Joint Replacement Excellence', '100+ Years History'],
    description: 'Renowned for hematology and orthopedic surgery. Pioneer in joint replacement with over 100 years of medical excellence.'
  }
];
