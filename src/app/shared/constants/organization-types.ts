export interface OrganizationType {
    value: string;
    label: string;
    description?: string;
}

export const ORGANIZATION_TYPES: OrganizationType[] = [
    { value: "corporation", label: "Corporation", description: "A legal entity separate from its owners" },
    { value: "llc", label: "Limited Liability Company (LLC)", description: "Hybrid business structure" },
    { value: "partnership", label: "Partnership", description: "Business owned by two or more people" },
    { value: "sole_proprietorship", label: "Sole Proprietorship", description: "Business owned by one person" },
    { value: "non_profit", label: "Non-Profit Organization", description: "Organization for charitable purposes" },
    { value: "government", label: "Government Entity", description: "Government organization" },
    { value: "other", label: "Other", description: "Other type of organization" },
];
