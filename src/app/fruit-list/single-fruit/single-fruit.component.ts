import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-fruit',
  imports: [CommonModule],
  templateUrl: './single-fruit.component.html',
  styleUrl: './single-fruit.component.scss'
})
export class SingleFruitComponent {

  @Input()fruitnumber: number = 0;


}
