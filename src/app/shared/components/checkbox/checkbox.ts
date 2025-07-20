import { Component, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { CheckboxModule } from "primeng/checkbox";

@Component({
    selector: "app-checkbox",
    imports: [CheckboxModule, FormsModule],
    templateUrl: "./checkbox.html",
    styleUrl: "./checkbox.css",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Checkbox),
            multi: true,
        },
    ],
})
export class Checkbox extends BaseFormField<boolean> {
    onCheckboxChange(event: Event): void {
        const value = (event.target as HTMLInputElement).checked;
        this.emitValue(value);
    }
}
