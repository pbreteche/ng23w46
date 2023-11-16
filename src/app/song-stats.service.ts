import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from "rxjs";

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

    this.client.get('/assets/stats.json', {
      headers: headers,
      observe: "response"
    })
      .subscribe(response => {
        const type = response.headers.get('content-type');
        console.log(type)
      })
  }

  get stats$() {
    return this.subject.asObservable();
  }
}
