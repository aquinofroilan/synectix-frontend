import { Component, type OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { Card } from "@shared/components/card/card";
import { Input } from "@shared/components/input/input";
import { Button } from "@shared/components/button/button";
import { Link } from "@shared/components/link/link";
import { CommonModule } from '@angular/common'

@Component({
    selector: "app-signup",
    imports: [ReactiveFormsModule, Card, CommonModule, Input, Button, Link],
    templateUrl: "./signup.html",
})
export class Signup implements OnInit {
    signupForm!: FormGroup;

    constructor(private signupFormBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.signupForm = this.signupFormBuilder.group( {
            firstName: new FormControl("", [Validators.required]),
            lastName: new FormControl("", [Validators.required]),
            email: new FormControl( "", [ Validators.required, Validators.email ] ),
            phoneNumber: new FormControl( "", [ Validators.required, Validators.pattern( "^[0-9]{10}$" ) ] ),
            companyName: new FormControl( "", [ Validators.required ] ),

            password: new FormControl("", [Validators.required]),
            confirmPassword: new FormControl("", [Validators.required]),
        });
    }

    onSubmit(): void {
        if (this.signupForm.valid) {
            const { email, password } = this.signupForm.value;
            console.log("Sign Up Data:", { email, password });
            // Here you would typically handle the sign-up logic, e.g., call an authentication service
        } else {
            console.error("Form is invalid");
        }
    }
}
