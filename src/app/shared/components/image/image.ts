import { Component, Input } from "@angular/core";
import { ImageModule } from "primeng/image";

@Component({
    selector: "app-image",
    imports: [ImageModule],
    templateUrl: "./image.html",
    styleUrl: "./image.css",
})
export class Image {
    @Input() src: string = "";
    @Input() altImage: string = "";
    @Input() width: string = "";
}
