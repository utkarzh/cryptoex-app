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
