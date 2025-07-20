import { CommonModule } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { Card } from "@shared/components/card/card";
import { Input } from '@shared/components/input/input'
@Component({
    selector: "app-sign-in",
    imports: [ReactiveFormsModule, Card, CommonModule, Input],
    templateUrl: "./sign-in.html",
    styleUrl: "./sign-in.css",
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
        throw new Error("Method not implemented.");
    }
}
