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

}
