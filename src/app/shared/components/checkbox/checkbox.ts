import {Component, forwardRef} from "@angular/core";
import {FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {BaseFormField} from "@shared/base/form-field/base-form-field";
import {HlmCheckbox} from "@spartan-ng/helm/checkbox";

@Component({
    selector: "app-checkbox",
    imports: [FormsModule, HlmCheckbox],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Checkbox),
            multi: true,
        },
    ],
    template: `
        <div class="flex items-center">
            <hlm-checkbox [required]="required" [id]="inputId" [name]="name" [disabled]="_disabled" />
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
