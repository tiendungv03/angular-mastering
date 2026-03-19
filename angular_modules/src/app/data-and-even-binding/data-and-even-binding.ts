import { Component } from '@angular/core';

@Component({
  selector: 'app-data-and-even-binding',
  standalone: false,
  templateUrl: './data-and-even-binding.html',
  styleUrl: './data-and-even-binding.css',
})
export class DataAndEvenBinding {
  name = 'Data & Event Binding';
  sum = 0;

  public data = {
    name: 'Tien Dung',
    age: 23,
  };

  handler(event: MouseEvent): void {
    console.log('Click ', this.sum, event);
    this.sum++;
  }
}
