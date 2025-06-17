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

// launchpad list related types
export interface IeoVendorLaunchpad_int {
  vendors_id: number;
  vendors_vendorname: string;
  vendors_vendorshortcode: string;
  icocoins_id: number;
  icocoins_createdon: date;
  icocoins_startdate: string;
  icocoins_startdays: string;
  icocoins_enddate: string;
  icocoins_enddays: string;
  icocoins_mincount: number;
  icocoins_numberofcoins: number;
  icocoins_currentsale: number;
  icocoins_description: string;
  starthours: string;
  icocoins_bonus: number;
  endhours: string;
  icocoin_listingstatus: string;
  icocoins_bannerimage: string;
  icocoins_logopath?: string; // will be added later by backend team
  icocoins_buywithvendors: string;
}

export interface LaunchPadData_int {
  status: number;
  message: string;
  ieovendors: IeoVendorLaunchpad_int[];
  sessionid: null | string;
}

export interface LaunchpadApiResult_int {
  data: LaunchPadData_int;
}

// launchpad contest details
export interface IeoLunchpadVendorDetails_int {
  vendors_id: number;
  vendors_logopath: string;
  vendors_vendorname: string;
  vendors_vendorshortcode: string;
  vendors_maxsupply: string;
  vendors_website: string;
  vendors_blockexplorersource: string;
  vendors_githubsource: string;
  vendors_telegram: string;
  vendors_twitter: string;
  vendors_facebook: string;
  vendors_usdrate: number;
  vendors_linkedin: string;
  vendors_youtube: string; //  it will be added later
  vendors_threads: string; //  it will be added later
  vendors_discord: string; //  it will be added later
  vendors_instagram: string; //  it will be added later
  icocoins_id: number;
  icocoins_whitepaper: string;
  icocoins_announcements: string;
  icocoins_createdon: date;
  icocoins_startdate: string;
  icocoins_startdays: string;
  icocoins_projectdetaildescription: string;
  icocoins_enddate: string;
  icocoins_enddays: string;
  icocoins_mincount: number;
  icocoins_numberofcoins: number;
  icocoins_currentsale: number;
  icocoins_description: string;
  icocoins_coincost: number;
  icocoins_buywith: number;
  icocoins_technology: string;
  icocoins_bonus: number;
  icocoins_auditreport: string;
  icocoins_presentation: string;
  icocoins_executivesummary: string;
  icocoins_teamrichtext: string;
  icocoins_bannerimage: string;
}

export interface MarketResult_int {
  vendorid: number;
  vendorname: string;
  vendorticker: string;
  usdrate: number;
  userbalance: number;
  venders_logopath?: string;
}

export interface LaunchpadDetails_int {
  status: number;
  message: string;
  ieovendors: IeoLunchpadVendorDetails_int[];
  marketsresults: MarketResult_int[];
  ieoteam: [];
  sessionid: null | string;
}

export interface LaunchpadDetailsApiResult_int {
  data: LaunchpadDetails_int;
}
