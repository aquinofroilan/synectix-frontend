import { Component } from "@angular/core";

@Component({
    selector: "app-logo",
    imports: [],
    template: `
        <div class="flex items-center space-x-2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    ></path>
                    <path
                        d="M10 12C10 8.68629 12.6863 6 16 6M16 18C19.3137 18 22 15.3137 22 12C22 10.7733 21.6318 9.63251 21 8.68221"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    ></path>
                </g>
            </svg>
            <span class="ml-2 text-lg font-semibold">Synectix</span>
        </div>
    `,
})
export class Logo {}
