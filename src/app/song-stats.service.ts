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
    setInterval(this.statsFor, 10000);
  }

  private statsFor() {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'X-token': 'cle API',
    })

    this.client.get('/assets/stats.json', {
      headers: headers,
    })
      .subscribe(data => this.subject.next(data))
  }

  get stats$() {
    return this.subject.asObservable();
  }
}
