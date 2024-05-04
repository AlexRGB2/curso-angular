import { Component } from '@angular/core';
import { VctService } from '../services/vct.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-vct-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private vctService: VctService) {}

  get characters(): Character[] {
    return [...this.vctService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.vctService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.vctService.addCharacter(character);
  }
}
