import { ControlValueAccessor } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive()
// This is not a standalone directive. It's meant to be extended.
export abstract class BaseFormField<T> implements ControlValueAccessor {
    /** The current value of the form control */
    protected _value!: T;

    /** Whether the control is disabled */
    protected _disabled: boolean = false;

    /** Callbacks registered by Angular forms */
    protected onChange: (value: T) => void = () => {};
    protected onTouched: () => void = () => {};

    /** Called by Angular to update the value */
    writeValue(value: T): void {
        this._value = value;
        this.onValueChange(value);
    }

    /** Called by Angular to register a change listener */
    registerOnChange(fn: (value: T) => void): void {
        this.onChange = fn;
    }

    /** Called by Angular to register a touched listener */
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    /** Called by Angular to disable or enable the control */
    setDisabledState(isDisabled: boolean): void {
        this._disabled = isDisabled;
        this.onDisabledChange(isDisabled);
    }

    /**
     * Call this from the derived class whenever the value changes
     */
    protected emitValue(value: T): void {
        this._value = value;
        this.onChange(value);
    }

    /**
     * Call this when the field is blurred or otherwise touched
     */
    protected markAsTouched(): void {
        this.onTouched();
    }

    /**
     * Optional override in subclasses to handle value updates from form model
     */
    protected onValueChange(_value: T): void {}

    /**
     * Optional override in subclasses to handle disabled state change
     */
    protected onDisabledChange(_isDisabled: boolean): void {}

    @Input() placeholder!: string;
    @Input() required: boolean = false;
    @Input() size: "small" | "large" = "small";
    @Input() autocomplete!: "on" | "off";
    @Input() type!: "text" | "password";
    @Input() name!: string;
    @Input() label!: string;
    @Input() withLabel!: boolean;
    @Input() withHelperText!: boolean;
    @Input() helperText!: string;
    @Input() customClass: string = "";
    @Input() variant: "filled" | "outlined" = "filled";
    @Input() inputId: string = Math.random().toString(36).substring(2);
}
