import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { songs } from "./fixtures/songs";
import {SongCardComponent} from "./song-card/song-card.component";
import {SongSelectListComponent} from "./Song/song-select-list/song-select-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SongCardComponent, SongSelectListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng23w46';
  songs = songs;
}
