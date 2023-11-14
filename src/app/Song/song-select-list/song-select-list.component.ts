import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Song} from "../../model/song";

@Component({
  selector: 'app-song-select-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-select-list.component.html',
  styleUrl: './song-select-list.component.scss'
})
export class SongSelectListComponent {
  @Input()
  songs: Song[] = [];
}
