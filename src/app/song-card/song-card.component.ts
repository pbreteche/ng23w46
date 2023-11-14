import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {songs} from "../fixtures/songs";

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent {
  song = songs[0];
}
