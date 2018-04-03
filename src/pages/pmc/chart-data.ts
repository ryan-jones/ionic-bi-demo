export const SAFETYBARCHARTDATA = {
  itemStyle: {
    color: 'rgb(47, 111, 155)'
  },
  xAxis: {
    type: 'category',
    data: ['Site Visits', 'TRIR', 'LTIF', 'LPOC']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      markLine: {
        data: [{ type: 'average', name: 'Average Score' }]
      },
      data: [120, 200, 150, 80],
      type: 'bar'
    }
  ]
};

export const PROFITABILITYBARCHARTDATA = {
  itemStyle: {
    color: 'rgb(47, 111, 155)'
  },
  xAxis: {
    type: 'category',
    data: [
      'Unit Cost (gas)',
      'OPEX Variance',
      'CAPEX Variance',
      'Proj. Sched. Index',
      'Proj. Cost Index'
    ],
    axisLabel: {
      interval: 0,
      rotate: -30,
      fontSize: 8,
      padding: 0
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      data: [120, 100, 120, 112, 130],
      type: 'bar'
    }
  ]
};

export const GASSCOREPIECHARTDATA = {
  title: {
    text: 'Annual Weighting',
    subtext: 'As of 17 March 2018',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: 'Gas Score',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,

      color: ['rgb(47, 111, 155)', '#fff'],
      label: {
        normal: {
          fontSize: 20,
          show: true,
          position: 'center',
          formatter(params) {
            return params.dataIndex === 0 ? `${params.percent}%` : '';
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{ value: 335, name: 'score' }, { value: 30, name: 'threshold' }]
    }
  ]
};
