import { Component, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { RadioButtonModule } from "primeng/radiobutton";
@Component({
    selector: "app-radio",
    imports: [RadioButtonModule, FormsModule],
    templateUrl: "./radio.html",
    styleUrl: "./radio.css",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Radio),
            multi: true,
        },
    ],
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
    _id: string = Math.random().toString(36).substring(2);
}
