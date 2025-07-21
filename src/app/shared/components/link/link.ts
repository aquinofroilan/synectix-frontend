import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
@Component({
    selector: "app-link",
    imports: [RouterLink, CommonModule],
    template: ` <a [routerLink]="link" [ngClass]="[customClass, defaultStyle]">{{ label }}</a> `,
})
export class Link {
    @Input() button: boolean = false;
    defaultStyle: string =
        this.button == true ? "bg-blue-500 p-5 text-white" : "hover:underline underline-offset-4 text-sm";
    @Input() link: string = "";
    @Input() customClass: string = "";
    @Input() label: string = "";
}
