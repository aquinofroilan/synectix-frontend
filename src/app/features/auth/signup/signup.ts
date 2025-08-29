import { Component, inject, type OnInit } from "@angular/core";
import { type FormControl, FormGroup, ReactiveFormsModule, Validators, NonNullableFormBuilder } from "@angular/forms";
import { Card, Input, Button, Link, Select } from "@shared/components";
import { CommonModule } from "@angular/common";
import { LookupService } from "@app/core/services/lookup.service";
import { AuthenticationService } from "@app/core/services/authentication/authentication.service";
import { AsyncValidators } from "@shared/utils/validators/async-validators";

interface Country {
    label: string;
    value: string;
}

interface Organization {
    label: string;
    value: string;
}

interface SignupFormControls {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    username: FormControl<string>;
    password: FormControl<string>;
    phoneNumber: FormControl<string>;
    companyName: FormControl<string>;
    country: FormControl<Country>;
    organizationType: FormControl<Organization>;
    taxNumber: FormControl<string>;
    registrationNumber: FormControl<string>;
    confirmPassword: FormControl<string>;
}

@Component({
    selector: "app-signup",
    imports: [ReactiveFormsModule, Card, CommonModule, Input, Button, Link, Select],
    templateUrl: "./signup.html",
})
export class Signup implements OnInit {
    countries!: Country[] | undefined;
    organizations!: Organization[] | undefined;
    signupForm!: FormGroup<SignupFormControls>;

    signupFormBuilder = inject(NonNullableFormBuilder);
    private readonly lookUpService = inject(LookupService);
    private readonly authenticationService = inject(AuthenticationService);

    constructor() {
        this.lookUpService.getCountries().subscribe((countries) => {
            console.log(countries);
            this.countries = countries.map((country) => ({
                label: country.name,
                value: country.id.toString(),
            }));
        });
        this.lookUpService.getOrganizationTypes().subscribe((organizations) => {
            console.log(organizations);
            this.organizations = organizations.map((org) => ({
                label: org.name,
                value: org.id.toString(),
            }));
        });
    }
    ngOnInit() {
        this.signupForm = this.signupFormBuilder.group({
            firstName: this.signupFormBuilder.control("", [Validators.required]),
            lastName: this.signupFormBuilder.control("", [Validators.required]),
            email: this.signupFormBuilder.control("", [
                Validators.required,
                Validators.email,
                AsyncValidators.email(this.authenticationService),
            ]),
            username: this.signupFormBuilder.control("", [
                Validators.required,
                AsyncValidators.username(this.authenticationService),
            ]),
            password: this.signupFormBuilder.control("", [Validators.required]),
            phoneNumber: this.signupFormBuilder.control("", [
                Validators.required,
                AsyncValidators.phone(this.authenticationService),
            ]),
            companyName: this.signupFormBuilder.control("", [Validators.required]),
            country: this.signupFormBuilder.control({ label: "", value: "" }, [Validators.required]),
            organizationType: this.signupFormBuilder.control({ label: "", value: "" }, [Validators.required]),
            taxNumber: this.signupFormBuilder.control("", [Validators.required]),
            registrationNumber: this.signupFormBuilder.control("", [Validators.required]),
            confirmPassword: this.signupFormBuilder.control("", [Validators.required]),
        });
    }

    onSubmit(): void {
        if (this.signupForm.valid) {
            const {
                firstName,
                lastName,
                email,
                username,
                password,
                phoneNumber,
                companyName,
                country,
                organizationType,
                taxNumber,
                registrationNumber,
                confirmPassword,
            } = this.signupForm.getRawValue();
            console.log(this.signupForm.getRawValue());
            this.authenticationService
                .signUp(
                    firstName,
                    lastName,
                    email,
                    username,
                    phoneNumber,
                    companyName,
                    country.value,
                    organizationType.value,
                    taxNumber,
                    registrationNumber,
                    password,
                    confirmPassword,
                )
                .subscribe({
                    next: (response) => {
                        console.log("Sign-up successful", response);
                        // Handle successful sign-up, e.g., redirect to dashboard
                    },
                    error: (error) => {
                        console.error("Sign-up failed", error);
                        // Handle sign-up error, e.g., show an error message
                    },
                });
        } else {
            console.error("Form is invalid");
            console.error(this.signupForm.value);
        }
    }
}
