export interface Currency {
    code: string;
    name: string;
    symbol: string;
    country?: string;
}

export const CURRENCIES: Currency[] = [
    { code: "USD", name: "US Dollar", symbol: "$", country: "United States" },
    { code: "EUR", name: "Euro", symbol: "€", country: "European Union" },
    { code: "GBP", name: "British Pound", symbol: "£", country: "United Kingdom" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥", country: "Japan" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$", country: "Canada" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$", country: "Australia" },
    { code: "PHP", name: "Philippine Peso", symbol: "₱", country: "Philippines" },
    // Add more currencies as needed
];
