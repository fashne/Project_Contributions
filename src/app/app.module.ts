import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateListComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/templates/templates.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CreateTemplateComponent } from './components/create-template/create-template.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateListComponent,
    CategoryComponent,
    SearchFilterComponent,
    JobsComponent,
    CreateTemplateComponent
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
