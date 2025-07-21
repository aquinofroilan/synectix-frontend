import { Component } from "@angular/core";
import { TagModule } from "primeng/tag";
@Component({
    selector: "app-tag",
    imports: [TagModule],
    template: ` <p-tag [severity]="_severity" [value]="_value" /> `,
})
export class Tag {
    _severity: "secondary" | "success" | "info" | "warn" | "danger" | "contrast" = "secondary";
    _value: string = "Tag";
}
