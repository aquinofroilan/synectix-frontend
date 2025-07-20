import { Component, forwardRef } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { PasswordModule } from "primeng/password";
import { Textarea } from "primeng/textarea";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-input",
    imports: [InputTextModule, FormsModule, PasswordModule, Textarea, CommonModule],
    template: `
        <section [class]="customClass">
            <label [htmlFor]="inputId">{{ label }}</label>
            <input
                [disabled]="_disabled"
                *ngIf="type !== 'password'"
                [type]="type"
                pInputText
                [autocomplete]="autocomplete"
                [placeholder]="placeholder"
                [size]="size"
                (input)="onInputChange($event)"
            />
            <p-password
                [disabled]="_disabled"
                *ngIf="type === 'password'"
                [toggleMask]="toggleMask"
                [feedback]="feedback"
                [size]="size"
                [placeholder]="placeholder"
                [autocomplete]="autocomplete"
                [inputId]="inputId"
                id="{{ inputId }}"
                (input)="onInputChange($event)"
            />
            <textarea rows="5" cols="30" pTextarea *ngIf="type === 'textarea'"></textarea>
            <small>{{ helperText }}</small>
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
