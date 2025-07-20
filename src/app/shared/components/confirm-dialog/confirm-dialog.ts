import { Component, Input } from "@angular/core";
import { ConfirmDialogModule } from "primeng/confirmdialog";

@Component({
    selector: "app-confirm-dialog",
    imports: [ConfirmDialogModule],
    templateUrl: "./confirm-dialog.html",
    styleUrl: "./confirm-dialog.css",
})
export class ConfirmDialog {
    @Input()
    position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" =
        "center";
    @Input() positionDialog: "tl" | "tc" | "tr" | "bl" | "bc" | "br" | "c" = "tl";
}
