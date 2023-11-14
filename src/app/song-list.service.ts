import { Injectable } from '@angular/core';
import {songs} from "./fixtures/songs";

@Injectable({
  providedIn: 'root'
})
export class SongListService {
  songs = songs;
}
