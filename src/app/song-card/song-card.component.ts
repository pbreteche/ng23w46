import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Song} from "../model/song";

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent {
  @Input()
  song?: Song;
}
