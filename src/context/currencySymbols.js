export const currencySymbols = {
    usd: '$',
    gbp: '£',
    eur: '€',
}

export const getCurrencySymbol = (currency) => currencySymbols[currency.toLowerCase()] || ''
