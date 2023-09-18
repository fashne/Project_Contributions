import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/templates/templates.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CreateTemplateComponent } from './components/create-template/create-template.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterComponent } from './components/filter/filter.component';
import { JobsFilterComponent } from './components/jobs-filter/jobs-filter.component';
import { TemplateFilterComponent } from './components/template-filter/template-filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateJobComponent } from './components/create-job/create-job.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CategoryComponent,
    SearchFilterComponent,
    JobsComponent,
    CreateTemplateComponent,
    BreadcrumbComponent,
    DropdownComponent,
    FilterComponent,
    JobsFilterComponent, TemplateFilterComponent, PaginationComponent, CategoryComponent, CreateJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
