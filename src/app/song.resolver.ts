import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {SongListService} from "./song-list.service";
import {Song} from "./model/song";

export const songResolver: ResolveFn<Song|undefined> = (route, state) => {
  return inject(SongListService).songs.get(+route.paramMap.get('id')!);
};
