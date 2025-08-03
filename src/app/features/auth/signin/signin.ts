import { CommonModule } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators, type FormControl } from "@angular/forms";
import { Card } from "@shared/components/card/card";
import { Input } from "@shared/components/input/input";
import { Button } from "@shared/components/button/button";
import { Link } from "@shared/components/link/link";
import { AuthenticationService } from "@app/core/services/authentication/authentication.service";

interface SignInFormControls {
    email: FormControl<string>;
    password: FormControl<string>;
}
@Component({
    selector: "app-sign-in",
    imports: [ReactiveFormsModule, Card, CommonModule, Input, Button, Link],
    templateUrl: "./signin.html",
})
export class SignIn implements OnInit {
    private fb = inject(NonNullableFormBuilder);
    private authService = inject(AuthenticationService);

    signInForm!: FormGroup<SignInFormControls>;

    ngOnInit(): void {
        this.signInForm = this.fb.group({
            email: this.fb.control("", [Validators.required, Validators.email]),
            password: this.fb.control("", [Validators.required]),
        });
    }

    onSubmit(): void {
        if (this.signInForm.valid) {
            const { email, password } = this.signInForm.getRawValue();
            this.authService.signIn(email, password).subscribe({
                next: (response) => {
                    console.log("Sign-in successful", response);
                },
                error: (error) => {
                    console.error("Sign-in failed", error);
                },
            });
        } else {
            console.error("Form is invalid");
        }
    }
}
