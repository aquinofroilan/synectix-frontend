import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SelectModule } from "primeng/select";

@Component({
    selector: "app-select",
    imports: [SelectModule, FormsModule],
    templateUrl: "./select.html",
    styleUrl: "./select.css",
})
export class Select {
    _loading: boolean = false;
    _options: string[] = [];
    _selectedOption: string = "";
    _placeholder: string = "Select an option";
    _editable: boolean = true;
    _label: string = "Select";
    _showClear: boolean = true;
    _disabled: boolean = false;
    _required: boolean = false;
    _variant: "filled" | "outlined" = "filled";
    _size: "small" | "large" = "small";
    _invalid: boolean = false;
}
