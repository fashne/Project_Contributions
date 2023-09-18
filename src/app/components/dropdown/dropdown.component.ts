import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  cars: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any[]) => { 
      this.cars = data.map((item: any) => item.Name); 
    });
  }
}
