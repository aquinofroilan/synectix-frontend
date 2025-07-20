import { Component, Input } from "@angular/core";
import { CardModule } from "primeng/card";

@Component({
    selector: "app-card",
    imports: [CardModule],
    templateUrl: "./card.html",
    styleUrl: "./card.css",
})
export class Card {
    @Input() header!: string;
    @Input() subheader!: string;
    @Input() customStyles: string = "";
    @Input() contentClass: string = "";
}
