import { Component, type OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
@Component({
    selector: "app-sign-in",
    imports: [ReactiveFormsModule],
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
}
