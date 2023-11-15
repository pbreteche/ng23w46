import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SongCardComponent} from "./song-card/song-card.component";
import {SongSelectListComponent} from "./Song/song-select-list/song-select-list.component";
import {SongReactiveFormComponent} from "./Song/song-reactive-form/song-reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SongCardComponent,
    SongSelectListComponent,
    SongReactiveFormComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng23w46';
}
