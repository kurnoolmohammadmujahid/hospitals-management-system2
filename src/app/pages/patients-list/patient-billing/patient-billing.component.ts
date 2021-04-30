import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-billing',
  templateUrl: './patient-billing.component.html',
  styleUrls: ['./patient-billing.component.scss']
})
export class PatientBillingComponent implements OnInit {
  getpatientDetailsForm: FormGroup;
  billingForm: FormGroup
  elem;
  admissionLst: any;
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
    'status': '',
    'payment': '',
    'dischargeDateTime': '',
    'charges': [
      {
        'doctorsCharge': '',
        'roomCharge': '',
        'hospitalsCharge': '',
        'medicalCharge': '',
        'serviceCharge': '',
        'totalAmount': '',
        'discount': '',
        'paidAmount': ''
      }
    ]
  }
  id: any;
  days: any
  finalAmount: any;
  discount: any;
  paidAmount: any
  errMsg: boolean;
  constructor(@Inject(DOCUMENT) private document: any,
    private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    // this.getAdmissionsList();
  }

  createForm() {
    this.getpatientDetailsForm = this.fb.group({
      admissionId: ['', Validators.required],
    });
    this.billingForm = this.fb.group({
      doctorsCharge: ['', Validators.required],
      roomCharge: ['', Validators.required],
      hospitalsCharge: ['', Validators.required],
      medicalCharge: ['', Validators.required],
      serviceCharge: ['', Validators.required],
    });
  }

  getAdmissionsList() {
    this.apiCall.getPatientsList().then(res => {
      this.admissionLst = res;
    });
  }

  getAdmissionData() {
    this.apiCall.getPatientsByAdmissionID(this.getpatientDetailsForm.value.admissionId).then(res => {
      if (res.length > 0) {
        if (res[0].payment == 'Pending') {
          this.showDialog(res[0]);
          this.errMsg = false;
        } else {
          this.errMsg = true;
          this.display = false;
        }
      } else {
        this.errMsg = true;
        this.display = false;
      }
    });
    // for (let obj of this.admissionLst) {
    //   if (obj.admissionId == this.getpatientDetailsForm.value.admissionId) {
    //     this.showDialog(obj);
    //   }
    // }
  }

  display: boolean = false;

  todayCalculation() {
    let d = new Date();
    let datestring = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    return datestring;
    // 16-5-2015 9:50
  }

  showDialog(showData) {
    this.display = true;
    this.viewMoreDetailsObj.patientName = showData.patientName;
    this.viewMoreDetailsObj.admissionId = showData.admissionId;
    this.viewMoreDetailsObj.admissionDate = showData.admissionDate;
    this.viewMoreDetailsObj.admissionTime = showData.admissionTime;
    this.viewMoreDetailsObj.gender = showData.gender;
    this.viewMoreDetailsObj.age = showData.age;
    this.viewMoreDetailsObj.address = showData.address;
    this.viewMoreDetailsObj.symptoms = showData.symptoms;
    this.viewMoreDetailsObj.pNumber = showData.pNumber;
    this.viewMoreDetailsObj.marritalStatus = showData.marritalStatus;
    this.viewMoreDetailsObj.occupation = showData.occupation;
    this.viewMoreDetailsObj.doctor = showData.doctor;
    this.viewMoreDetailsObj.bedNumber = showData.bedNumber;
    this.viewMoreDetailsObj.status = showData.status;
    this.id = showData.id;
    this.days = this.datediff(this.parseDate(showData.admissionDate), this.parseDate(this.todayCalculation()));
  }

  parseDate(str) {
    // 16/5/2015 
    // var mdy = str.split('/');
    // return new Date(mdy[2], mdy[0]-1, mdy[1]);
    // 2015-5-16
    let mdy = str.split('-');
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
  }

  datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  calculateTotal() {
    this.finalAmount = this.billingForm.value.doctorsCharge +
      this.billingForm.value.roomCharge +
      this.billingForm.value.hospitalsCharge +
      this.billingForm.value.medicalCharge +
      this.billingForm.value.serviceCharge;
    // this.paidAmount = this.finalAmount;
    let val = this.discount ? this.discount : 0;
    let x = this.finalAmount;
    let y = val / 100;
    this.paidAmount = x - (x * y);
  }

  eventHandler(e) {
    // event comes as parameter, you'll have to find selectedData manually
    // by using e.target.data
    let val = e.target.value;
    let x = this.finalAmount;
    let y = val / 100;
    this.paidAmount = x - (x * y);
  }

  paidStatus() {
    if (this.paidAmount) {
      this.patientStatusUpdateCall();
    }
  }

  patientStatusUpdateCall() {
    // this.viewMoreDetailsObj.status = 'Discharged';
    this.viewMoreDetailsObj.payment = 'Paid';
    this.viewMoreDetailsObj.charges[0].discount = this.discount;
    this.viewMoreDetailsObj.charges[0].doctorsCharge = this.billingForm.value.doctorsCharge;
    this.viewMoreDetailsObj.charges[0].hospitalsCharge = this.billingForm.value.hospitalsCharge;
    this.viewMoreDetailsObj.charges[0].medicalCharge = this.billingForm.value.medicalCharge;
    this.viewMoreDetailsObj.charges[0].paidAmount = this.paidAmount;
    this.viewMoreDetailsObj.charges[0].roomCharge = this.billingForm.value.roomCharge;
    this.viewMoreDetailsObj.charges[0].serviceCharge = this.billingForm.value.serviceCharge;
    this.viewMoreDetailsObj.charges[0].totalAmount = this.finalAmount;
    this.apiCall.updatePatientAdmitDetailsAsDischarge(this.id, this.viewMoreDetailsObj).then(res1 => {
      console.log(res1);
      this.route.navigate(['/patient-management/patient-data'])
    });
  }


}
