import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { debounceTime, map, catchError } from "rxjs/operators";
import { AuthenticationService } from "app/core/services/authentication/authentication.service";

export class AsyncValidators {
    static email(authService: AuthenticationService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (!control.value) return of(null);

            return authService.checkEmailExists(control.value).pipe(
                debounceTime(500),
                map((exists) => (exists ? { emailTaken: true } : null)),
                catchError(() => of(null)),
            );
        };
    }

    static username(authService: AuthenticationService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (!control.value) return of(null);

            return authService.checkUsernameExists(control.value).pipe(
                debounceTime(500),
                map((exists) => (exists ? { usernameTaken: true } : null)),
                catchError(() => of(null)),
            );
        };
    }

    static phone(authService: AuthenticationService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (!control.value) return of(null);

            return authService.checkPhoneExists(control.value).pipe(
                debounceTime(500),
                map((exists) => (exists ? { phoneTaken: true } : null)),
                catchError(() => of(null)),
            );
        };
    }
}
