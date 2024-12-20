export interface WalletInfo {
  id: string;
  walletId: string;
  parantWalletId: string;
  userId: string;
  requestId: string;
  walletName: string;
  walletNameCustody: string;
  address: string;
  coinSymbol: string;
  amount: string;
  availableAmount: string;
  lockedAmount: string;
  pendingAmount: string;
  frozenAmount: string;
  coinImage: string;
  coinFullName: string;
  creationTime: string;
  network: Array<string>;
  hiddenOnUi: boolean;
  autoCollection: boolean;
}
