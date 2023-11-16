import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongStatsService {
  private subject = new Subject();
  constructor(
    private client: HttpClient
  ) {
    this.statsFor();
  }

  private statsFor() {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'X-token': 'cle API',
    })

    const data = new URLSearchParams();
    data.set('value', '123');

    this.client.post('/api/endpoint', data, {
      headers: headers,
      observe: "response"
    })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error.message)

          return throwError(() => new Error('message d\'erreur : '+error.status))
        })
      )
      .subscribe(response => {
        const type = response.headers.get('content-type');
        console.log(type)
      })
  }

  get stats$() {
    return this.subject.asObservable();
  }
}
