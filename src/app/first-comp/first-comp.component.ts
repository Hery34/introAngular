import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})
export class FirstCompComponent {
  // on précise ce qu'on aura en entrée
  @Input() product!: Product
  buttonText!: String;




  onCountUp() {
    this.product.count++
  }
  jaime() {
    this.product.count++
  }
  jaimePas() {
    this.product.count--
  }


}
