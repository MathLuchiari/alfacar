import { Routes } from '@angular/router';
import { WorkshopFormComponent } from './pages/workshop/workshop-form/workshop-form.component';

export const routes: Routes = [
  { path: 'workshops/new', component: WorkshopFormComponent },
  { path: 'workshops/:id', component: WorkshopFormComponent }
];
