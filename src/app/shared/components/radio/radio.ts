import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RadioButtonModule } from "primeng/radiobutton";
@Component({
    selector: "app-radio",
    imports: [RadioButtonModule, FormsModule],
    templateUrl: "./radio.html",
    styleUrl: "./radio.css",
})
export class Radio {
    _radio: boolean = false;
    _label: string = "Radio";
    _disabled: boolean = false;
    _required: boolean = false;
    _variant: "filled" | "outlined" = "filled";
    _size: "small" | "large" = "small";
    _invalid: boolean = false;
    _name: string = "radio";
    _id: string = "radioField";
}
