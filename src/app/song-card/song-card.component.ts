import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {Song} from "../model/song";

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent implements OnInit{
  song?: Song;
  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.song = data['song'];
    })
  }
}
