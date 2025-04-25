export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  percent_change_1h: number | string;
  percent_change_24h: number | string;
  percent_change_7d: number | string;
  market_cap: number;
  volume_24h: number;
  volume_base: number;
  circulating_supply: number;
  sparkline: number[];  
}
