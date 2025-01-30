import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
  ];

  constructor() {
    console.log('Dbz Service');
  }

  onNewCharacter(character: Character) {
    console.log('Main Page Component');
    console.log(`Adding character character: ${character}`);
    // uuid
    character.id = uuid();
    // agregar al final del arreglo
    this.characters.push(character);
  }
  
  onDeleteCharacter(index: number) {
    console.log('Main Page Component');
    console.log(`Deleting character index: ${index}`);
    this.characters.splice(index, 1);
  }

  onDeleteCharacterById(id?: string) {
    console.log('Main Page Component');
    if (!id) return
    console.log(`Deleting character id: ${id}`);
    this.characters = this.characters.filter(character => character.id !== id); 
  }

}
