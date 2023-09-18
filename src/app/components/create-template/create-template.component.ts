import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    // Get the breadcrumb label from the route data
    const breadcrumbLabel = this.route.snapshot.data['breadcrumb'];

    // Update the breadcrumb trail
    this.breadcrumbService.updateBreadcrumbs([
      // { label: 'Home', url: '/' },
      { label: breadcrumbLabel, url: this.route.snapshot.url.join('/') },
    ]);
  }

}