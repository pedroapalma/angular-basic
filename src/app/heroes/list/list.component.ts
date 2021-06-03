import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk'];

  heroe: string;

  deleteHeroe(): void {
    this.heroe = this.heroes.shift() || "";
  }
}
