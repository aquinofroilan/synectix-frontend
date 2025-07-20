import { Routes } from "@angular/router";
import { SignIn } from "@features/auth/signin/signin";
import { Signup } from "@features/auth/signup/signup";
export const routes: Routes = [
    {
        path: "flow",
        children: [
            {
                path: "auth",
                children: [
                    {
                        path: "signin",
                        component: SignIn,
                    },
                    {
                        path: "signup",
                        component: Signup,
                    },
                ],
            },
        ],
    },
];
