import { Component } from "@angular/core";
import { SkeletonModule } from "primeng/skeleton";
import { CommonModule } from "@angular/common";
@Component({
    selector: "app-skeleton",
    imports: [SkeletonModule, CommonModule],
    template: `
        <div *ngIf="_type === 'shapes'">
            <div *ngIf="_shape === 'square'">
                <p-skeleton class="mb-2" />
                <p-skeleton width="10rem" class="mb-2" />
                <p-skeleton width="5rem" class="mb-2" />
                <p-skeleton height="2rem" class="mb-2" />
                <p-skeleton width="10rem" height="4rem" />
            </div>

            <div *ngIf="_shape === 'rounded'">
                <p-skeleton class="mb-2" borderRadius="16px" />
                <p-skeleton width="10rem" class="mb-2" borderRadius="16px" />
                <p-skeleton width="5rem" class="mb-2" borderRadius="16px" />
                <p-skeleton height="2rem" class="mb-2" borderRadius="16px" />
                <p-skeleton width="10rem" height="4rem" borderRadius="16px" />
            </div>

            <div *ngIf="_shape === 'square'">
                <p-skeleton size="2rem" class="mr-2" />
                <p-skeleton size="3rem" class="mr-2" />
                <p-skeleton size="4rem" class="mr-2" />
                <p-skeleton size="5rem" />
            </div>

            <div *ngIf="_shape === 'circle'">
                <p-skeleton shape="circle" size="2rem" class="mr-2" />
                <p-skeleton shape="circle" size="3rem" class="mr-2" />
                <p-skeleton shape="circle" size="4rem" class="mr-2" />
                <p-skeleton shape="circle" size="5rem" />
            </div>
        </div>
    `,
})
export class Skeleton {
    _type: "shapes" | "card" | "list" | "datatable" = "shapes";
    _shape: "rectangle" | "circle" | "rounded" | "square" = "rectangle";
}
