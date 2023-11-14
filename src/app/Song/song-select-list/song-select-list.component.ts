import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Song} from "../../model/song";
import {SongListService} from "../../song-list.service";

@Component({
  selector: 'app-song-select-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-select-list.component.html',
  styleUrl: './song-select-list.component.scss'
})
export class SongSelectListComponent {
  @Output()
  onSelect = new EventEmitter<Song>();

  constructor(public songList: SongListService) {
  }

  select(song: Song) {
    console.debug('onSelect event', song)
    this.onSelect.emit(song);
  }
}
