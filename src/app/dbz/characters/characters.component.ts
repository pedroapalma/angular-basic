import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  /*@Input()
  characters: Character[] = [];*/

  get characters() {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {

  }
 
}
