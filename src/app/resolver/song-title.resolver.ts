import { ResolveFn } from '@angular/router';
import {songResolver} from "./song.resolver";
import {Song} from "../model/song";

export const songTitleResolver: ResolveFn<string> = (route, state) => {
  return (songResolver(route, state) as Song)?.title || 'Titre inconnu';
};
