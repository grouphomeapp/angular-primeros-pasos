import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent { 
  public character: Character = {
    name: '',
    power: 0
  };

  @Output()
  onNewCharacter: EventEmitter<Character>= new EventEmitter();


  constructor() {
    
  }

  addCharacter() {
    // debugger;
    console.log(this.character);
    if (this.character.name.trim().length === 0) {
      return;
    }
    this.onNewCharacter.emit(this.character);
    this.character = {
      name: '',
      power: 0
    }
  }
}
