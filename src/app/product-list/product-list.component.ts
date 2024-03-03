import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { FirstCompComponent } from "../first-comp/first-comp.component";
import { ProductService } from '../services/product.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [FirstCompComponent, CommonModule]
})
export class ProductListComponent implements OnInit {

  tableau1!: Product[];

  constructor(private ProductService: ProductService) {

  }

  ngOnInit() {
    this.tableau1 = this.ProductService.tableau
  }


}
