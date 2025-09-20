import { Component, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { CommonModule } from "@angular/common";
import { HlmInput } from "@spartan-ng/helm/input";

@Component({
    selector: "app-input",
    imports: [FormsModule, HlmInput, CommonModule],
    template: `
        <section [class]="customClass">
            <label class="text-sm" [htmlFor]="inputId">{{ label }}</label>
            <input
                hlmInput
                [type]="type"
                [autocomplete]="autocomplete"
                [placeholder]="placeholder"
                (input)="onInputChange($event)"
            />
        </section>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Input),
            multi: true,
        },
    ],
})
export class Input extends BaseFormField<string> {
    onInputChange(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.emitValue(value);
    }
}
