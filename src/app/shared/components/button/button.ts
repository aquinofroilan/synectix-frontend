import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: "app-button",
    imports: [ButtonModule],
    template: `
        <p-button [size]="size" [disabled]="disabled" [styleClass]="customClass" [label]="label" [type]="type" />
    `,
})
export class Button {
    @Input() disabled: boolean = false;

    @Input() label!: string;
    @Input() type: "button" | "submit" | "reset" = "button";
    @Input() customClass: string = "";
    @Input() size: "small" | "large" = "small";
    protected onDisabledChange(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
