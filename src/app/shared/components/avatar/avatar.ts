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
    templateUrl: "./avatar.html",
    styleUrl: "./avatar.css",
    standalone: true,
})
export class Avatar {
    @Input() items: AvatarItem[] = [];
}
