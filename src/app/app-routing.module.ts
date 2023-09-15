import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { CategoryComponent } from './components/templates/templates.component';
import { JobsComponent } from './components/jobs/jobs.component';

// configuring routes
const routes: Routes = [
  { path: 'templates/category', component: CategoryComponent, data: { breadcrumb: 'Category' } },
  { path: 'jobs', component: JobsComponent, data: { breadcrumb: 'Jobs' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
