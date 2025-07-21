import { Component, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { RadioButtonModule } from "primeng/radiobutton";
@Component({
    selector: "app-radio",
    imports: [RadioButtonModule, FormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Radio),
            multi: true,
        },
    ],
    template: `
        <div class="flex items-center">
            <p-radiobutton [name]="name" [value]="_value" [inputId]="inputId" />
            <label [for]="inputId" class="ml-2">{{ label }}</label>
        </div>
    `,
})
export class Radio extends BaseFormField<boolean> {
    onRadioChange(event: Event): void {
        const value = (event.target as HTMLInputElement).checked;
        this.emitValue(value);
    }
}
