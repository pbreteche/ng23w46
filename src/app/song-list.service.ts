import { Injectable } from '@angular/core';
import {songs} from "./fixtures/songs";
import {Song} from "./model/song";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SongListService {
  songs: Map<number,Song> = new Map();
  nextId = 34;

  constructor(private client: HttpClient) {
    this.client.get('/assets/songs.json').subscribe(
      (data) => {
        if (!Array.isArray(data)) {
          return;
        }
        data.forEach((song => this.songs.set(song.id, song)))
      }
    )
  }

  add(song: Song) {
    song.id = this.nextId;
    this.songs.set(this.nextId, song);
    ++this.nextId;

    return song.id;
  }
}
