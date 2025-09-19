import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonVariants, HlmButton } from "@spartan-ng/helm/button";

@Component({
    selector: "app-link",
    standalone: true,
    imports: [CommonModule, HlmButton],
    template: `
        <a hlmBtn [variant]="variant" [ngClass]="computedClass + ' cursor-pointer hover:underline underline-offset-4 text-sm'" [href]="href">
            <ng-container *ngTemplateOutlet="content"></ng-container>
        </a>
        <ng-template #content>
            <ng-content></ng-content>
            @if (label) {
                <span class="text-current" >{{ label }}</span>
            }
        </ng-template>
    `,
})
export class Link {
    @Input() href = "";
    @Input() computedClass = "";
    @Input() variant: ButtonVariants["variant"] = "link";
    @Input() size: ButtonVariants['size'] = "default"
    @Input() label = "";
}
