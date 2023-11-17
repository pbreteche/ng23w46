import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {LoaderService} from "../loader.service";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-playlist-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, MatToolbarModule, MatListModule, MatGridListModule],
  templateUrl: './playlist-overview.component.html',
  styleUrl: './playlist-overview.component.scss'
})
export class PlaylistOverviewComponent implements OnInit {
  keys: string[] = [];
  constructor(private loader: LoaderService) {
  }

  ngOnInit(): void {
    this.keys = this.loader.index()
  }
}
