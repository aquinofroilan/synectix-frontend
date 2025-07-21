import { Component, Input } from "@angular/core";
import { ScrollPanelModule } from "primeng/scrollpanel";
@Component({
    selector: "app-scrollpanel",
    imports: [ScrollPanelModule],
    template: `
        <p-scrollpanel [style]="styleClass">
            <ng-content></ng-content>
        </p-scrollpanel>
    `,
})
export class Scrollpanel {
    @Input() styleClass: string = "";
}
