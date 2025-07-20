import { Component, Input } from "@angular/core";
import { ConfirmPopupModule } from "primeng/confirmpopup";
@Component({
    selector: "app-confirm-popup",
    imports: [ConfirmPopupModule],
    templateUrl: "./confirm-popup.html",
    styleUrl: "./confirm-popup.css",
})
export class ConfirmPopup {
    @Input() message: string = "";
    @Input() icon: string = "";
}
