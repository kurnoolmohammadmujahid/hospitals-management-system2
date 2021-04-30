import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-nurse',
  templateUrl: './edit-nurse.component.html',
  styleUrls: ['./edit-nurse.component.scss']
})
export class EditNurseComponent implements OnInit {
  editNurseForm: FormGroup;
  newToken: any;
  getNurseDetailsForm: FormGroup;
  nursesLst: any;
  id: any;
  errMsg: boolean;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    // this.getNurseID();
  }

  createForm() {
    this.getNurseDetailsForm = this.fb.group({
      nurseId: ['', Validators.required],
    })
    this.editNurseForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      status: ['Active', Validators.required],
      degree: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      nurseId: ['', Validators.required]
    });
  }

  generateNurseId(token) {
    let temp = token.split("-");
    let data = temp[3];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[3] = convertValue.toString();
    return temp.join("-");
  }

  getNurseID() {
    this.apiCall.getNursesDetails().then(res => {
      this.nursesLst = res;
    });
  }

  postNurseDetails() {
    this.editNurseForm.patchValue({ status: 'Active' });
    this.apiCall.updateNurseDetailsById(this.id, this.editNurseForm.value).then(res => {
      this.route.navigate(['/nurse-management/nurse-details'])
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
    "nurseId": "",
  }

  showDialog(showData) {
    this.display = true;
    this.editNurseForm.patchValue(showData);
    this.id = showData.id;
  }

  getNurseData() {
    this.apiCall.getNursesByNurseIdDetails(this.getNurseDetailsForm.value.nurseId).then(res => {
      if (res.length > 0) {
        this.showDialog(res[0]);
        this.errMsg = false;
      } else {
        this.errMsg = true;
        this.display = false;
      }
    });
    // for (let obj of this.nursesLst) {
    //   if (obj.nurseId == this.getNurseDetailsForm.value.nurseId) {
    //     this.showDialog(obj);
    //   }
    // }
  }


}
