import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-input",
    imports: [InputTextModule, FormsModule],
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
}
