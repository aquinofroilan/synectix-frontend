import { Component, Input } from "@angular/core";
import { ImageModule } from "primeng/image";

@Component({
    selector: "app-image",
    imports: [ImageModule],
    template: `<p-image [src]="src" [alt]="altImage" [width]="width" /> `,
})
export class Image {
    @Input() src: string = "";
    @Input() altImage: string = "";
    @Input() width: string = "";
}
