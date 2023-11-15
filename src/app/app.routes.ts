import { Routes } from '@angular/router';
import {SongSelectListComponent} from "./Song/song-select-list/song-select-list.component";
import {SongCardComponent} from "./song-card/song-card.component";
import {SongReactiveFormComponent} from "./Song/song-reactive-form/song-reactive-form.component";
import {songResolver} from "./song.resolver";

export const routes: Routes = [
  { path: '', component: SongSelectListComponent},
  { path: 'detail/:id', component: SongCardComponent, resolve: {song: songResolver}},
  { path: 'new', component: SongReactiveFormComponent}
];
