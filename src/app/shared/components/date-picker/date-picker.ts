import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DatePickerModule } from "primeng/datepicker";
@Component({
    selector: "app-date-picker",
    imports: [DatePickerModule, FormsModule],
    templateUrl: "./date-picker.html",
    styleUrl: "./date-picker.css",
})
export class DatePicker {
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
    @Input() size: "small" | "medium" | "large" = "medium";
    @Input() variant: "filled" | "outlined" | "ghost" = "filled";
    @Input() invalid = false;
    @Input() customClass: string = "";
}
