import { inject, Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    httpService = inject(HttpService);

    signIn(email: string, password: string) {
        return this.httpService.post("/auth/signin", { email, password });
    }
}
