import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpService } from "./services/http.service";
import { AuthInterceptor } from "./interceptors/auth.interceptor";

@NgModule({
    providers: [
        HttpService,

        // Guards
        // AuthGuard,

        // Interceptors
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class CoreModule {
    // Prevents re-importing CoreModule
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded. Import it only in AppModule.");
        }
    }
}
