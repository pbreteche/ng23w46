import { Injectable } from '@angular/core';
import {Playlist} from "../model/song";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  save(playlist: Playlist) {
    if (!playlist.uuid) {
      playlist.uuid = uuidv4()
    }

    const key = `playlist-${playlist.uuid}`;

    localStorage.setItem(key, JSON.stringify(playlist));

    return playlist.uuid;
  }

  load(uuid: string): Playlist|undefined {
    let serializeData = localStorage.getItem(`playlist-${uuid}`);
    if (serializeData == undefined) {
      console.warn('Playlist non trouvée : '+uuid)
      return;
    }
    return JSON.parse(serializeData);
  }

  index() {
    return Object.entries(localStorage)
      .filter(([k,v]) => k.startsWith('playlist-'))
      .map(([k,v]) => k.replace(/^playlist-/, ''))
  }
}
