import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {Playlist} from "../model/song";
import {LoaderService} from "./loader.service";

export const playlistResolver: ResolveFn<Playlist|undefined> = (route, state) => {
  return inject(LoaderService).load(route.paramMap.get('uuid')!);
};
