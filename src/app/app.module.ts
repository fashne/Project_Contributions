import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterComponent } from './components/filter/filter.component'; 
import { JobsFilterComponent } from './components/jobs-filter/jobs-filter.component';
import { TemplateFilterComponent } from './components/template-filter/template-filter.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CategoryComponent } from './components/category/category.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateListComponent,
    DropdownComponent,
    FilterComponent, 
    JobsFilterComponent, TemplateFilterComponent, PaginationComponent, CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
