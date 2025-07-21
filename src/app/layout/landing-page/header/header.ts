import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Link } from "@shared/components";

@Component({
    selector: "app-header",
    imports: [CommonModule, Link],
    template: `
        <header
            class="sticky w-full top-0 z-50 bg-white border-b border-gray-200 shadow-sm flex items-center justify-center"
        >
            <div class=" mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-11/12 max-w-7xl">
                <div class="flex justify-between items-center h-16 w-full">
                    <div class="flex items-center">
                        <a link="/" class="flex items-center space-x-2 gap-3">
                            <div
                                class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                            >
                                <span class="text-white font-bold text-lg">S</span>
                            </div>
                            <span class="text-xl font-bold text-gray-900">Synectix</span>
                        </a>
                    </div>

                    <nav class="hidden md:flex items-center space-x-8 gap-6">
                        <app-link label="Features" link="/features" />
                        <app-link label="Solutions" link="/solutions" />
                        <app-link label="Pricing" link="/pricing" />
                        <app-link label="Resources" link="/resources" />
                        <app-link label="Support" link="/support" />
                    </nav>

                    <div class="flex items-center space-x-4 gap-5">
                        <app-link label="Sign In" link="/flow/auth/signin" />
                        <app-link label="Start Free Trial" type="button" link="/flow/auth/signup" />
                    </div>
                </div>
            </div>
        </header>
    `,
})
export class Header {
    mobileMenuOpen = false;

    toggleMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }
}
