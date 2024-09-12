export function formatCurrency(amount: number, currency = 'GBP', locale = 'en-GB'): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const formattedAmount = formatter.format(amount);
  return formattedAmount.endsWith('.00') ? formattedAmount.slice(0, -3) : formattedAmount;
}
