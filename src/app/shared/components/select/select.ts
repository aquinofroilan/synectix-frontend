import { Component, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { SelectModule } from "primeng/select";

@Component({
    selector: "app-select",
    imports: [SelectModule, FormsModule],
    templateUrl: "./select.html",
    styleUrl: "./select.css",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Select),
            multi: true,
        },
    ],
})
export class Select extends BaseFormField<string> {
    _options: string[] = [];
    _selectedOption: string = "";
    _editable: boolean = true;
    _showClear: boolean = true;
    _invalid: boolean = false;
}
