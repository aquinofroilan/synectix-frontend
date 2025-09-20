import { Component } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Button } from "@shared/components/button/button";
import { Card } from "@shared/components/card/card";
import { Header } from "@app/layout/landing-page/header/header";
import { Footer } from "@app/layout/landing-page/footer/footer";
import { Link } from "@shared/components";

@Component({
    selector: "app-homepage",
    imports: [CommonModule, RouterLink, Button, Card, Header, Footer, Link, NgOptimizedImage],
    templateUrl: "./homepage.html",
    styleUrl: "./homepage.css",
})
export class Homepage {
    features = [
        {
            title: "Advanced Analytics",
            description:
                "Get real-time insights into your business performance with customizable dashboards and detailed reports.",
            link: "/features/analytics",
        },
        {
            title: "Financial Management",
            description: "Complete accounting suite with automated bookkeeping, invoicing, and financial reporting.",
            link: "/features/accounting",
        },
        {
            title: "Inventory Control",
            description:
                "Track stock levels, manage suppliers, and automate reorder processes across multiple locations.",
            link: "/features/inventory",
        },
        {
            title: "CRM & Sales",
            description: "Manage customer relationships and streamline your sales process from lead to conversion.",
            link: "/features/sales",
        },
        {
            title: "Procurement",
            description: "Optimize purchasing workflows with automated approvals and vendor management.",
            link: "/features/purchasing",
        },
        {
            title: "Customizable",
            description: "Tailor the system to your business needs with flexible workflows and custom fields.",
            link: "/features/customization",
        },
    ];

    testimonials = [
        {
            name: "Sarah Johnson",
            company: "TechCorp Industries",
            role: "CFO",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
            quote: "Synectix transformed our financial operations. We reduced month-end closing time by 75% and improved accuracy significantly.",
        },
        {
            name: "Michael Chen",
            company: "Global Manufacturing",
            role: "Operations Director",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
            quote: "The inventory management features are outstanding. Real-time tracking across our 15 warehouses has never been easier.",
        },
        {
            name: "Emily Rodriguez",
            company: "Retail Solutions Inc",
            role: "CEO",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
            quote: "Implementation was smooth and the support team is exceptional. Our productivity increased by 40% in the first quarter.",
        },
    ];

    stats = [
        { number: "10,000+", label: "Companies Trust Us" },
        { number: "99.9%", label: "Uptime Guarantee" },
        { number: "24/7", label: "Customer Support" },
        { number: "50+", label: "Countries Worldwide" },
    ];
}
