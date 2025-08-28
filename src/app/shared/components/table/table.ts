import { CommonModule } from "@angular/common";
import { Component, Input, TemplateRef } from "@angular/core";
import { TableModule } from "primeng/table";

export interface TableColumn<T = unknown> {
    field: keyof T;
    header: string;
    sortable?: boolean;
    width?: string;
    type?: "text" | "number" | "date" | "currency" | "custom";
    pipe?: string;
    customTemplate?: string;
}

@Component({
    selector: "app-table",
    imports: [TableModule, CommonModule],
    template: `
        <p-table
            [value]="data"
            [tableStyle]="{ 'min-width': '50rem' }"
            [paginator]="paginator"
            [rows]="rows"
            [showCurrentPageReport]="showCurrentPageReport"
            [sortMode]="sortMode"
            [loading]="loading"
        >
            <ng-template #header>
                <tr>
                    <th
                        *ngFor="let col of columns"
                        [pSortableColumn]="col.sortable ? col.field as string : null"
                        [style.width]="col.width"
                    >
                        {{ col.header }}
                        <p-sortIcon *ngIf="col.sortable" [field]="col.field as string"></p-sortIcon>
                    </th>
                </tr>
            </ng-template>
            <ng-template #body let-rowData let-rowIndex="rowIndex">
                <tr>
                    <td *ngFor="let col of columns">
                        <ng-container [ngSwitch]="col.type">
                            <!-- Text -->
                            <span *ngSwitchCase="'text'">
                                {{ getFieldValue(rowData, col.field) }}
                            </span>
                            <!-- Number -->
                            <span *ngSwitchCase="'number'">
                                {{ getFieldValue(rowData, col.field) | number }}
                            </span>
                            <!-- Date -->
                            <span *ngSwitchCase="'date'">
                                {{ getFieldValue(rowData, col.field) | date }}
                            </span>
                            <!-- Currency -->
                            <span *ngSwitchCase="'currency'">
                                {{ getFieldValue(rowData, col.field) | currency }}
                            </span>
                            <!-- Custom template -->
                            <ng-container *ngSwitchCase="'custom'">
                                <ng-container
                                    *ngTemplateOutlet="customTemplates[col.field as string]; context: { $implicit: rowData, rowIndex: rowIndex }"
                                ></ng-container>
                            </ng-container>
                            <!-- Default -->
                            <span *ngSwitchDefault>
                                {{ getFieldValue(rowData, col.field) }}
                            </span>
                        </ng-container>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    `,
    styleUrl: "./table.css",
})
export class Table<T = Record<string, unknown>> {
    @Input() data: T[] = [];
    @Input() columns: TableColumn<T>[] = [];
    @Input() loading = false;
    @Input() paginator = false;
    @Input() rows = 10;
    @Input() showCurrentPageReport = false;
    @Input() sortMode: "single" | "multiple" = "single";
    @Input() customTemplates: Record<string, TemplateRef<unknown>> = {};

    getFieldValue(obj: T, field: keyof T): unknown {
        const fieldPath = String(field);
        return fieldPath.split(".").reduce((o: unknown, p: string) => o?.[p], obj);
    }
}
