import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Link, Logo} from "@shared/components";

@Component({
    selector: "app-footer",
    imports: [CommonModule, Link, Logo],
    template: `
        <footer class="bg-black text-white py-5 w-full flex flex-col items-center">
            <div class="max-w-7xl sm:px-6 lg:px-8 py-12 w-11/12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="col-span-1 md:col-span-1">
                        <div class="flex items-center space-x-2 mb-4">
                            <app-logo />
                        </div>
                        <p class="text-gray-400 mb-4 text-sm">
                            Streamline your business operations with our comprehensive ERP solution. Built for modern
                            enterprises.
                        </p>
                        <div class="flex space-x-4">
                            <app-link href="#" variant="link">
                                <svg class="w-5 h-5"  viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                    />
                                </svg>
                            </app-link>
                            <app-link href="#" variant="link" >
                                <svg
                                    class="w-5 h-5"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"
                                        ></path>
                                    </g>
                                </svg>
                            </app-link>
                            <app-link href="#" variant="link">
                                <svg class="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                    />
                                </svg>
                            </app-link>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-4">Products</h3>
                        <ul class="space-y-2">
                            <li>
                                <app-link computedClass="text-white" href="/features/analytics" label="Analytics" />
                            </li>
                            <li>
                                <app-link
                                    computedClass="text-white"
                                    href="/features/inventory"
                                    label="Inventory"
                                ></app-link>
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/features/sales" label="Sales & CRM" />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/features/purchasing" label="Purchasing" />
                            </li>
                            <li>
                                <app-link
                                    computedClass="text-white"
                                    href="/features/reports"
                                    label="Analytics & Reports"
                                />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/features/dashboard" label="Dashboard" />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/features/accounting" label="Accounting" />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/features/dashboard" label="Dashboard" />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-4">Solutions</h3>
                        <ul class="space-y-2">
                            <li>
                                <app-link computedClass="text-white" href="/solutions/small-business"
                                    >Small Business</app-link
                                >
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/solutions/enterprise" label="Enterprise" />
                            </li>
                            <li>
                                <app-link
                                    computedClass="text-white"
                                    href="/solutions/manufacturing"
                                    label="Manufacturing"
                                />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/solutions/retail" label="Retail" />
                            </li>
                            <li>
                                <app-link
                                    computedClass="text-white"
                                    href="/solutions/services"
                                    label="Professional Services"
                                />
                            </li>
                            <li>
                                <app-link
                                    computedClass="text-white"
                                    href="/integrations"
                                    label="Integrations"
                                />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-4">Support</h3>
                        <ul class="space-y-2">
                            <li>
                                <app-link computedClass="text-white" href="/support/help" label="Help Center" />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/support/documentation" label="Documentation" />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/support/api" label="API Reference" />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/support/training" label="Training" />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/support/contact" label="Contact Us" />
                            </li>
                            <li>
                                <app-link computedClass="text-white" href="/support/status" label="System Status" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-8 pt-8 border-t border-gray-800">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="text-gray-400 text-sm">© {{ year }} Synectix. All rights reserved.</div>
                        <div class="flex space-x-6 mt-4 md:mt-0">
                            <app-link computedClass="text-white" href="/legal/privacy" label="Privacy Policy" />
                            <app-link computedClass="text-white" href="/legal/terms" label="Terms of Service" />
                            <app-link computedClass="text-white" href="/legal/cookies" label="Cookie Policy" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `,
})
export class Footer {
    year = new Date().getFullYear();
}
