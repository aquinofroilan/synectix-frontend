import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-link",
    standalone: true,
    imports: [RouterLink, CommonModule],
    template: `
        <a [routerLink]="link" [ngClass]="combinedClasses">
            <ng-content></ng-content>
        </a>
    `,
})
export class Link {
    @Input() link: string = "";
    @Input() customClass: string = "";
    @Input() button: boolean = false;

    get combinedClasses(): string {
        const baseClass = this.button ? "bg-blue-500 p-5 text-white" : "hover:underline underline-offset-4 text-sm";
        return `${baseClass} ${this.customClass}`;
    }
}
