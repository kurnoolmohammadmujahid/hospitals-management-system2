import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  addStaffForm: FormGroup;
  newToken: any;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getStaffID();
  }

  createForm() {
    this.addStaffForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      status: ['Active', Validators.required],
      degree: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      staffId: ['', Validators.required]
    });
  }

  generateStaffId(token) {
    let temp = token.split("-");
    let data = temp[4];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[4] = convertValue.toString();
    return temp.join("-");
  }

  getStaffID() {
    this.apiCall.getStaffDetails().then(res => {
      this.newToken = res.pop();
      if (this.newToken && this.newToken.staffId && this.newToken.staffId != undefined) {
        this.addStaffForm.patchValue({ staffId: this.generateStaffId(this.newToken.staffId) })
      } else {
        this.addStaffForm.patchValue({ staffId: 'KMH-KNL-SF-ID-1' })
      }
    });
  }

  postStaffDetails() {
    this.apiCall.postStaffDetails(this.addStaffForm.value).then(res => {
      this.route.navigate(['/staff-management/staff-details'])
    });
  }

}
