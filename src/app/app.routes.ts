import { Routes } from "@angular/router";
import { SignIn } from "@features/auth/sign-in/sign-in";
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
                ],
            },
        ],
    },
];
