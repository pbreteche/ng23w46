import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SongListService} from "../../song-list.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-song-select-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './song-select-list.component.html',
  styleUrl: './song-select-list.component.scss'
})
export class SongSelectListComponent {
  constructor(
    public songList: SongListService
  ) {
  }
}
