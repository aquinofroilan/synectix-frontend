import { inject, Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import type { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    httpService = inject(HttpService);

    signIn(email: string, password: string) {
        return this.httpService.post("/auth/signin", { user: email, password });
    }

    signUp(
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        phoneNumber: string,
        companyName: string,
        country: string,
        organizationType: string,
        taxNumber: string,
        registrationNumber: string,
        password: string,
        confirmPassword: string,
    ) {
        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }
        return this.httpService.post("/auth/signup", {
            firstName,
            lastName,
            email,
            username,
            phoneNumber,
            companyName,
            countryId: Number(country),
            organizationTypeId: Number(organizationType),
            taxNumber,
            registrationNumber,
            password,
            confirmPassword,
        });
    }

    checkEmailExists(email: string): Observable<boolean> {
        return this.httpService.post("/auth/validate/email", { email });
    }
    checkUsernameExists(username: string): Observable<boolean> {
        return this.httpService.post("/auth/validate/username", { username });
    }
    checkPhoneExists(phoneNumber: string): Observable<boolean> {
        return this.httpService.post("/auth/validate/phone", { phoneNumber });
    }
}
