export interface Country {
    code: string;
    name: string;
    flag?: string;
    phoneCode?: string;
}

export const COUNTRIES: Country[] = [
    { code: "US", name: "United States", flag: "🇺🇸", phoneCode: "+1" },
    { code: "CA", name: "Canada", flag: "🇨🇦", phoneCode: "+1" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧", phoneCode: "+44" },
    { code: "DE", name: "Germany", flag: "🇩🇪", phoneCode: "+49" },
    { code: "FR", name: "France", flag: "🇫🇷", phoneCode: "+33" },
    { code: "PH", name: "Philippines", flag: "🇵🇭", phoneCode: "+63" },
];
