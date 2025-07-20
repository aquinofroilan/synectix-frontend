import { Routes } from "@angular/router";
export const routes: Routes = [
    {
        path: "flow",
        children: [
            {
                path: "auth",
                children: [
                    {
                        path: "signin",
                        loadComponent: () => import("@features/auth/signin/signin").then((m) => m.SignIn),
                    },
                    {
                        path: "signup",
                        loadComponent: () => import("@features/auth/signup/signup").then((m) => m.Signup),
                    },
                ],
            },
        ],
    },
];
