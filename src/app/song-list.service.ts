import { Injectable } from '@angular/core';
import {songs} from "./fixtures/songs";
import {Song} from "./model/song";

@Injectable({
  providedIn: 'root'
})
export class SongListService {
  songs = songs;
  nextId = 34;

  add(song: Song) {
    song.id = this.nextId;
    this.songs.set(this.nextId, song);
    ++this.nextId;

    return song.id;
  }
}
