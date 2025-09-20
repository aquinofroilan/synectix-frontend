import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-root",
    imports: [RouterModule],
    template: `<main class="w-full min-h-screen">
        <router-outlet></router-outlet>
    </main>`,
})
export class App {
    protected readonly title = signal("synectix-frontend");
}
