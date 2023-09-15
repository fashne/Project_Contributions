import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service'
import { BreadcrumbItem } from 'src/app//models/breadcrumb_model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {


  breadcrumbs: Observable<BreadcrumbItem[]> = new Observable<BreadcrumbItem[]>();

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs$;
  }

}
