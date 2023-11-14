import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Song} from "../../model/song";
import {FormsModule} from "@angular/forms";
import {SongListService} from "../../song-list.service";

@Component({
  selector: 'app-song-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './song-template-form.component.html',
  styleUrl: './song-template-form.component.scss'
})
export class SongTemplateFormComponent {
  newSong = new Song();
  constructor(public songList: SongListService) {
  }

  save() {
    this.songList.songs.push(this.newSong);
    this.newSong = new Song();
  }
}
