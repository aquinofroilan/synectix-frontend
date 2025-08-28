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
                    @for (col of columns; track $index) {
                        <th [pSortableColumn]="col.sortable ? col.field as string : null" [style.width]="col.width">
                            {{ col.header }}
                            @if (col.sortable) {
                                <p-sortIcon *ngIf="col.sortable" [field]="col.field as string"></p-sortIcon>
                            }
                        </th>
                    }
                </tr>
            </ng-template>
            <ng-template #body let-rowData let-rowIndex="rowIndex">
                <tr>
                    @for (col of columns; track $index) {
                        <td>
                            <ng-container [ngSwitch]="col.type">
                                @switch (col.type) {
                                    @case ("text") {
                                        <span>
                                            {{ getFieldValue(rowData, col.field) }}
                                        </span>
                                    }

                                    @case ("number") {
                                        <span>
                                            {{ getFieldValue(rowData, col.field) | number }}
                                        </span>
                                    }

                                    @case ("date") {
                                        <span>
                                            {{ getFieldValue(rowData, col.field) | date }}
                                        </span>
                                    }

                                    @case ("number") {
                                        <span>
                                            {{ getFieldValue(rowData, col.field) | number }}
                                        </span>
                                    }

                                    @case ("date") {
                                        <span>
                                            {{ getFieldValue(rowData, col.field) | date }}
                                        </span>
                                    }

                                    @case ("currency") {
                                        <span>
                                            {{ getFieldValue(rowData, col.field) | currency }}
                                        </span>
                                    }

                                    @case ("custom") {
                                        <ng-container
                                            *ngTemplateOutlet="customTemplates[col.field as string]; context: { $implicit: rowData, rowIndex: rowIndex }"
                                        ></ng-container>
                                    }

                                    @default {
                                        <span>
                                            {{ getFieldValue(rowData, col.field) }}
                                        </span>
                                    }
                                }
                            </ng-container>
                        </td>
                    }
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
