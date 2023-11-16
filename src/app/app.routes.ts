import { Routes } from '@angular/router';
import {SongSelectListComponent} from "./Song/song-select-list/song-select-list.component";
import {SongCardComponent} from "./song-card/song-card.component";
import {SongReactiveFormComponent} from "./Song/song-reactive-form/song-reactive-form.component";
import {songResolver} from "./song.resolver";
import {songTitleResolver} from "./song-title.resolver";
import {loginGuard} from "./login.guard";
import {SongCardMoreDetailComponent} from "./song-card-more-detail/song-card-more-detail.component";
import {SongEditComponent} from "./song-edit/song-edit.component";
import {CataasComponent} from "./cataas/cataas/cataas.component";
import {SongTemplateFormComponent} from "./Song/song-template-form/song-template-form.component";

export const routes: Routes = [
  { path: '', component: SongSelectListComponent, title: 'Song app'},
  {
    path: 'detail/:id',
    component: SongCardComponent,
    resolve: {song: songResolver},
    runGuardsAndResolvers: 'always',
    title: songTitleResolver,
    children: [
      {path: '', component: SongCardMoreDetailComponent},
      {path: 'edit', component: SongEditComponent}
    ]
  },
  { path: 'new', component: SongReactiveFormComponent, title: 'Nouvelle chanson', canActivate: [loginGuard]},
  { path: 'cataas', component: CataasComponent, title: 'Cataas' },
  { path: '**', redirectTo: '/'}
];
