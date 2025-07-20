import { Component, Input } from "@angular/core";
import { ScrollPanelModule } from "primeng/scrollpanel";
@Component({
    selector: "app-scrollpanel",
    imports: [ScrollPanelModule],
    templateUrl: "./scrollpanel.html",
    styleUrl: "./scrollpanel.css",
})
export class Scrollpanel {
    @Input() styleClass: string = "";
}
