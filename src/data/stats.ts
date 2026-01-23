export interface Stat {
  value: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: '5,000+',
    label: 'Patients Served',
    description: 'International patients treated successfully',
  },
  {
    value: '200+',
    label: 'AAA-rated Hospitals',
    description: 'Top-tier medical institutions across China',
  },
  {
    value: '70%',
    label: 'Average Savings',
    description: 'Compared to US/UK medical costs',
  },
  {
    value: '98%',
    label: 'Patient Satisfaction',
    description: 'Based on post-treatment surveys',
  },
];

export const coverageCities = [
  { name: 'Beijing', nameZh: '北京', isPrimary: true, hospitals: 50 },
  { name: 'Shanghai', nameZh: '上海', isPrimary: false, hospitals: 35 },
  { name: 'Guangzhou', nameZh: '广州', isPrimary: false, hospitals: 25 },
  { name: 'Shenzhen', nameZh: '深圳', isPrimary: false, hospitals: 20 },
  { name: 'Tianjin', nameZh: '天津', isPrimary: false, hospitals: 18 },
  { name: 'Wuhan', nameZh: '武汉', isPrimary: false, hospitals: 15 },
  { name: 'Hangzhou', nameZh: '杭州', isPrimary: false, hospitals: 12 },
  { name: 'Chengdu', nameZh: '成都', isPrimary: false, hospitals: 10 },
  { name: 'Hebei', nameZh: '河北', isPrimary: false, hospitals: 15 },
];
