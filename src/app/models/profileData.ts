export interface ProfileData {
  accountData?: AccountData;
  address?: Address;
  areaCode?: string;
  country?: string;
  customerId?: number;
  customerNo?: string;
  id?: string;
  phone?: string;
  registerTime?: number;
  unitId?: number;
}

export interface AccountData {
  netAssets: string;
  available: string;
  type: number;
  equity: string;
  lockMargin: string;
  balance: string;
  customerId: 4338;
  liabilities: string;
  currency: string;
  activateStatus: number;
  withdrawAmount: string;
  profit: string;
  tradeType: number;
  collateralFrozen: string;
  freeMargin: string;
  margin: string;
  frozen: string;
  accountId: number;
  openAccountStatus: true;
  companyId: number;
  liabilitiesPrincipal: string;
  lockAmount: string;
  createTime: number;
  notWithdrawAmount: string;
  digits: number;
  customerNo: string;
  status: number;
  assetsId: number;
}

export interface Address {
  country: string;
  formattedAddress: string;
}
