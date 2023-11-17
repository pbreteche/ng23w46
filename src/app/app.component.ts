import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TransliterationPipe} from "./pipe/transliteration.pipe";
import {HighlightDirective} from "./directive/highlight.directive";
import {UnlessDirective} from "./directive/unless.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    LoginComponent,
    TransliterationPipe,
    HighlightDirective,
    UnlessDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng23w46';

  get classes() {
    return {
      highlighted: true,
      is_changed: false,
    }
  }
}
