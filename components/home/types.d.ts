// home api data structure

export interface Analytics_int {
  pair: string;
  last: number;
  t24hrhigh: number;
  t24hrlow: number;
  baseVolume: number;
  name: string;
  vendor: string;
  logopath: string;
  usdrate: number;
  rate: number;
  graphimage: number[];
  bookmark: boolean;
  isincontest: boolean;
  isdefi: boolean;
}

export interface Vendors_int {
  vendors_id: number;
  vendors_vendorname: string;
  vendors_vendorshortcode: string;
  vendors_logopath: string;
  vendors_usdrate: number;
}

export interface Announcement_int {
  announcement_id: number;
  announcement_title: string;
  announcement_content: string;
  announcement_preiority: string;
  announcement_addedon: Date;
  announcement_status: string;
  announcement_date: Date;
}

export interface HomeDataStructure_int {
  btcrate: number;
  analytics: Analytics_int[];
  volume: string;
  vendors: Vendors_int[];
  announcement: Announcement_int[];
  registeredUsers: number;
  supportedCountries: number;
  coinslisted?: number;
  sessionid: string;
  socialmedia: string;
}

export interface HomeDataApi_int {
  data: HomeDataStructure_int;
}
