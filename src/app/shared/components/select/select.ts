import { Component, forwardRef, Input } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, type ControlValueAccessor } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { SelectModule } from "primeng/select";

@Component({
    selector: "app-select",
    imports: [SelectModule, ReactiveFormsModule, FormsModule],
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
                [(ngModel)]="_value"
                (onChange)="emitValue($event.value)"
                [disabled]="_disabled"
                [inputId]="inputId"
            />
            <small>{{ helperText }}</small>
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
}
