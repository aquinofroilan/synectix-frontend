import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: "app-button",
    imports: [ButtonModule],
    templateUrl: "./button.html",
    styleUrl: "./button.css",
})
export class Button {
    protected _disabled: boolean = false;

    @Input() label!: string;
    @Input() type: "button" | "submit" | "reset" = "button";
    @Input() disabled: boolean = false;
    @Input() customClass: string = "";
    protected onDisabledChange(_isDisabled: boolean): void {
        this._disabled = _isDisabled;
    }
}
