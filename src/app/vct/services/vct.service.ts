import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class VctService {
  public characters: Character[] = [
    { id: uuid(), name: 'Viper', power: 1000 },
    { id: uuid(), name: 'Gekko', power: 700 },
    { id: uuid(), name: 'Chamber', power: 600 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  //   onDeleteCharacter(index: number): void {
  //     this.characters.splice(index, 1);
  //   }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
