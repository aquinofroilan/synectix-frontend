import { Component, Input } from "@angular/core";
import { MeterGroupModule, MeterItem } from "primeng/metergroup";

@Component({
    selector: "app-meter-group",
    imports: [MeterGroupModule],
    template: `
        <p-metergroup
            [labelOrientation]="labelOrientation"
            [labelPosition]="labelPosition"
            [style]="{ height: '300px' }"
            [value]="value"
        />
    `,
})
export class MeterGroup {
    @Input({ required: true }) value: MeterItem[] | undefined;
    @Input() max: number = 100;
    @Input() labelPosition: "start" | "end" = "start";
    @Input() labelOrientation: "horizontal" | "vertical" = "vertical";
}
