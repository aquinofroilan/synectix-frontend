import { Component, forwardRef, Input } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseFormField } from "@shared/base/form-field/base-form-field";
import { DatePickerModule } from "primeng/datepicker";
@Component({
    selector: "app-date-picker",
    imports: [DatePickerModule, FormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatePicker),
            multi: true,
        },
    ],
    template: `
        <p-datepicker
            [class]="customClass"
            [minDate]="min"
            [maxDate]="max"
            [selectionMode]="selectionMode"
            [showButtonBar]="showButtonBar"
            [hourFormat]="timeFormat"
            [view]="view"
            [numberOfMonths]="numberOfMonths"
            [inline]="inline"
            [showWeek]="showWeek"
        />
    `,
})
export class DatePicker extends BaseFormField<Date | Date[]> {
    @Input() min = new Date(1900, 0, 1);
    @Input() max = new Date(2100, 11, 31);
    @Input() selectionMode: "single" | "multiple" | "range" = "single";
    @Input() showButtonBar = false;
    @Input() showTime = false;
    @Input() timeFormat: "datetime12h" | "datetime24h" = "datetime12h";
    @Input() view: "date" | "month" | "year" = "date";
    @Input() numberOfMonths = 1;
    @Input() inline = false;
    @Input() showWeek = false;
    @Input() invalid = false;
}
