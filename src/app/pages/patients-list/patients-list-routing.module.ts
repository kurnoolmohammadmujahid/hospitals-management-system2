import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAdmissionComponent } from './patient-admission/patient-admission.component';
import { PatientBillingComponent } from './patient-billing/patient-billing.component';
import { PatientDischargeComponent } from './patient-discharge/patient-discharge.component';
import { PatientsListComponent } from './patients-list.component';
import { PrintAdmissionComponent } from './print-admission/print-admission.component';

const routes: Routes = [
    {
        path: 'patient-data',
        component: PatientsListComponent
    },
    {
        path: 'patient-discharge',
        component: PatientDischargeComponent
    },
    {
        path: 'patient-admission',
        component: PatientAdmissionComponent
    },
    {
        path: 'billing-system',
        component: PatientBillingComponent
    },
    {
        path: 'print-admission/:admissionId',
        component: PrintAdmissionComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientsListRoutingModule { }
