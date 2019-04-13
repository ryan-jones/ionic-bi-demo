export interface DrilldownData {
  date: string;
  value: number;
  comments: string;
  commentor: string;
  commentorEmail: string;
  commentorPhoneNumber: string;
  commentorImage: string;
  clicked?: boolean;
}

export interface PMCTrendDrilldown {
  name: string;
  data: DrilldownData[];
}

export interface TrendDrilldown {
  name: string;
  data: DrilldownData;
}
