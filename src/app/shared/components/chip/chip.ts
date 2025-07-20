import { Component, Input } from "@angular/core";
import { ChipModule } from "primeng/chip";

@Component({
    selector: "app-chip",
    imports: [ChipModule],
    templateUrl: "./chip.html",
    styleUrl: "./chip.css",
})
export class Chip {
    @Input({ required: false }) label: string = "";
    @Input() removable: boolean = false;
    @Input() icon: string = "";
    @Input() styleClass: string = "";
    @Input() image: string = "";
    @Input() imageAlt: string = "";
}
