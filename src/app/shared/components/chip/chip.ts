import { Component, Input } from "@angular/core";
import { ChipModule } from "primeng/chip";

@Component({
    selector: "app-chip",
    imports: [ChipModule],
    template: `
        <p-chip
            [label]="label"
            [alt]="imageAlt"
            [removable]="removable"
            [icon]="icon"
            [styleClass]="styleClass"
            [image]="image"
        />
    `,
})
export class Chip {
    @Input({ required: false }) label: string = "";
    @Input() removable: boolean = false;
    @Input() icon: string = "";
    @Input() styleClass: string = "";
    @Input() image: string = "";
    @Input() imageAlt: string = "";
}
