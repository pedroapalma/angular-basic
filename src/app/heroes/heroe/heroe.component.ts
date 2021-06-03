import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 30;

  get nameUpperCase() {
    return this.name.toUpperCase();
  }

  getName(): string {
    return this.name + '-' + this.age;
  }

  setName (): void {
    this.name = 'Spiderman';
  }

  setAge (): void {
    this.age = 35;
  }
}
