import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Input()
  newCharacter: Character = {
    name: '',
    power: 0
  }

  /*@Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();*/

  constructor(private dbzService: DbzService) {

  }

  add() {
    if (this.newCharacter.name.length === 0) {return;}
    
    console.log(this.newCharacter);
    //this.onNewCharacter.emit(this.newCharacter);

    this.dbzService.addNewCharacter(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    } 
  }

}
