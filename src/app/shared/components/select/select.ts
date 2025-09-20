import { Component, forwardRef, Input } from "@angular/core";
import { type ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { SelectModule } from "primeng/select";
import { BrnSelectImports } from "@spartan-ng/brain/select";
import { HlmSelectImports } from "@spartan-ng/helm/select";

@Component({
    selector: "app-select",
    imports: [SelectModule, ReactiveFormsModule, FormsModule, BrnSelectImports, HlmSelectImports],
    template: `
        <section [class]="customClass">
            <label class="text-sm" [htmlFor]="inputId">{{ label }}</label>
            <p-select
                [options]="options"
                [placeholder]="placeholder"
                optionLabel="label"
                [showClear]="showClear"
                [required]="required"
                [variant]="variant"
                [size]="size"
                [checkmark]="showCheckMark"
                (onChange)="onSelectChange($event.value)"
                [(ngModel)]="_value"
                (onChange)="emitValue($event.value)"
                [disabled]="_disabled"
                [inputId]="inputId"
            />
            <brn-select class="inline-block" placeholder="Select an option">
                <hlm-select-trigger>
                    <hlm-select-value />
                </hlm-select-trigger>
                <hlm-select-content class="w-56">
                    <hlm-option value="Refresh">Refresh</hlm-option>
                    <hlm-option value="Settings">Settings</hlm-option>
                    <hlm-option value="Help">Help</hlm-option>
                    <hlm-option value="Signout">Sign out</hlm-option>
                </hlm-select-content>
            </brn-select>
        </section>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Select),
            multi: true,
        },
    ],
})
export class Select extends BaseFormField<string> implements ControlValueAccessor {
    @Input() options!: { label: string; value: string }[] | undefined;
    @Input() editable = true;
    @Input() showClear = true;
    @Input() invalid = false;
    @Input() showCheckMark = true;

    onSelectChange(value: string): void {
        console.log(value);
        console.log(this._value);
        this.emitValue(value);
    }
}
