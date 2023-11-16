import { Injectable } from '@angular/core';
import {Song} from "./model/song";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongListService {
  songs: Map<number,Song> = new Map();
  nextId = 34;
  subject = new BehaviorSubject<Map<number, Song>>(new Map())

  constructor(private client: HttpClient) {
    this.refresh()
  }

  refresh() {
    this.client.get('/assets/songs.json').subscribe(
      (data) => {
        if (!Array.isArray(data)) {
          return;
        }
        this.songs = new Map();
        data.forEach((song => this.songs.set(song.id, song)))
        this.subject.next(this.songs);
      }
    )
  }

  get songs$(): Observable<Map<number, Song>> {
    return this.subject.asObservable();
  }

  add(song: Song) {
    song.id = this.nextId;
    this.songs.set(this.nextId, song);
    ++this.nextId;
    this.subject.next(this.songs);

    return song.id;
  }
}
