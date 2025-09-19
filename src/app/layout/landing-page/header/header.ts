import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Logo, Button } from "@shared/components";

@Component({
    selector: "app-header",
    imports: [CommonModule, Logo, Button],
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
                        <app-button href="/features" label="Features" [asAnchor]="true" variant="link" />
                        <app-button href="/solutions" label="Solutions" [asAnchor]="true" variant="link" />
                        <app-button href="/pricing" label="Pricing" [asAnchor]="true" variant="link" />
                        <app-button href="/resources" label="Resources" [asAnchor]="true" variant="link" />
                        <app-button href="/support" label="Support" [asAnchor]="true" variant="link" />
                    </nav>

                    <div class="flex items-center space-x-4">
                        <app-button href="/flow/auth/signin" variant="ghost" [asAnchor]="true" label="Sign In" />
                        <app-button href="/flow/auth/signup" [asAnchor]="true" label="Start Free Trial" />
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
