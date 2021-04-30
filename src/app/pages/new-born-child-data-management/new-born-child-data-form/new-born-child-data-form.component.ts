import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-born-child-data-form',
  templateUrl: './new-born-child-data-form.component.html',
  styleUrls: ['./new-born-child-data-form.component.scss']
})
export class NewBornChildDataDetailsFormComponent implements OnInit {
  newBornChildDetailsForm: FormGroup;
  newToken: any;
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

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getNewBornChildDataID();
  }

  createForm() {
    this.newBornChildDetailsForm = this.fb.group({
      nameOfChild: ['', Validators.required],
      nameOfFather: ['', Validators.required],
      nameOfMother: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      parents_permanenet_address: ['', Validators.required],
      motherAdmissionIdHospitals: ['', Validators.required],
      childId: ['', Validators.required]
    });
  }

  generateNewBornChildDataId(token) {
    let temp = token.split('-');
    let data = temp[3];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[3] = convertValue.toString();
    return temp.join('-');
  }

  getNewBornChildDataID() {
    this.apiCall.getNewBornChildDetails().then(res => {
      this.newToken = res.pop();
      if (this.newToken && this.newToken.childId && this.newToken.childId != undefined) {
        this.newBornChildDetailsForm.patchValue({ childId: this.generateNewBornChildDataId(this.newToken.childId) })
      } else {
        this.newBornChildDetailsForm.patchValue({ childId: 'KMH-KNL-NBC-ID-1' })
      }
    });
  }

  postNewBornChildDataDetails() {
    this.apiCall.postNewBornChildDetails(this.newBornChildDetailsForm.value).then(res => {
      this.route.navigate(['/new-born-data-management/new-born-data'])
    });
  }

  fetchAdmissionIDDetails() {
    if (this.newBornChildDetailsForm.value.motherAdmissionIdHospitals) {
      this.apiCall.getPatientsByAdmissionID(this.newBornChildDetailsForm.value.motherAdmissionIdHospitals).then(res => {
        if (res.length > 0) {
          this.display = true;
          this.viewMoreDetailsObj = res[0];
        } else {
          alert('Please enter valid Admission ID')
          this.newBornChildDetailsForm.patchValue({ motherAdmissionIdHospitals: '' })
          this.display = false;
        }
      });
    } else {
      alert('Please enter valid Admission ID')
      this.display = false;
    }
  }

}
