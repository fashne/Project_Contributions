import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateListComponent } from './components/table/table.component';
import { CategoryComponent } from './components/templates/templates.component';
import { JobsComponent } from './components/jobs/jobs.component';

// configuring routes
const routes: Routes = [
  { path: 'templates/category', component: CategoryComponent },
  { path: 'jobs', component: JobsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
