import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

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
