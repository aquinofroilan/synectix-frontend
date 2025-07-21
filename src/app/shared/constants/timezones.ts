export interface Timezone {
    value: string;
    label: string;
    offset: string;
    country?: string;
}

export const TIMEZONES: Timezone[] = [
    { value: "America/New_York", label: "Eastern Time (ET)", offset: "UTC-5/-4", country: "US" },
    { value: "America/Chicago", label: "Central Time (CT)", offset: "UTC-6/-5", country: "US" },
    { value: "America/Denver", label: "Mountain Time (MT)", offset: "UTC-7/-6", country: "US" },
    { value: "America/Los_Angeles", label: "Pacific Time (PT)", offset: "UTC-8/-7", country: "US" },
    { value: "Europe/London", label: "Greenwich Mean Time (GMT)", offset: "UTC+0/+1", country: "UK" },
    { value: "Europe/Paris", label: "Central European Time (CET)", offset: "UTC+1/+2", country: "FR" },
    { value: "Asia/Tokyo", label: "Japan Standard Time (JST)", offset: "UTC+9", country: "JP" },
    { value: "Asia/Manila", label: "Philippine Standard Time (PST)", offset: "UTC+8", country: "PH" },
    // Add more timezones as needed
];
