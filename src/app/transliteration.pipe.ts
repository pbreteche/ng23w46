import { Pipe, PipeTransform } from '@angular/core';
import {OptionReplaceCombined, transliterate} from "transliteration";

@Pipe({
  name: 'transliterate',
  standalone: true
})
export class TransliterationPipe implements PipeTransform {

  transform(value: string|undefined, replace: OptionReplaceCombined | undefined): string|undefined {
    if (value == undefined) {
      return;
    }

    return transliterate(value, {replace: replace});
  }
}
