import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";

@Component({
    selector: "app-checkbox",
    imports: [CheckboxModule, FormsModule],
    templateUrl: "./checkbox.html",
    styleUrl: "./checkbox.css",
})
export class Checkbox {
    _checkbox: boolean = false;
    _label: string = "Checkbox";
    _disabled: boolean = false;
    _required: boolean = false;
    _variant: "filled" | "outlined" = "filled";
    _size: "small" | "large" = "small";
    _invalid: boolean = false;
    _name: string = "checkbox";
    _id: string = "checkboxField";
}
