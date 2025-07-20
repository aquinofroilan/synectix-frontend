import { Component } from "@angular/core";
import { TagModule } from "primeng/tag";
@Component({
    selector: "app-tag",
    imports: [TagModule],
    templateUrl: "./tag.html",
    styleUrl: "./tag.css",
})
export class Tag {
    _severity: "secondary" | "success" | "info" | "warn" | "danger" | "contrast" = "secondary";
    _value: string = "Tag";
}
