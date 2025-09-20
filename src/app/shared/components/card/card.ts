import { Component, Input } from "@angular/core";
import {
    HlmCardContent,
    HlmCardDescription,
    HlmCard,
    HlmCardFooter,
    HlmCardHeader,
    HlmCardTitle,
    HlmCardAction,
} from "@spartan-ng/helm/card";

@Component({
    selector: "app-card",
    imports: [HlmCard, HlmCardHeader, HlmCardTitle, HlmCardDescription, HlmCardContent, HlmCardFooter, HlmCardAction],
    template: `
        <section hlmCard>
            <div hlmCardHeader>
                @if (header || subheader) { <h3 hlmCardTitle>{{ header }}</h3> }
                @if (subheader) { <p hlmCardDescription>{{ subheader }}</p> }
                <ng-content select="[card-header]"></ng-content>
                <div hlmCardAction>
                    <ng-content select="[card-action]"></ng-content>
                </div>
            </div>

            <div hlmCardContent>
                <ng-content select="[card-content]"></ng-content>
                @if (content) { <p>{{ content }}</p>}
            </div>

            <div hlmCardFooter>
                <ng-content select="[card-footer]"></ng-content>
                @if (footer) { <p>{{ footer }}</p>}
            </div>
        </section>
    `,
})
export class Card {
    @Input() header?: string;
    @Input() subheader?: string;
    @Input() content?: string;
    @Input() footer?: string;

    // hasHeaderContent = false;
    // hasContent = false;
    // hasFooter = false;
}
