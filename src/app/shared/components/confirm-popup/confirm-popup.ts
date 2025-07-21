import { Component, Input } from "@angular/core";
import { ConfirmPopupModule } from "primeng/confirmpopup";
@Component({
    selector: "app-confirm-popup",
    imports: [ConfirmPopupModule],
    template: `
        <p-confirmpopup>
            <ng-template #content let-message>
                <div
                    class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0"
                >
                    <i [class]="icon" class="!text-6xl text-primary-500"></i>
                    <p>{{ message }}</p>
                </div>
            </ng-template>
        </p-confirmpopup>
    `,
})
export class ConfirmPopup {
    @Input() message: string = "";
    @Input() icon: string = "";
}
