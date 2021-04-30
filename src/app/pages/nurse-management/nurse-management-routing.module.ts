import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNurseComponent } from './add-nurse/add-nurse.component';
import { DeleteNurseComponent } from './delete-nurse/delete-nurse.component';
import { EditNurseComponent } from './edit-nurse/edit-nurse.component';
import { NurseManagementComponent } from './nurse-management.component';

const routes: Routes = [
  {
    path: 'nurse-details',
    component: NurseManagementComponent
  },
  {
    path: 'add-nurse-details',
    component: AddNurseComponent
  },
  {
    path: 'edit-nurse-details',
    component: EditNurseComponent
  },
  {
    path: 'change-nurse-status',
    component: DeleteNurseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseManagementRoutingModule { }
