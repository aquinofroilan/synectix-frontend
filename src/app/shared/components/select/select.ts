import { Component, forwardRef, Input } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { SelectModule } from "primeng/select";

@Component({
    selector: "app-select",
    imports: [SelectModule, FormsModule],
    template: `
        <p-select
            [options]="options"
            [(ngModel)]="selectedOption"
            [placeholder]="placeholder"
            [editable]="editable"
            [optionLabel]="label"
            [showClear]="showClear"
            [disabled]="_disabled"
            [required]="required"
            [variant]="variant"
            [size]="size"
            [class]="customClass"
        />
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Select),
            multi: true,
        },
    ],
})
export class Select extends BaseFormField<string> {
    @Input() options!: { label: string; value: string }[];
    @Input() selectedOption: string = "";
    @Input() editable: boolean = true;
    @Input() showClear: boolean = true;
    @Input() invalid: boolean = false;
}
