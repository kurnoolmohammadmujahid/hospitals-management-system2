import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServerService } from '../../../services/api-server.service';

@Component({
  selector: 'app-print-admission',
  templateUrl: './print-admission.component.html',
  styleUrls: ['./print-admission.component.scss']
})
export class PrintAdmissionComponent implements OnInit {

  paramId: string;
  product: any;
  elem;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    @Inject(DOCUMENT) private document: any,
    private apiCall: ApiServerService) { }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this._Activatedroute.paramMap.subscribe(params => {
      this.paramId = params.get('admissionId');
      console.log(this.paramId);
      this.apiCall.getPatientsByAdmissionID(this.paramId).then(data => {
        for (let item of data) {
          if (item.admissionId == this.paramId) {
            this.product = item;
            console.log(this.product);
            setTimeout(() => {
              window.print();
            }, 5000);
          }
        }
      });
    });
  }

}
