export interface CardKpi {
  name: string;
  measurables: string;
  value: string;
  breakdown: string;
  clicked?: boolean;
  change?: {
    value: string;
    color: string;
    direction: string;
  };
}

export interface CardList {
  title: string;
  reportDate?: string;
  kpis: CardKpi[];
  image?: string;
  managerImg?: string;
  managerName?: string;
  managerEmail?: string;
  managerPhoneNumber?: string;
}
