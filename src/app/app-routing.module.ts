import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterComponent } from './components/filter/filter.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  // { path: 'templates/category', component: TemplateListComponent }, 
  {path:'template/filter',component:FilterComponent},
  { path: 'templates/category', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

