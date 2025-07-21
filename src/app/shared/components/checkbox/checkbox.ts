import { Component, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { CheckboxModule } from "primeng/checkbox";

@Component({
    selector: "app-checkbox",
    imports: [CheckboxModule, FormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Checkbox),
            multi: true,
        },
    ],
    template: `
        <div class="flex items-center">
            <p-checkbox
                [required]="required"
                [inputId]="inputId"
                [name]="name"
                [disabled]="_disabled"
                [size]="size"
                [invalid]=""
                [variant]="variant"
            />
            <label [for]="inputId" class="ml-2"> {{ label }} </label>
        </div>
    `,
})
export class Checkbox extends BaseFormField<boolean> {
    onCheckboxChange(event: Event): void {
        const value = (event.target as HTMLInputElement).checked;
        this.emitValue(value);
    }
}
