import { Component, inject, type OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { Card, Input, Button, Link, Select } from "@shared/components";
import { CommonModule } from "@angular/common";
import { LookupService } from "@app/core/services/lookup.service";

interface Country {
    label: string;
    value: string;
}

interface Organization {
    label: string;
    value: string;
}

@Component({
    selector: "app-signup",
    imports: [ReactiveFormsModule, Card, CommonModule, Input, Button, Link, Select],
    templateUrl: "./signup.html",
})
export class Signup implements OnInit {
    signupForm!: FormGroup;
    countries!: Country[] | undefined;
    organizations!: Organization[] | undefined;

    private signupFormBuilder = inject(FormBuilder);
    private lookUpService = inject(LookupService);

    constructor() {
        this.lookUpService.getCountries().subscribe((countries) => {
            this.countries = countries.map((country) => ({
                label: country.name,
                value: country.id.toString(),
            }));
        });
        this.lookUpService.getOrganizationTypes().subscribe((organizations) => {
            this.organizations = organizations.map((org) => ({
                label: org.name,
                value: org.id.toString(),
            }));
        });
    }

    ngOnInit(): void {
        this.signupForm = this.signupFormBuilder.group({
            firstName: new FormControl("", [Validators.required]),
            lastName: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required, Validators.email]),
            username: new FormControl("", [Validators.required, Validators.minLength(3)]),
            phoneNumber: new FormControl("", [Validators.required]),
            companyName: new FormControl("", [Validators.required]),
            country: new FormControl("", [Validators.required]),
            organizationType: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required]),
            confirmPassword: new FormControl("", [Validators.required]),
        });
    }

    onSubmit(): void {
        if (this.signupForm.valid) {
            console.log("Sign Up Data:", { ...this.signupForm.value });
            // Here you would typically handle the sign-up logic, e.g., call an authentication service
        } else {
            console.error("Form is invalid");
        }
    }
}
