import { Routes } from '@angular/router';
import { WorkshopFormComponent } from './pages/workshop/workshop-form/workshop-form.component';
import { WorkshopListComponent } from './pages/workshop/workshop-list/workshop-list.component';

export const routes: Routes = [
  { path: 'workshops', component: WorkshopListComponent }
];
// { path: 'workshops/new', component: WorkshopFormComponent }
// { path: 'workshops/:id', component: WorkshopFormComponent }
