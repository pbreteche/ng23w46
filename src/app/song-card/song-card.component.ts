import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SongListService} from "../song-list.service";
import {Song} from "../model/song";

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent implements OnInit{
  song?: Song;
  constructor(
    private route: ActivatedRoute,
    private list: SongListService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        this.song = this.list.songs.get(+idParam);
      }
    })
  }
}
