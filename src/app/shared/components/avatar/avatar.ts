import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { OverlayBadgeModule } from "primeng/overlaybadge";

interface AvatarItem {
    image?: string;
    label?: string;
    size?: "xlarge" | "large";
    customClass?: string;
    shape?: "circle" | "square";
    withBadge?: boolean;
    badge?: string;
    badgeSeverity?: "success" | "info" | "warn" | "danger";
}
[];

@Component({
    selector: "app-avatar",
    imports: [CommonModule, AvatarModule, AvatarGroupModule, OverlayBadgeModule],
    standalone: true,
    template: `
        <ng-container *ngIf="items && items.length > 1; else singleAvatar">
            <p-avatarGroup>
                <p-avatar
                    *ngFor="let item of items"
                    [image]="item.image"
                    [ariaLabel]="item.label"
                    [shape]="item.shape"
                ></p-avatar>
                <p-overlay-badge value="4" severity="danger" class="inline-flex"> </p-overlay-badge>
                <p-avatar *ngFor="let item of items" [image]="item.image" [ariaLabel]="item.label"></p-avatar>
            </p-avatarGroup>
        </ng-container>

        <ng-template #singleAvatar>
            <p-avatar *ngIf="!items[0].withBadge" [image]="items[0].image" [ariaLabel]="items[0].label"></p-avatar>
            <p-overlay-badge
                *ngIf="items[0].withBadge"
                [value]="items[0].badge"
                [severity]="items[0].badgeSeverity"
                class="inline-flex"
            >
                <p-avatar [image]="items[0].image" [ariaLabel]="items[0].label" [shape]="items[0].shape"></p-avatar>
            </p-overlay-badge>
        </ng-template>
    `,
})
export class Avatar {
    @Input() items: AvatarItem[] = [];
}
