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
