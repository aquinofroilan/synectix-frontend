import { Routes } from "@angular/router";
export const routes: Routes = [
    {
        path: "",
        title: "Synectix | Home",
        loadComponent: () => import("@features/homepage/homepage").then((m) => m.Homepage),
    },
    {
        path: "flow",
        children: [
            {
                path: "auth",
                children: [
                    {
                        title: "Synectix | Sign In",
                        path: "signin",
                        loadComponent: () => import("@features/auth/signin/signin").then((m) => m.SignIn),
                    },
                    {
                        title: "Synectix | Sign Up",
                        path: "signup",
                        loadComponent: () => import("@features/auth/signup/signup").then((m) => m.Signup),
                    },
                ],
            },
        ],
    },
    {
        path: "u",
        title: "Synectix | Dashboard",
        children: [
            {
                path: "0",
                children: [
                    {
                        title: "Synectix | Warehouse",
                        loadComponent: () => import("@features/inventory/inventory").then((m) => m.Inventory),
                    },
                ],
            },
        ],
    },
];
