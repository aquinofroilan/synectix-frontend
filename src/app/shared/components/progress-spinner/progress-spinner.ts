import { Component } from "@angular/core";
import { ProgressSpinnerModule } from "primeng/progressspinner";
@Component({
    selector: "app-progress-spinner",
    imports: [ProgressSpinnerModule],
    template: `<p-progress-spinner ariaLabel="loading" /> `,
})
export class ProgressSpinner {}
