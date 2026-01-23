export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleCn: string;
  image: string;
  bio: string;
  languages: string[];
  specialties: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sarah-chen',
    name: 'Dr. Sarah Chen',
    role: 'Medical Director',
    roleCn: '医疗总监',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    bio: 'Former chief resident at Johns Hopkins with 15 years of experience in international patient care. Fluent in English and Mandarin.',
    languages: ['English', 'Mandarin', 'Cantonese'],
    specialties: ['Internal Medicine', 'Patient Coordination', 'Medical Tourism'],
  },
  {
    id: 'michael-wang',
    name: 'Michael Wang',
    role: 'Patient Experience Manager',
    roleCn: '患者体验经理',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: '10+ years in hospitality and healthcare. Ensures every patient receives VIP-level care from arrival to departure.',
    languages: ['English', 'Mandarin'],
    specialties: ['Patient Relations', 'Travel Coordination', 'VIP Services'],
  },
  {
    id: 'emily-liu',
    name: 'Emily Liu',
    role: 'Medical Interpreter Lead',
    roleCn: '医疗翻译主管',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    bio: 'Certified medical interpreter with expertise in complex medical terminology. Trained at Beijing Medical University.',
    languages: ['English', 'Mandarin', 'Japanese'],
    specialties: ['Medical Translation', 'Document Translation', 'Interpreting'],
  },
  {
    id: 'david-zhang',
    name: 'David Zhang',
    role: 'Hospital Relations Director',
    roleCn: '医院关系总监',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    bio: 'Former hospital administrator with deep connections across Beijing\'s top medical institutions.',
    languages: ['English', 'Mandarin'],
    specialties: ['Hospital Partnerships', 'Appointment Scheduling', 'VIP Access'],
  },
];

export const serviceProcess = [
  {
    step: 1,
    title: 'Initial Consultation',
    titleCn: '初步咨询',
    duration: '24-48 hours',
    description: 'Submit your medical records and requirements through our secure form. Our medical team reviews your case and provides initial recommendations.',
    details: [
      'Free, no-obligation consultation',
      'Secure document upload',
      'Medical team case review',
      'Initial treatment options',
    ],
  },
  {
    step: 2,
    title: 'Medical Assessment',
    titleCn: '医疗评估',
    duration: '3-5 days',
    description: 'Our medical director reviews your case with partner hospitals and specialists to create a personalized treatment plan.',
    details: [
      'Specialist consultation',
      'Treatment plan development',
      'Detailed cost estimate',
      'Hospital recommendations',
    ],
  },
  {
    step: 3,
    title: 'Treatment Planning',
    titleCn: '治疗规划',
    duration: '1-2 weeks',
    description: 'Once you approve the treatment plan, we secure your appointments and begin travel arrangements.',
    details: [
      'Appointment scheduling',
      'Visa support documentation',
      'Accommodation booking',
      'Travel itinerary planning',
    ],
  },
  {
    step: 4,
    title: 'Arrival & Welcome',
    titleCn: '抵达接待',
    duration: 'Day 1',
    description: 'Our team greets you at the airport and handles all logistics. You\'re escorted to your accommodation and briefed on your schedule.',
    details: [
      'Airport pickup service',
      'Accommodation check-in',
      'Schedule orientation',
      'Local SIM card & essentials',
    ],
  },
  {
    step: 5,
    title: 'Treatment Phase',
    titleCn: '治疗阶段',
    duration: 'Varies by procedure',
    description: 'Receive world-class medical care with our full support. Medical interpreters accompany all appointments and procedures.',
    details: [
      '24/7 patient coordinator',
      'Medical interpretation',
      'Hospital accompaniment',
      'Family support services',
    ],
  },
  {
    step: 6,
    title: 'Recovery & Departure',
    titleCn: '康复与返程',
    duration: 'Post-treatment',
    description: 'Post-treatment monitoring, medication guidance, and seamless coordination with your home doctors for continued care.',
    details: [
      'Recovery monitoring',
      'Medical report translation',
      'Home doctor coordination',
      'Airport transfer',
    ],
  },
];

export const visaInfo = {
  title: 'China Visa Guide for Medical Travelers',
  intro: 'Most international patients travel to China on either a Tourist Visa (L Visa) or Medical Visa (M Visa). We provide comprehensive visa support.',
  types: [
    {
      type: 'Tourist Visa (L Visa)',
      duration: 'Up to 30 days',
      bestFor: 'Short treatments, consultations, minor procedures',
      requirements: [
        'Valid passport (6+ months validity)',
        'Completed visa application form',
        'Passport photo',
        'Round-trip flight booking',
        'Hotel reservation',
        'Invitation letter (we provide)',
      ],
    },
    {
      type: 'Medical Visa (M Visa)',
      duration: '30-90 days, extendable',
      bestFor: 'Extended treatments, surgeries, cancer therapy',
      requirements: [
        'Valid passport (6+ months validity)',
        'Completed visa application form',
        'Passport photo',
        'Hospital invitation letter (we provide)',
        'Medical diagnosis documentation',
        'Proof of financial means',
      ],
    },
  ],
  support: [
    'Official hospital invitation letters',
    'Medical documentation preparation',
    'Visa application guidance',
    'Embassy appointment assistance',
    'Extension support if needed',
  ],
};
