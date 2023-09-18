import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalRecords: number = 0;  
  @Input() recordsPerPage: number = 10;  
  @Output() pageChange = new EventEmitter<number>();

  currentPage = 1;

  onPageChange(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.recordsPerPage);
  }

  get pages(): number[] {
    const pagesArray = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }
}
