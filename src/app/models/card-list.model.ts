export interface CardKpi {
  name: string;
  measurables: string;
  value: string;
  breakdown: string;
  change?: {
    value: string;
    color: string;
    direction: string;
  };
}

export interface CardList {
  title: string;
  reportDate: string;
  kpis: CardKpi[];
  image?: string;
  managerImg?: string;
}
