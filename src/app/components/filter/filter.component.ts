import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  isPopupVisible: boolean = false;
  jsonData: any;
  startDate: string = '';
  endDate: string = '';
  isDropdownVisible: boolean = false; // Initialize it as false

  constructor() {
    this.jsonData = {
      message: 'This message is coming from JSON data.'
    };
  }

  ngOnInit() {
    // This method is called when the component is initialized.
    // You can perform any initialization logic here if needed.
  }

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  } 

  toggleDropdown() {
    // Toggle the dropdown's visibility
    this.isDropdownVisible = !this.isDropdownVisible;
  }

}
