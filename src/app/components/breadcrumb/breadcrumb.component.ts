import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service'
import { BreadcrumbItem } from 'src/app//models/breadcrumb_model';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  private dataSubscription: Subscription = new Subscription;
  breadcrumbs: Observable<BreadcrumbItem[]> = new Observable<BreadcrumbItem[]>();

  constructor(private breadcrumbService: BreadcrumbService, private router: Router) { }

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs$;
  }
  ngOnDestroy(): void {

  }

  addClicked(): void {

    // Check if any breadcrumb's label contains "category"
    this.breadcrumbs
      .pipe(
        map((items) => items.some((breadcrumb) => breadcrumb.label.toLowerCase().includes('category')))
      )
      .subscribe((containsCategory) => {
        if (containsCategory) {
          this.router.navigateByUrl('templates/category/create_template');
        } else {
          console.log('No breadcrumb contains "category".');
        }
      });

    // Check if any breadcrumb's label contains "job"
    this.breadcrumbs
      .pipe(
        map((items) => items.some((breadcrumb) => breadcrumb.label.toLowerCase().includes('job')))
      )
      .subscribe((containsJob) => {
        if (containsJob) {
          this.router.navigateByUrl('jobs/create_job');
        } else {
          console.log('No breadcrumb contains "job".');
        }
      });

    console.log(this.breadcrumbs);
  }

}