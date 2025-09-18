import { Component, inject, type OnInit } from "@angular/core";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators, type FormGroup } from "@angular/forms";
import { Card, Input } from "@shared/components";
import { ToggleSwitch } from "@shared/components/toggle-switch/toggle-switch";
import { Button } from "../../../shared/components/button/button";

@Component({
    selector: "app-warehouse",
    imports: [Card, ReactiveFormsModule, ToggleSwitch, Input, Button],
    templateUrl: "./warehouse.html",
})
export class Warehouse implements OnInit {
    warehouseFormBuilder = inject(NonNullableFormBuilder);
    warehouseForm!: FormGroup;

    ngOnInit(): void {
        this.warehouseForm = this.warehouseFormBuilder.group({
            name: this.warehouseFormBuilder.control("", [Validators.required]),
            location: this.warehouseFormBuilder.control("", [Validators.required]),
            isActive: this.warehouseFormBuilder.control(true, [Validators.required]),
        });
    }

    onSubmit(): void {
        if (this.warehouseForm.valid) {
            console.log("Form Submitted", this.warehouseForm.value);
            // Handle form submission logic here
        } else {
            console.error("Form is invalid", this.warehouseForm.errors);
        }
    }
}
