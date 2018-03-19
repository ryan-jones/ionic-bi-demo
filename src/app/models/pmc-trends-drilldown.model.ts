export interface DrilldownData {
    date: string;
    value: number;
    comments: string;
    commentor: string;
    commentorImage: string;
}

export interface PMCTrendDrilldown  {
  name: string;
  data: DrilldownData[];
}
