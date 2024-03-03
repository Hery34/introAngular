import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstCompComponent } from "./first-comp/first-comp.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, FirstCompComponent, HeaderComponent, FooterComponent, ProductListComponent]
})
export class AppComponent {

}
