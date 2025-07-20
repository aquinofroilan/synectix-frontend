import { Routes } from "@angular/router";
import { SignIn } from "@features/auth/sign-in/sign-in";
export const routes: Routes = [
    {
        path: "flow/auth/signin",
        component: SignIn,
        title: "Synectix | Sign In",
    },
];
