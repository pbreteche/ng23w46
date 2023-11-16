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
      'Content-type': 'application/json',
      'X-token': 'cle API',
    })

    this.client.get('/assets/bad-file-name.json', {
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
