import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Playlist, Song} from "../../model/song";
import {ActivatedRoute, Router} from "@angular/router";
import {SongListService} from "../../service/song-list.service";
import {LoaderService} from "../loader.service";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './playlist-detail.component.html',
  styleUrl: './playlist-detail.component.scss'
})
export class PlaylistDetailComponent implements OnInit {

  playlist?: Playlist;
  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.playlist = data['playlist'];
    })
  }
}
