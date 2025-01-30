import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class DbzMainPageComponent {
  constructor(private dbzService: DbzService) { }

  get characters() {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(index: number): void {
    this.dbzService.onDeleteCharacter(index);
  }

  onDeleteCharacterById(id?: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(Character: Character): void {
    this.dbzService.onNewCharacter(Character);
  }
}
