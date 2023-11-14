import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { songs } from "./fixtures/songs";
import {SongCardComponent} from "./song-card/song-card.component";
import {SongSelectListComponent} from "./Song/song-select-list/song-select-list.component";
import {Song} from "./model/song";
import {SongTemplateFormComponent} from "./Song/song-template-form/song-template-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SongCardComponent,
    SongSelectListComponent,
    SongTemplateFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng23w46';
  current = songs[0]

  setCurrent($event: Song) {
    this.current = $event;
  }
}
