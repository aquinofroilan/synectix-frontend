import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { PasswordModule } from "primeng/password";
@Component({
    selector: "app-input",
    imports: [InputTextModule, FormsModule, PasswordModule],
    templateUrl: "./input.html",
    styleUrl: "./input.css",
})
export class Input {
    _placeholder: string = "Enter text";
    _value: string = "";
    _size: "small" | "medium" | "large" = "small";
    _autocomplete: "on" | "off" = "on";
    _type: "text" | "password" = "text";
    _disabled: boolean = false;
    _name: string = "inputField";
    _label: string = "Input Field";
    _withLabel: boolean = true;
    _withHelperText: boolean = false;
    _helperText: string = "Helper text goes here";
}
