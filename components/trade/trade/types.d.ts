export interface SingleAvailablePair_int {
  pair: string;
  usdrate: number;
  last: number;
  lowsale: number;
  highsale: number;
  "24hrhigh": number;
  name: string;
  baseVolume: number;
  min_buy: number;
  min_sell: number;
  sellfee: number;
  buyfee: number;
  vendor: string;
  logopath: string;
  rate: number;
  bookmark: boolean;
  isincontest: boolean;
  isdefi: boolean;
}

export interface AvailablePairs_int {
  status: number;
  message: string;
  availablepairs: SingleAvailablePair_int[];
  sessionid: null | string;
}

export interface TradeApiResult_int<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
  isError: boolean;
}

// data for trade history

export interface SingleOrderBook_int {
  tradeID: string;
  type: string;
  baseVolume: number;
  price: number;
  quoteVolume: number;
  time: string;
  isBuyerMaker: boolean;
}
export interface OrderBook_int {
  status: 1;
  message: "Success";
  name: "32_USDT";
  orderbook: SingleOrderBook_int[];
}
