import { Component, Input } from "@angular/core";
import { DividerModule } from "primeng/divider";

@Component({
    selector: "app-divider",
    imports: [DividerModule],
    template: `<p-divider [align]="align" [type]="type">
        <ng-content select="[selector]"></ng-content>
    </p-divider> `,
})
export class Divider {
    @Input() align: "left" | "center" | "right" = "center";
    @Input() type: "solid" | "dashed" | "dotted" = "solid";
}
