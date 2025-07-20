import { Component } from "@angular/core";
import { SkeletonModule } from "primeng/skeleton";
import { CommonModule } from "@angular/common";
@Component({
    selector: "app-skeleton",
    imports: [SkeletonModule, CommonModule],
    templateUrl: "./skeleton.html",
    styleUrl: "./skeleton.css",
})
export class Skeleton {
    _type: "shapes" | "card" | "list" | "datatable" = "shapes";
    _shape: "rectangle" | "circle" | "rounded" | "square" = "rectangle";
}
