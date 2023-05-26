export const formatCurrency = (numberString, currencyCode) => {
    const number = Number(numberString);
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return formatter.format(number);
};
