export class SensitiveCardInfo {
  expiryMonth: string;
  securityCode: string;
  expiryYear: string;
  cardNumber: string;

  constructor(
    expiryMonth?: string,
    securityCode?: string,
    expiryYear?: string,
    cardNumber?: string
  ) {
    this.expiryMonth = expiryMonth || '';
    this.securityCode = securityCode || '';
    this.expiryYear = expiryYear || '';
    this.cardNumber = cardNumber || '';
  }
}
