export interface CustomStats {
  totalRevenue: number;
  orderCount: number;
  customerCount: number;
}

export interface DashboardProps {
  stats: CustomStats;
}