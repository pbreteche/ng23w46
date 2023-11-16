import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Song} from "../model/song";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SongListService} from "../song-list.service";

@Component({
  selector: 'app-song-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './song-edit.component.html',
  styleUrl: './song-edit.component.scss'
})
export class SongEditComponent implements OnInit {
  song?: Song;
  constructor(
    public songList: SongListService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  save() {
    const id = this.song!.id;
    this.songList.songs.set(id, this.song!);
    this.song = new Song();
    this.router.navigate(['detail', id]);
  }

  ngOnInit(): void {
    this.route.parent!.data.subscribe((data) => {
      this.song = structuredClone(data['song']);
    })
  }
}
