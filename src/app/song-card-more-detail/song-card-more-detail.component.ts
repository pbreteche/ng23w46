import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-song-card-more-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './song-card-more-detail.component.html',
  styleUrl: './song-card-more-detail.component.scss'
})
export class SongCardMoreDetailComponent {

}
