import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _characters: Character[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegeta',
          power: 14000
        }
      ];

    constructor() {
        console.log('Servicio Inicializado');
    }

    get characters(): Character[] {
        return [...this._characters];
    }

    changeName(event: any) {
        console.log(event.target.value);
    }

    addNewCharacter(character: Character) {
        this._characters.push(character);
    }

}