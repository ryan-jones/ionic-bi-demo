import { PMCTrendDrilldown } from '../../app/models/pmc-trends-drilldown.model';
import {
  SAFETYBARCHARTDATA,
  PROFITABILITYBARCHARTDATA,
  GASSCOREPIECHARTDATA
} from './chart-data';

export const ABCGASTRENDS = {
  title: {
    top: 10,
    text: 'ABS Gas Score Trends'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    top: 10,
    feature: {
      saveAsImage: {}
    }
  },
  lineStyle: {
    color: '#317199'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {
      type: 'inside',
    }
  ],
  series: [
    {
      name: 'Gas Score',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};

export const SAFETYSCORETRENDS = {
  title: {
    top: 10,
    text: 'Safety PMC Score Trend'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    top: 10,
    feature: {
      saveAsImage: {}
    }
  },
  lineStyle: {
    color: '#317199'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Safety Score',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};

export const PROFITABILITYSCORETRENDS = {
  title: {
    top: 10,
    text: 'Profitability PMC Score Trend'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['PMC Profitability Score']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    top: 10,
    feature: {
      saveAsImage: {}
    }
  },
  lineStyle: {
    color: '#317199'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Profitability Score',
      type: 'line',
      stack: '总量',
      data: [35.0, 34.0, 36.1, 28, 40, 41, 37.4]
    }
  ]
};

export const TRENDSDRILLDOWN: PMCTrendDrilldown[] = [
  {
    name: 'gas score',
    data: [
      {
        date: `Jan '18`,
        value: 120,
        comments:
          'Downturn in demand due to shipping postponements over Chinese New Year',
        commentor: 'Muhammad Ali',
        commentorEmail: 'muhammad.ali@abcgas.com',
        commentorPhoneNumber: '123456789',
        commentorImage: 'assets/imgs/projects/asab/asab.jpg'
      },
      {
        date: `Feb '18`,
        value: 132,
        comments:
          'Increasing demand due to winter spell in Europe offset losses in SE Asia',
        commentor: 'Muhammad Ali',
        commentorEmail: 'muhammad.ali@abcgas.com',
        commentorPhoneNumber: '123456789',
        commentorImage: 'assets/imgs/projects/asab/asab.jpg'
      },
      {
        date: `Mar '18`,
        value: 101,
        comments: 'Fire in Ruwais shut down production for seven days',
        commentor: 'Muhammad Ali',
        commentorEmail: 'muhammad.ali@abcgas.com',
        commentorPhoneNumber: '123456789',
        commentorImage: 'assets/imgs/projects/asab/asab.jpg'
      },
      {
        date: `Apr '18`,
        value: 134,
        comments: 'Ruwais back to operating capacity',
        commentor: 'Muhammad Ali',
        commentorEmail: 'muhammad.ali@abcgas.com',
        commentorPhoneNumber: '123456789',
        commentorImage: 'assets/imgs/projects/asab/asab.jpg'
      },
      {
        date: `May '18`,
        value: 90,
        comments:
          'US announces further investment in fracking projects in North Dakota',
        commentor: 'Yassir Nasra',
        commentorEmail: 'yassir.nasra@abcgas.com',
        commentorPhoneNumber: '123456789',
        commentorImage: 'assets/imgs/projects/yassir/yassir.jpg'
      },
      {
        date: `Jun '18`,
        value: 230,
        comments:
          'Sanctions announced against Russian Federation. Japanese demand increased',
        commentor: 'Muhammad Ali',
        commentorEmail: 'muhammad.ali@abcgas.com',
        commentorPhoneNumber: '123456789',
        commentorImage: 'assets/imgs/projects/asab/asab.jpg'
      },
      {
        date: `Jul '18`,
        value: 210,
        comments: 'Sustained output. Hasah partially closed for maintenance',
        commentor: 'Muhammad Ali',
        commentorEmail: 'muhammad.ali@abcgas.com',
        commentorPhoneNumber: '123456789',
        commentorImage: 'assets/imgs/projects/asab/asab.jpg'
      }
    ]
  }
];

export const PMCSCORECARDS = {
  title: 'PMC Scorecard',
  reportDate: 'Feb 2018',
  kpis: [
    {
      name: 'ABC Gas Score',
      measurables: 'Base - 100/Stretch -120',
      value: '24',
      breakdown: '20/24',
      change: {
        value: '1',
        color: 'green',
        direction: 'up'
      }
    },
    {
      name: 'Safety',
      measurables: 'Base/Stretch',
      value: '24',
      breakdown: '20/24',
      change: {
        value: '-1',
        color: 'red',
        direction: 'down'
      }
    },
    {
      name: 'Profitability',
      measurables: 'Base/Stretch',
      value: '34',
      breakdown: '30/36',
      change: {
        value: '2',
        color: 'green',
        direction: 'up'
      }
    },
    {
      name: 'Operations',
      measurables: 'Base/Stretch',
      value: '23',
      breakdown: '20/24',
      change: {
        value: '-3',
        color: 'red',
        direction: 'down'
      }
    }
  ]
};

export const PMCSCORECARDDRILLDOWNDATA = [
  {
    name: 'ABC Gas Score',
    headers: [
      {
        title: 'Minimum',
        value: 100,
        metric: 'Site Visits'
      },
      {
        title: 'Average',
        value: 120,
        metric: '4 KPI'
      },
      {
        title: 'Maximum',
        value: 150,
        metric: 'Site Visits'
      }
    ],
    tableData: [
      {
        Element: 'LTIF',
        'YTD Avg': 0.5,
        'MTD Total': 3,
        Annual: 4
      },
      {
        Element: 'TRIR',
        'YTD Avg': 1.9,
        'MTD Total': 1,
        Annual: 1
      },
      {
        Element: 'Fatalities',
        'YTD Avg': 0.2,
        'MTD Total': 0,
        Annual: 0
      },
      {
        Element: 'LOPC',
        'YTD Avg': 0.5,
        'MTD Total': 3,
        Annual: 4
      }
    ],
    chartData: GASSCOREPIECHARTDATA
  },
  {
    name: 'Safety',
    headers: [
      {
        title: 'Minimum',
        value: 120,
        metric: 'Site Visits'
      },
      {
        title: 'Average',
        value: 120,
        metric: '4 KPI'
      },
      {
        title: 'Maximum',
        value: 120,
        metric: 'Site Visits'
      }
    ],
    tableData: [
      {
        Element: 'LTIF',
        'YTD Avg': 0.5,
        'MTD Total': 3,
        Annual: 4
      },
      {
        Element: 'TRIR',
        'YTD Avg': 1.9,
        'MTD Total': 1,
        Annual: 1
      },
      {
        Element: 'Fatalities',
        'YTD Avg': 0.2,
        'MTD Total': 0,
        Annual: 0
      },
      {
        Element: 'LOPC',
        'YTD Avg': 0.5,
        'MTD Total': 3,
        Annual: 4
      }
    ],
    chartData: SAFETYBARCHARTDATA
  },
  {
    name: 'Profitability',
    headers: [
      {
        title: 'Minimum',
        value: 100,
        metric: 'OPEX Variance'
      },
      {
        title: 'Average',
        value: 114,
        metric: '5 KPI'
      },
      {
        title: 'Maximum',
        value: 120,
        metric: 'Unit Cost (gas)'
      }
    ],
    chartData: PROFITABILITYBARCHARTDATA,
    tableData: [
      {
        Element: 'Sales Rev',
        'YTD Avg': '453m',
        'MTD Total': '54m',
        Annual: '237m'
      },
      {
        Element: 'Unit Cost',
        'YTD Avg': 0.53,
        'MTD Total': 0.59,
        Annual: 0.52
      },
      {
        Element: 'OPEX Variance',
        'YTD Avg': 5,
        'MTD Total': 5,
        Annual: '0 < 5'
      },
      {
        Element: 'Capex Variance',
        'YTD Avg': 37.39,
        'MTD Total': 75.45,
        Annual: '0 < 5'
      }
    ]
  },
  {
    name: 'Operations',
    headers: [
      {
        title: 'Minimum',
        value: 120,
        metric: 'Site Visits'
      },
      {
        title: 'Average',
        value: 120,
        metric: '4 KPI'
      },
      {
        title: 'Maximum',
        value: 120,
        metric: 'Site Visits'
      }
    ]
  }
];
