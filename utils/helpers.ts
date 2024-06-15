// utils/helpers.ts
export function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function formatCurrency(amount: number, currencyCode: string): string {
  const currencySymbol = getCurrencySymbol(currencyCode);
  return `${currencySymbol} ${amount.toFixed(2)}`;
}

export function getCurrencySymbol(currencyCode: string): string {
  switch (currencyCode) {
    case CURRENCY_CODES.USD:
      return '$';
    case CURRENCY_CODES.EUR:
      return '€';
    case CURRENCY_CODES.BTC:
      return '₿';
    case CURRENCY_CODES.ETH:
      return 'Ξ';
    default:
      return '';
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
