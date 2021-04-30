import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { PatientAdmissionComponent } from './patient-admission/patient-admission.component';
import { PatientBillingComponent } from './patient-billing/patient-billing.component';
import { PatientDischargeComponent } from './patient-discharge/patient-discharge.component';
import { PatientsListRoutingModule } from './patients-list-routing.module';
import { PatientsListComponent } from './patients-list.component';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PrintAdmissionComponent } from './print-admission/print-admission.component';
@NgModule({
  declarations: [
    PatientsListComponent,
    PatientDischargeComponent,
    PatientAdmissionComponent,
    PatientBillingComponent,
    PrintAdmissionComponent
  ],
  imports: [
    CommonModule,
    PatientsListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RippleModule,
    DialogModule,
    ButtonModule,
    TableModule,
    DashboardModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [
    ApiServerService
  ]
})

export class PatientsListModule { }
