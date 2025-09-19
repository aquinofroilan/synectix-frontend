import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Logo, Link } from "@shared/components";

@Component({
    selector: "app-header",
    imports: [CommonModule, Logo, Link],
    template: `
        <header
            class="sticky w-full top-0 z-50 bg-white border-b border-gray-200 shadow-sm flex items-center justify-center"
        >
            <div class=" mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-11/12 max-w-7xl">
                <div class="flex justify-between items-center h-16 w-full">
                    <div class="flex items-center">
                        <app-logo />
                    </div>

                    <nav class="hidden md:flex items-center space-x-8">
                        <app-link href="/features" label="Features" />
                        <app-link href="/solutions" label="Solutions" />
                        <app-link href="/pricing" label="Pricing"/>
                        <app-link href="/resources" label="Resources"/>
                        <app-link href="/support" label="Support"/>
                    </nav>

                    <div class="flex items-center space-x-4">
                        <app-link href="/flow/auth/signin" label="Sign In" />
                        <app-link variant="default" href="/flow/auth/signup" label="Start Free Trial" />
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
