import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SongListService} from "../../song-list.service";
import {Song} from "../../model/song";
import {Router} from "@angular/router";

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
  constructor(
    public songList: SongListService,
    private router: Router
  ) {
  }
  get artist() {
    return this.form.get('artist');
  }

  showErrorFor(formControlName: string, errorKey?: string) {
    const formControl = this.form.get(formControlName);
    if (errorKey) {
      return formControl?.errors?.[errorKey] && formControl?.touched;
    }

    return formControl?.invalid && formControl?.touched;
  }

  save() {
    console.log(this.form.value)
    const newId = this.songList.add(this.form.value as Song);
    this.form.reset();
    this.router.navigate(['detail', newId])
  }
}
