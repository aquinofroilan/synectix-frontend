import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { Card } from "@shared/components/card/card";
import { Input } from "@shared/components/input/input";
import { Button } from "@shared/components/button/button";
import { Link } from "@shared/components/link/link";
@Component({
    selector: "app-sign-in",
    imports: [ReactiveFormsModule, Card, CommonModule, Input, Button, Link],
    templateUrl: "./sign-in.html",
})
export class SignIn implements OnInit {
    signInForm!: FormGroup;

    constructor(private signInFormBuilder: FormBuilder) {}
    ngOnInit(): void {
        this.signInForm = this.signInFormBuilder.group({
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("", [Validators.required]),
        });
    }

    onSubmit(): void {
        if (this.signInForm.valid) {
            const { email, password } = this.signInForm.value;
            console.log("Sign In Data:", { email, password });
            // Here you would typically handle the sign-in logic, e.g., call an authentication service
        } else {
            console.error("Form is invalid");
        }
    }
}
