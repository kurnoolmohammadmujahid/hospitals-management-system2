import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
  editDoctorForm: FormGroup;
  newToken: any;
  getDoctorDetailsForm: FormGroup;
  doctorsLst: any;
  id: any;
  errMsg: any;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    // this.getDoctorID();
  }

  createForm() {
    this.getDoctorDetailsForm = this.fb.group({
      doctorId: ['', Validators.required],
    })
    this.editDoctorForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      status: ['Active', Validators.required],
      degree: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      doctorId: ['', Validators.required]
    });
  }

  generateDoctorId(token) {
    let temp = token.split("-");
    let data = temp[3];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[3] = convertValue.toString();
    return temp.join("-");
  }

  getDoctorID() {
    this.apiCall.getDoctorsDetails().then(res => {
      this.doctorsLst = res;
    });
  }

  postDoctorDetails() {
    this.editDoctorForm.patchValue({ status: 'Active' });
    this.apiCall.updateDoctorDetailsById(this.id, this.editDoctorForm.value).then(res => {
      this.route.navigate(['/doctors-management/doctor-details'])
    });
  }

  display: boolean = false;
  viewMoreDetailsObj = {
    "name": "",
    "age": "",
    "status": "",
    "degree": "",
    "designation": "",
    "address": "",
    "phone": "",
    "gender": "",
    "doctorId": "",
  }

  showDialog(showData) {
    this.display = true;
    this.editDoctorForm.patchValue(showData);
    this.id = showData.id;
  }

  getDoctorData() {
    this.apiCall.getDoctorsByDoctorIdDetails(this.getDoctorDetailsForm.value.doctorId).then(res => {
      if (res.length > 0) {
        this.showDialog(res[0]);
        this.errMsg = false;
      } else {
        this.errMsg = true;
        this.display = false;
      }
    });
    // for (let obj of this.doctorsLst) {
    //   if (obj.doctorId == this.getDoctorDetailsForm.value.doctorId) {
    //     this.showDialog(obj);
    //   }
    // }
  }


}
