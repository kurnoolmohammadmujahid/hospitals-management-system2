import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getPatientIntakeData() {
    return this.http.get<any>(`${this.url}/patientIntakeDetails`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  postPatientIntakeData(intakeObj: object) {
    return this.http.post<any>(`${this.url}/patientIntakeDetails`, intakeObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getPatientsList() {
    return this.http.get<any>(`${this.url}/patientAdmissions`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getPatientsByAdmissionID(admissionId) {
    return this.http.get<any>(`${this.url}/patientAdmissions?admissionId=${admissionId}`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  postPatientAdmitDetails(admissionObj: object) {
    return this.http.post<any>(`${this.url}/patientAdmissions`, admissionObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  updatePatientAdmitDetailsAsDischarge(id: number, dischargeData: object) {
    return this.http.put<any>(`${this.url}/patientAdmissions/${id}`, dischargeData)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getHospitalExpenses() {
    return this.http.get<any>(`${this.url}/hospitalExpenses`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  postHospitalExpenses(expensesObj: object) {
    return this.http.post<any>(`${this.url}/hospitalExpenses`, expensesObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  updateHospitalExpensesById(id: number, expenseData: object) {
    return this.http.put<any>(`${this.url}/hospitalExpenses/${id}`, expenseData)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  updateDoctorDetailsById(id: number, editDoctorObj: object) {
    return this.http.put<any>(`${this.url}/doctorsDetails/${id}`, editDoctorObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getDoctorsDetails() {
    return this.http.get<any>(`${this.url}/doctorsDetails`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getActiveDoctorsDetails() {
    return this.http.get<any>(`${this.url}/doctorsDetails?status=Active`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getDoctorsByDoctorIdDetails(doctorId) {
    return this.http.get<any>(`${this.url}/doctorsDetails?doctorId=${doctorId}`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  postDoctorsDetails(addDoctorObj: object) {
    return this.http.post<any>(`${this.url}/doctorsDetails`, addDoctorObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  updateNurseDetailsById(id: number, editNurseObj: object) {
    return this.http.put<any>(`${this.url}/nursesDetails/${id}`, editNurseObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getNursesDetails() {
    return this.http.get<any>(`${this.url}/nursesDetails`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getNursesByNurseIdDetails(nurseId) {
    return this.http.get<any>(`${this.url}/nursesDetails?nurseId=${nurseId}`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  postNursesDetails(addNurseObj: object) {
    return this.http.post<any>(`${this.url}/nursesDetails`, addNurseObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  updateStaffDetailsById(id: number, editStaffObj: object) {
    return this.http.put<any>(`${this.url}/staffDetails/${id}`, editStaffObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getStaffDetails() {
    return this.http.get<any>(`${this.url}/staffDetails`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getStaffByStaffIdDetails(staffId) {
    return this.http.get<any>(`${this.url}/staffDetails?staffId=${staffId}`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  postStaffDetails(addStaffObj: object) {
    return this.http.post<any>(`${this.url}/staffDetails`, addStaffObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getBloodDonationDetails() {
    return this.http.get<any>(`${this.url}/bloodBankDonorDetails`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  postBloodDonorDetails(addDonorObj: object) {
    return this.http.post<any>(`${this.url}/bloodBankDonorDetails`, addDonorObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getNewBornChildDetails() {
    return this.http.get<any>(`${this.url}/newBornChildDetails`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  postNewBornChildDetails(addChildObj: object) {
    return this.http.post<any>(`${this.url}/newBornChildDetails`, addChildObj)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });
  }

  getLoginDetails() {
    return this.http.get<any>(`${this.url}/login`)
      .toPromise()
      .then(data => { return data; })
      .catch((err) => {
        console.log(err);
        alert("Unable to process your request, no connection established.");
      });

  }




}
