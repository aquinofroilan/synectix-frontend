import { Component, inject, type OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { Card, Input, Button, Link, Select } from "@shared/components";
import { CommonModule } from "@angular/common";
import { COUNTRIES, ORGANIZATION_TYPES } from "@shared/constants";

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

    constructor() {
        this.countries = COUNTRIES.map((country) => ({ label: country.name, value: country.code }));
        this.organizations = ORGANIZATION_TYPES.map((org) => ({ label: org.label, value: org.value }));
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
