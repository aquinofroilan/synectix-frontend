import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DatePickerModule } from "primeng/datepicker";
@Component({
    selector: "app-date-picker",
    imports: [DatePickerModule, FormsModule],
    templateUrl: "./date-picker.html",
    styleUrl: "./date-picker.css",
})
export class DatePicker {}
