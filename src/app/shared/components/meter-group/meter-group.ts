import { Component, Input } from "@angular/core";
import { MeterGroupModule, MeterItem } from "primeng/metergroup";

@Component({
    selector: "app-meter-group",
    imports: [MeterGroupModule],
    templateUrl: "./meter-group.html",
    styleUrl: "./meter-group.css",
})
export class MeterGroup {
    @Input({ required: true }) value: MeterItem[] | undefined;
    @Input() max: number = 100;
    @Input() labelPosition: "start" | "end" = "start";
    @Input() labelOrientation: "horizontal" | "vertical" = "vertical";
}
