import { Component, Input } from "@angular/core";
import { CardModule } from "primeng/card";

@Component({
    selector: "app-card",
    imports: [CardModule],
    template: `
        <p-card [header]="header" [subheader]="subheader" [styleClass]="customStyles">
            <ng-content [ngClass]="contentClass"></ng-content>
        </p-card>
    `,
})
export class Card {
    @Input() header!: string;
    @Input() subheader!: string;
    @Input() customStyles: string = "";
    @Input() contentClass: string = "";
}
