import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
@Component({
    selector: "app-link",
    imports: [RouterLink, CommonModule],
    template: ` <a [routerLink]="link" [ngClass]="[customClass, defaultStyle]">{{ label }}</a> `,
})
export class Link {
    defaultStyle: string = "hover:underline underline-offset-4 text-xs";
    @Input() link: string = "";
    @Input() customClass: string = "";
    @Input() label: string = "";
}
