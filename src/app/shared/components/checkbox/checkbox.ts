import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { CheckboxModule } from "primeng/checkbox";

@Component({
    selector: "app-checkbox",
    imports: [CheckboxModule, FormsModule],
    templateUrl: "./checkbox.html",
    styleUrl: "./checkbox.css",
})
export class Checkbox extends BaseFormField<boolean> {
    onCheckboxChange(event: Event): void {
        const value = (event.target as HTMLInputElement).checked;
        this.emitValue(value);
    }
}
