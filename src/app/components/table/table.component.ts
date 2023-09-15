import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/models/table_model';
import { TemplateListService } from 'src/app/services/template-list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TemplateListComponent implements OnInit {

  HeadArray: string[] = ["JobID", "TemplateName", "DateCreated", "LastUpdated", "Status"];
  GridArray: any = [];
  isAction: boolean = true;
  isSelectable: boolean = true;

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

  // Calculate whether all checkboxes are selected
  // get allSelected(): boolean {
  //   return this.GridArray.every(item => item.selected);
  // }

  // selectAllClicked(event: any) {
  //   const checked = event.target.checked;
  //   this.GridArray.forEach(item => (item.selected = checked));
  // }


}
