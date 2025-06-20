export interface VendorFee_int {
  vendors_id: number;
  vendors_minsupply: string;
  vendors_maxsupply: string;
  vendors_website: string;
  vendors_githubsource: string;
  vendors_bitcointalk: string;
  vendors_blockexplorersource: string;
  vendors_vendorname: string;
  vendors_vendorshortcode: string;
  vendors_logopath: string;
  vendors_minwithdraw: number;
  vendors_mindeposit: number;
  vendors_maxwithdraw: number;
  vendors_minbuyorder: number;
  vendors_minsellorder: number;
  vendors_status: string;
  vendors_salepricefee: number;
  vendors_buypricefee: number;
  vendors_transferfee: number;
  vendors_cointype: string;
  vendors_usdrate: number;
  vendors_contractaddress: string;
  vendors_decimals: number;
  vendors_twitter: string;
  vendors_telegram: string;
  vendors_facebook: string;
  vendors_linkedin: string;
  vendors_vendorselfwithdraw: string;
  vendors_withdrawlvendorid: number;
  vendors_withdrawlvendorticker: string;
  vendors_depositfee: number;
  vendors_network: number;
  isfavourite: boolean;
  basevolume: number;
}

export interface FeeData_int {
  status: number;
  message: string;
  vendors: VendorFee_int[];
  lastupdated: data;
  altfeedesc: string;
  sessionid: null | string;
}

export interface FeeApiResult_int {
  data: FeeData_int;
  isLoading: boolean;
  error: string | null;
  isError: boolean;
}
