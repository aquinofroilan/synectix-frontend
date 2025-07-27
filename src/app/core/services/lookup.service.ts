import { inject, Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";
interface Country {
    id: number;
    code: string;
}

interface OrganizationType {
    id: number;
    name: string;
}
@Injectable({
    providedIn: "root",
})
export class LookupService {
    private httpService = inject(HttpService);

    getCountries(): Observable<Country[]> {
        return this.httpService.get<Country[]>("/lookup/countries");
    }

    getOrganizationTypes(): Observable<OrganizationType[]> {
        return this.httpService.get<OrganizationType[]>("/lookup/organization-types");
    }
}
