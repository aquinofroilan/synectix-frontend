import { Injectable, inject } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { environment } from '@environments/environment'

@Injectable( {
    providedIn: 'root'
} )
export class HttpService
{
    private readonly baseUrl = environment.apiBaseUrl;
    private http = inject( HttpClient );


    private getHeaders (): HttpHeaders
    {
        return new HttpHeaders( {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        } )
    }

    get<T> ( endpoint: string, params?: HttpParams ): Observable<T>
    {
        return this.http.get<T>( `${this.baseUrl}${endpoint}`, {
            headers: this.getHeaders(),
            params
        } ).pipe(
            retry( 2 ),
            catchError( this.handleError )
        )
    }

    post<T> ( endpoint: string, data: unknown ): Observable<T>
    {
        return this.http.post<T>( `${this.baseUrl}${endpoint}`, data, {
            headers: this.getHeaders()
        } ).pipe(
            catchError( this.handleError )
        )
    }

    put<T> ( endpoint: string, data: unknown ): Observable<T>
    {
        return this.http.put<T>( `${this.baseUrl}${endpoint}`, data, {
            headers: this.getHeaders()
        } ).pipe(
            catchError( this.handleError )
        )
    }

    delete<T> ( endpoint: string ): Observable<T>
    {
        return this.http.delete<T>( `${this.baseUrl}${endpoint}`, {
            headers: this.getHeaders()
        } ).pipe(
            catchError( this.handleError )
        )
    }

    private handleError ( error: unknown )
    {
        console.error( 'HTTP Error:', error )
        return throwError( () => error )
    }
}
