import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-button",
    imports: [ButtonModule, RouterLink, CommonModule],
    template: `
        <p-button
            [size]="size"
            [disabled]="disabled"
            [styleClass]="customClass"
            [label]="label"
            [type]="type"
            [routerLink]="routerLink"
        />
    `,
})
export class Button {
    @Input() disabled = false;
    @Input() label!: string;
    @Input() type: "button" | "submit" | "reset" = "button";
    @Input() customClass = "";
    @Input() size: "small" | "large" = "small";
    @Input() routerLink: string | null = null;

    protected onDisabledChange(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
