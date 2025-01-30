import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, type OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();


  DeleteCharacter(index: number): void {
    console.log(`send character index: ${index}`);
    this.onDeleteCharacter.emit(index);
    // this.characterList.splice(index, 1);
  }

  DeleteCharacterById(id?: string): void {
    console.log(`send character index: ${id}`);
    if(!id) return;
    this.onDeleteCharacterById.emit(id);
  }
}