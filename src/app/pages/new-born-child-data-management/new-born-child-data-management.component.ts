import { Component, OnInit } from '@angular/core';
import { ApiServerService } from 'src/app/services/api-server.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-new-born-child-data-management',
  templateUrl: './new-born-child-data-management.component.html',
  styleUrls: ['./new-born-child-data-management.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class NewBornChildDataManagementComponent implements OnInit {
  products = [];
  display: boolean = false;
  viewMoreDetailsObj = {
    'patientName': '',
    'admissionId': '',
    'admissionDate': '',
    'admissionTime': '',
    'gender': '',
    'age': '',
    'address': '',
    'symptoms': '',
    'pNumber': '',
    'marritalStatus': '',
    'occupation': '',
    'doctor': '',
    'bedNumber': '',
  }

  constructor(private primengConfig: PrimeNGConfig,
    private apiCall: ApiServerService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getExpensesList();
  }

  getExpensesList() {
    this.apiCall.getNewBornChildDetails().then(res => {
      this.products = res;
      this.products.reverse();
    });
  }

  fetchAdmissionIDDetails(value) {
    this.apiCall.getPatientsByAdmissionID(value).then(res => {
      if (res.length > 0) {
        this.display = true;
        this.viewMoreDetailsObj = res[0];
      } else {
        alert('Please enter valid Admission ID')
        this.display = false;
      }
    });
  }

}
