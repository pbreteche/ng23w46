import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Playlist} from "../../model/song";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {LoaderService} from "../loader.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-playlist-new',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './playlist-new.component.html',
  styleUrl: './playlist-new.component.scss'
})
export class PlaylistNewComponent {
  newPlaylist = new Playlist();

  constructor(
    private loader: LoaderService,
    private router: Router
  ) {
  }

  save() {
    const uuid = this.loader.save(this.newPlaylist);
    this.newPlaylist = new Playlist();
    this.router.navigate(['/playlist', uuid, 'edit'])
  }
}
