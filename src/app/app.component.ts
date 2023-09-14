import { Component, OnInit } from '@angular/core';
import { Category } from './models/category_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EDS_UI';

  logo = "assets/EDS logo.png";

  categories: Category[] = [
    {
      id: '111',
      name: 'Category A'
    },
    {
      id: '222',
      name: 'Category B'
    },
    {
      id: '333',
      name: 'Category C'
    },
    {
      id: '444',
      name: 'Category D'
    }
  ];
}
