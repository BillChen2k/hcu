import {
  IUniversityEventConfig, IUniversityManagerConfig,
  IUniversityTypeConfig,
  UniversityEventType,
  UniversityManagerType,
  UniversityType,
} from '../types';

// const universityTypes: Record<UniversityType, IUniversityTypeConfig> = {
//   composite: {
//     color: '#3182BE', // '#4972B8',
//     name: '综合类',
//     priority: 1,
//   },
//   science: {
//     color: '#BED7C4', // '#E2CA66',
//     name: '理工类',
//     priority: 3,
//   },
//   normal: {
//     color: '#CE8D62', // '#EDA7A2',
//     name: '师范 / 语言类',
//     priority: 3.5,
//   },
//   agriculture: {
//     color: '#94BA77', // '#A6D271',
//     name: '农林类',
//     priority: 4,
//   },
//   finance: {
//     color: '#CCBE8A', // '#06318E',
//     name: '财经 / 政法类',
//     priority: 5,
//   },
//   military: {
//     color: '#C6615A', // '#C42A30',
//     name: '军事类',
//     priority: 6,
//   },
//   medicine: {
//     color: '#68A09B', //'#B5B5B5',
//     name: '医药类',
//     priority: 7,
//   },
//   arts: {
//     color: '#AD8FC1', // '#E69233',
//     name: '民族 / 艺体类',
//     priority: 8,
//   },
// };

const universityTypes: Record<UniversityType, IUniversityTypeConfig> = {
  composite: {
    color: '#7A8DA1', // '#4972B8',
    name: '综合类',
    priority: 1,
  },
  science: {
    color: '#C2AC74', // '#E2CA66',
    name: '理工类',
    priority: 3,
  },
  normal: {
    color: '#DEC8D0', // '#EDA7A2',
    name: '师范 / 语言类',
    priority: 3.5,
  },
  agriculture: {
    color: '#C7CFCD', // '#A6D271',
    name: '农林类',
    priority: 4,
  },
  finance: {
    color: '#877990', // '#06318E',
    name: '财经 / 政法类',
    priority: 5,
  },
  military: {
    color: '#915052', // '#C42A30',
    name: '军事类',
    priority: 6,
  },
  medicine: {
    color: '#7E8B7A', //'#B5B5B5',
    name: '医药类',
    priority: 7,
  },
  arts: {
    color: '#C79664', // '#E69233',
    name: '民族 / 艺体类',
    priority: 8,
  },
};
const universityEvents: Record<UniversityEventType, IUniversityEventConfig> = {
  'rename': {
    color: '#ffffff',
    name: '更名',
    trendColor: '#87bb65',
  },
  'relocation': {
    color: '#ffffff',
    name: '迁址',
    trendColor: '#57A4B1',
  },
  'restructure': {
    color: '#ffffff',
    name: '院校 / 系所合并',
    trendColor: '#f66e70',
  },
};

const universityManagers: Record<UniversityManagerType, IUniversityManagerConfig> = {
  'central': {
    name: '中央部委直属',
    priority: 2,
  },
  'ministry_of_edu': {
    name: '教育部直属',
    priority: 1,
  },
  'local': {
    name: '地方直属',
    priority: 3,
  },
};

const config = {
  universityTypes,
  universityEvents,
  universityManagers,
  colors: {
    background: '#fcf7ed',
    universityHover: '#fc5908',
    primaryText: '#0F0A04',
    secondaryText: '#c9b707',
    primaryTint: '#66987f',
    importantText: '#ae2910',
    managerMarkers: '#d7c300',
    inactiveTrend: '#dcdcdc',
  },
};

export default config;
