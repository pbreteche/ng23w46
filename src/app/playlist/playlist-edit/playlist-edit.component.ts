import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {Playlist, Song} from "../../model/song";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {SongListService} from "../../service/song-list.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {LoaderService} from "../loader.service";

@Component({
  selector: 'app-playlist-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatListModule, MatSelectModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './playlist-edit.component.html',
  styleUrl: './playlist-edit.component.scss'
})
export class PlaylistEditComponent implements OnInit{
  playlist?: Playlist;
  selectedSong?: Song;
  constructor(
    private route: ActivatedRoute,
    public songList: SongListService,
    private loader: LoaderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.playlist = data['playlist'];
    })
  }

  add() {
    if (!this.selectedSong) {
      return;
    }
    this.playlist?.songs.push(this.selectedSong);
    this.selectedSong = undefined;
  }

  done() {
    this.loader.save(this.playlist!);
    this.router.navigate(['playlist', this.playlist?.uuid])
  }
}
