import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    this.client.get('/assets/stats.json')
      .subscribe(data => this.subject.next(data))
  }

  get stats$() {
    return this.subject.asObservable();
  }
}
