export interface Pool {
  liquidity: {
    usd: number;
    eth: number;
    native: number;
  };
  price: {
    eth: number;
    usd: number;
  };
  address: string;
  name: string;
  symbol: string;
  apy: number;
  updatedAt: string;
}