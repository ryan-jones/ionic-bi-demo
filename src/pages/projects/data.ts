export const echartsData = {
  title: {
    text: 'Active Projects by Location',
    x: 'center',
    top: 10,
    padding: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: 'Projects',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 2, name: `Asab 2` },
        { value: 4, name: 'Ruwais 4' },
        { value: 5, name: 'Poelines 5' },
        { value: 3, name: 'Hasab 3' },
        { value: 1, name: 'Yassir 1' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

export const echartsData2 = {
  title: {
    text: 'Active Projects by Project Type',
    x: 'center',
    top: 10
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: 'Projects',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 6, name: 'Pipeline 6' },
        { value: 3, name: 'Exploration 3' },
        { value: 1, name: 'Other' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

export const PROJECTSSUMMARY = {
  title: 'Major Projects Summary',
  reportDate: '27-MAY-16',
  kpis: [
    {
      name: 'Active Major Projects',
      measurables: 'EPC | FEED | Pre-FEED',
      value: '16',
      breakdown: '14 | 2 | 0'
    },
    {
      name: 'Milestone Completion %',
      measurables: 'Milestones due/ achieved',
      value: '59%',
      breakdown: '423/812'
    },
    {
      name: 'Budget Compliance %',
      measurables: 'Budget/Actuals',
      value: '63%',
      breakdown: '305.73m/482.74'
    }
  ]
};

export const PROJECTSHSE = {
  title: 'Major Projects HSE',
  reportDate: '27-MAY-16',
  kpis: [
    {
      name: 'Fatalities',
      measurables: 'During Current Year',
      value: '0',
      breakdown: ''
    },
    {
      name: 'Lost Time Injuries',
      measurables: 'During Current Year',
      value: '1358',
      breakdown: 'hours'
    },
    {
      name: 'Near Miss Incidents',
      measurables: 'During Current Year',
      value: '10',
      breakdown: ''
    },
    {
      name: 'Man Hours Without LTI',
      measurables: 'Accumulated by All Active Projects',
      value: '0',
      breakdown: ''
    }
  ]
};

export const setImages = (plant: string) => ({
  image: `../../assets/imgs/projects/${plant}/${plant}-refinery.jpg`,
  managerImg: `../../assets/imgs/projects/${plant}/${plant}.jpg`
});

export const CURRENTPROJECTS = [
  {
    name: 'Ruwais 4',
    summary: Object.assign({...PROJECTSSUMMARY}, setImages('ruwais')),
    hse: PROJECTSHSE
  },
  {
    name: 'Poelines 5',
    summary: Object.assign({...PROJECTSSUMMARY}, setImages('poeline')),
    hse: PROJECTSHSE
  },
  {
    name: 'Hasab 3',
    summary: Object.assign({...PROJECTSSUMMARY}, setImages('hasab')),
    hse: PROJECTSHSE
  },
  {
    name: 'Yassir 1',
    summary: Object.assign({...PROJECTSSUMMARY}, setImages('yassir')),
    hse: PROJECTSHSE
  },
  {
    name: 'Asab 2',
    summary: Object.assign({...PROJECTSSUMMARY}, setImages('asab')),
    hse: PROJECTSHSE
  }
];

export const ECHARTSGLOPTS = {
  backgroundColor: '#000',
  globe: {
    baseTexture: '../../assets/imgs/world.topo.bathy.200401.jpg',
    heightTexture: '../../assets/imgs/world.topo.bathy.200401.jpg',
    displacementScale: 0.04,
    shading: 'realistic',
    environment: '../../assets/imgs/starfield.jpg',
    realisticMaterial: {
      roughness: 0.9
    },
    postEffect: {
      enable: true
    },
    light: {
      main: {
        intensity: 5,
        shadow: true
      },
      ambientCubemap: {
        texture: '../../assets/pisa.hdr',
        diffuseIntensity: 0.2
      }
    }
  }
};
