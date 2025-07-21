import { Component, Input } from "@angular/core";
import { ToastModule } from "primeng/toast";
@Component({
    selector: "app-toast",
    imports: [ToastModule],
    template: ` <p-toast [position]="position" [key]="key" /> `,
})
export class Toast {
    @Input() position:
        | "top-left"
        | "top-center"
        | "top-right"
        | "bottom-left"
        | "bottom-center"
        | "bottom-right"
        | "center" = "center";
    @Input() key: "tl" | "tc" | "tr" | "bl" | "bc" | "br" | "c" = "tl";
}
