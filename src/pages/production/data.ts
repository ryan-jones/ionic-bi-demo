import { ABCGASTRENDS, SAFETYSCORETRENDS } from '../pmc/data';
import { SAFETYBARCHARTDATA, PROFITABILITYBARCHARTDATA } from '../pmc/chart-data';

export const SLIDECHARTS = [
  {
    title: 'Ruwais',
    chartData: ABCGASTRENDS,
    showing: false
  },
  {
    title: 'Poeline',
    chartData: SAFETYBARCHARTDATA,
    showing: false
  },
  {
    title: 'Hasab',
    chartData: PROFITABILITYBARCHARTDATA,
    showing: false
  },
  {
    title: 'Asab',
    chartData: SAFETYSCORETRENDS,
    showing: false
  },
  {
    title: 'Yasir',
    chartData: ABCGASTRENDS,
    showing: false
  }
];
