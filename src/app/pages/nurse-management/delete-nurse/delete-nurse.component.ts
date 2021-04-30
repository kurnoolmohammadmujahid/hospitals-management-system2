import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-delete-nurse',
  templateUrl: './delete-nurse.component.html',
  styleUrls: ['./delete-nurse.component.scss']
})
export class DeleteNurseComponent implements OnInit {
  editNurseForm: FormGroup;
  newToken: any;
  ChangeNurseStatusForm: FormGroup;
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
    this.ChangeNurseStatusForm = this.fb.group({
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
    this.editNurseForm.patchValue({ status: 'InActive' })
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
    this.viewMoreDetailsObj.name = showData.name;
    this.viewMoreDetailsObj.age = showData.age;
    this.viewMoreDetailsObj.status = showData.status;
    this.viewMoreDetailsObj.degree = showData.degree;
    this.viewMoreDetailsObj.designation = showData.designation;
    this.viewMoreDetailsObj.address = showData.address;
    this.viewMoreDetailsObj.phone = showData.phone;
    this.viewMoreDetailsObj.gender = showData.gender;
    this.viewMoreDetailsObj.nurseId = showData.nurseId;
    this.id = showData.id;
  }

  getNurseData() {
    this.apiCall.getNursesByNurseIdDetails(this.ChangeNurseStatusForm.value.nurseId).then(res => {
      if (res.length > 0) {
        this.showDialog(res[0]);
        this.errMsg = false;
      } else {
        this.errMsg = true;
        this.display = false;
      }
    });
    // for (let obj of this.nursesLst) {
    //   if (obj.nurseId == this.ChangeNurseStatusForm.value.nurseId) {
    //     this.showDialog(obj);
    //   }
    // }
  }


}
