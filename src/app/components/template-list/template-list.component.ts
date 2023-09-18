import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/models/table_model';
import { TemplateListService } from 'src/app/services/template-list.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit { 
  HeadArray: string[] = ["JobID", "TemplateName", "DateCreated", "LastUpdated", "Status"];
  GridArray: any = [];
  isAction: boolean = true; 
  itemsPerPage = 10;

  constructor(private templateListService: TemplateListService) { }

  ngOnInit(): void {
    this.templateListService.getTableData()
      .subscribe({
        next: (GridArray) => {
          this.GridArray = GridArray;
        },
        error: (response) => {
          console.log(response);
        }
      })
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
