import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Song} from "../../model/song";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-song-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './song-template-form.component.html',
  styleUrl: './song-template-form.component.scss'
})
export class SongTemplateFormComponent {
  newSong = new Song();
}
