import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-song-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './song-reactive-form.component.html',
  styleUrl: './song-reactive-form.component.scss'
})
export class SongReactiveFormComponent {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    artist: new FormControl('', [Validators.required]),
    year: new FormControl('', [
      Validators.min(1900),
      Validators.max(2200),
    ])
  });
}
