import { Component, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { ToggleSwitchModule } from "primeng/toggleswitch";
@Component({
    selector: "app-toggle-switch",
    imports: [ToggleSwitchModule, FormsModule],
    template: `
        <p-toggleswitch [disabled]="_disabled" [required]="required" [size]="size" [name]="name" [id]="inputId" />
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleSwitch),
            multi: true,
        },
    ],
})
export class ToggleSwitch extends BaseFormField<boolean> {
    onToggleChange(event: Event): void {
        const value = (event.target as HTMLInputElement).checked;
        this.emitValue(value);
    }
}
