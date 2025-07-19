import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToggleSwitchModule } from "primeng/toggleswitch";
@Component({
    selector: "app-toggle-switch",
    imports: [ToggleSwitchModule, FormsModule],
    templateUrl: "./toggle-switch.html",
    styleUrl: "./toggle-switch.css",
})
export class ToggleSwitch {
    _checked: boolean = false;
    _disabled: boolean = false;
    _required: boolean = false;
    _variant: "filled" | "outlined" = "filled";
    _size: "small" | "large" = "small";
    _invalid: boolean = false;
    _name: string = "toggleSwitch";
    _id: string = "toggleSwitchField";
}
