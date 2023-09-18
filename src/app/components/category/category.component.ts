import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CATEGORY } from '../../constants/table-headers-constants';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  columnHeadings = CATEGORY;
  GridArray: any = [];
  itemsPerPage = 10;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data: any[]) => {
        this.categories = data;
      }
    );
  }
  currentPage = 1;

  onPageChange(page: number) {
    this.currentPage = page;
  }

  get displayedRecords() {
    const startIndex = (this.currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    return this.GridArray.slice(startIndex, endIndex);
  }


}