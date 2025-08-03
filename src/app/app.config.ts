import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeuix/themes/aura";
import { AuthInterceptor } from "./core/interceptors/auth.interceptor";
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideAnimationsAsync(),
        provideHttpClient(withFetch()),
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        providePrimeNG({
            theme: {
                preset: Aura,
            },
            ripple: true,
        }),
    ],
};
