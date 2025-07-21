import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Link, Logo } from "@shared/components";

@Component({
    selector: "app-header",
    imports: [CommonModule, Link, Logo],
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
                        <app-link link="/features"> Features </app-link>
                        <app-link link="/solutions"> Solutions </app-link>
                        <app-link link="/pricing"> Pricing </app-link>
                        <app-link link="/resources"> Resources </app-link>
                        <app-link link="/support"> Support </app-link>
                    </nav>

                    <div class="flex items-center space-x-4">
                        <app-link link="/flow/auth/signin"> Sign In </app-link>
                        <app-link link="/flow/auth/signup" [button]="true"> Start Free Trial </app-link>
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
