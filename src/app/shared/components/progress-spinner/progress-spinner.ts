import { Component } from "@angular/core";
import { ProgressSpinnerModule } from "primeng/progressspinner";
@Component({
    selector: "app-progress-spinner",
    imports: [ProgressSpinnerModule],
    templateUrl: "./progress-spinner.html",
    styleUrl: "./progress-spinner.css",
})
export class ProgressSpinner {}
