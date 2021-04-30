import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-nurse',
  templateUrl: './add-nurse.component.html',
  styleUrls: ['./add-nurse.component.scss']
})
export class AddNurseComponent implements OnInit {
  addNurseForm: FormGroup;
  newToken: any;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getNurseID();
  }

  createForm() {
    this.addNurseForm = this.fb.group({
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
    let data = temp[4];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[4] = convertValue.toString();
    return temp.join("-");
  }

  getNurseID() {
    this.apiCall.getNursesDetails().then(res => {
      this.newToken = res.pop();
      if (this.newToken && this.newToken.nurseId && this.newToken.nurseId != undefined) {
        this.addNurseForm.patchValue({ nurseId: this.generateNurseId(this.newToken.nurseId) })
      } else {
        this.addNurseForm.patchValue({ nurseId: 'KMH-KNL-NR-ID-1' })
      }
    });
  }

  postNurseDetails() {
    this.apiCall.postNursesDetails(this.addNurseForm.value).then(res => {
      this.route.navigate(['/nurse-management/nurse-details'])
    });
  }

}
