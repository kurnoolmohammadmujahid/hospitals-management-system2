import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBornChildDataDetailsFormComponent } from './new-born-child-data-form/new-born-child-data-form.component';
import { NewBornChildDataManagementComponent } from './new-born-child-data-management.component';

const routes: Routes = [
  {
    path: 'new-born-data',
    component: NewBornChildDataManagementComponent
  },
  {
    path: 'new-born-details',
    component: NewBornChildDataDetailsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBornChildDataManagementRoutingModule { }
