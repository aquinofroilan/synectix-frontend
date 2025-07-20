import { Component, forwardRef } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { PasswordModule } from "primeng/password";
import { Textarea } from "primeng/textarea";
import { BaseFormField } from "@shared/base/form-field/base-form-field";

@Component({
    selector: "app-input",
    imports: [InputTextModule, FormsModule, PasswordModule, Textarea],
    templateUrl: "./input.html",
    styleUrl: "./input.css",
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
