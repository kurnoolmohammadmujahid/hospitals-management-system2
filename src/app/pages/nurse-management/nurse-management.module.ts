import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AddNurseComponent } from './add-nurse/add-nurse.component';
import { DeleteNurseComponent } from './delete-nurse/delete-nurse.component';
import { EditNurseComponent } from './edit-nurse/edit-nurse.component';
import { NurseManagementRoutingModule } from './nurse-management-routing.module';
import { NurseManagementComponent } from './nurse-management.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    NurseManagementComponent,
    AddNurseComponent,
    EditNurseComponent,
    DeleteNurseComponent
  ],
  imports: [
    CommonModule,
    NurseManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RippleModule,
    DialogModule,
    ButtonModule,
    TableModule,
    DashboardModule,
    InputTextModule
  ],
  providers: [
    ApiServerService
  ]
})

export class NurseManagementModule { }
