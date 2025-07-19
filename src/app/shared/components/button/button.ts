import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: "app-button",
    imports: [ButtonModule],
    templateUrl: "./button.html",
    styleUrl: "./button.css",
})
export class Button {
    _label: string = "Button";
}
