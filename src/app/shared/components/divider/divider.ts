import { Component, Input } from "@angular/core";
import { DividerModule } from "primeng/divider";

@Component({
    selector: "app-divider",
    imports: [DividerModule],
    templateUrl: "./divider.html",
    styleUrl: "./divider.css",
})
export class Divider {
    @Input() align: "left" | "center" | "right" = "center";
    @Input() type: "solid" | "dashed" | "dotted" = "solid";
}
