import { CommonModule } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { Card } from "@shared/components/card/card";
import { Input } from "@shared/components/input/input";
import { Button } from "@shared/components/button/button";
import { Link } from "@shared/components/link/link";
import { AuthenticationService } from "@app/core/services/authentication/authentication.service";
@Component({
    selector: "app-sign-in",
    imports: [ReactiveFormsModule, Card, CommonModule, Input, Button, Link],
    templateUrl: "./signin.html",
})
export class SignIn implements OnInit {
    signInForm!: FormGroup;
    signInFormBuilder = inject(FormBuilder);
    authenticationService = inject(AuthenticationService);

    ngOnInit(): void {
        this.signInForm = this.signInFormBuilder.group({
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("", [Validators.required]),
        });
    }

    onSubmit(): void {
        if (this.signInForm.valid) {
            const { email, password } = this.signInForm.value;
            this.authenticationService.signIn(email, password).subscribe({
                next: (response) => {
                    console.log("Sign-in successful", response);
                    // Handle successful sign-in, e.g., redirect to dashboard
                },
                error: (error) => {
                    console.error("Sign-in failed", error);
                    // Handle sign-in error, e.g., show an error message
                },
            });
        } else {
            console.error("Form is invalid");
        }
    }
}
