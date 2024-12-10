export interface CreditCardData {
  cardTxnRuleInfo?: CardRuleInfo;
  balanceInfo?: BalanceInfo;
}

export interface BalanceInfo {
  freeMargin?: string;
  margin?: string;
  netAssets?: string;
  available?: string;
  frozen?: string;
  equity?: string;
  lockMargin?: string;
  balance?: string;
  liabilitiesPrincipal?: string;
  interest?: string;
  lockAmount?: string;
  liabilities?: string;
  notWithdrawAmount?: string;
  currency?: string;
  withdrawAmount?: string;
  collateralFrozen?: string;
}

export interface CardRuleInfo {
  customDailyAtmLimit?: string;
  maxDailyAtmLimit?: string;
  feesUnpaid?: string;
  minDailyPurchaseLimit?: string;
  maxDailyPurchaseLimit?: string;
  customDailyPurchaseLimit?: string;
  minDailyAtmLimit?: string;
}
