// airdrop list related types
export interface IeoVendor_int {
  vendors_id: number;
  vendors_vendorname: string;
  vendors_vendorshortcode: string;
  airdropcoins_id: number;
  airdropcoins_createdon: string;
  airdropcoins_refkey: number;
  airdropcoins_mincount: number;
  airdropcoins_numberofcoins: number;
  airdropcoins_currentsale: number;
  airdropcoins_description: string;
  airdropcoins_bannerimage: string;
  airdropcoins_logopath?: string; //later it will be added to the api
  airdropcoins_startdate: string;
  airdropcoins_enddate: string;
  startdays: string;
  enddays: string;
}

export interface AirDropData_int {
  status: number;
  message: string;
  ieovendors: IeoVendor_int[];
  sessionid: null | string;
}

export interface AirdropApiResult_int {
  data: AirDropData_int;
}

// airdrop contest details
export interface IeoVendorDetails_int {
  airdropcoins_announcements: string;
  airdropcoins_bannerimage: string;
  airdropcoins_bonus: number;
  airdropcoins_buywith: number;
  airdropcoins_claimlink: string;
  airdropcoins_coincost: number;
  airdropcoins_coinsperuser: number;
  airdropcoins_createdon: string;
  airdropcoins_currentsale: number;
  airdropcoins_description: string;
  airdropcoins_enddate: string;
  airdropcoins_enddays: string;
  airdropcoins_id: number;
  airdropcoins_mincount: number;
  airdropcoins_numberofcoins: number;
  airdropcoins_projectdetaildescription: string;
  airdropcoins_refkey: number;
  airdropcoins_startdate: string;
  airdropcoins_startdays: string;
  airdropcoins_technology: string;
  airdropcoins_whitepaper: string;
  vendors_blockexplorersource: string;
  vendors_facebook: string;
  vendors_youtube: string; //  it will be added later
  vendors_threads: string; //  it will be added later
  vendors_discord: string; //  it will be added later
  vendors_instagram: string; //  it will be added later
  vendors_linkedin: string; //  it will be added later
  vendors_githubsource: string;
  vendors_id: number;
  vendors_linkedin: string;
  vendors_logopath: string;
  vendors_maxsupply: string;
  vendors_telegram: string;
  vendors_twitter: string;
  vendors_usdrate: number;
  vendors_vendorname: string;
  vendors_vendorshortcode: string;
  vendors_website: string;
}

export interface AirdropDetails_int {
  status: number;
  message: string;
  ieovendors: IeoVendorDetails_int[];
  balance: number;
  vendorinfo: null | string;
  sessionid: null | string;
}

export interface AirDropDetailsApiResult_int {
  data: AirdropDetails_int;
}
