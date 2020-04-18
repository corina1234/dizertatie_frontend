import { Component, OnInit } from '@angular/core';
import {AngajatService} from "../services/angajat.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OfficeService} from "../services/office.service";
import {GeneralService} from "../services/general.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  baseUrl = "http://localhost:8080/";
  angajatId;
  angajat;
  offices = [];
  employeeForm: FormGroup;
  private email: FormControl;
  private phoneNumber: FormControl;
  private office: FormControl;

  constructor(private angajatService: AngajatService, private officeService: OfficeService,
              private generalService: GeneralService, private toastr: ToastrService) { }

  ngOnInit() {

    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.phoneNumber = new FormControl('', Validators.required);
    this.office = new FormControl('', Validators.required);
    this.employeeForm = new FormGroup({
      email: this.email,
      phoneNumber: this.phoneNumber,
      office: this.office
    });

    this.angajatService.getAngajatByEmail( sessionStorage.getItem('username'), "employeeDetails").subscribe((data) => {
      this.angajatId = (<any>data).id;
      this.angajat = data;
      this.email.setValue(this.angajat.email);
      this.phoneNumber.setValue(this.angajat.phoneNumber);
      if (this.angajat.office) {
        this.office.setValue(this.baseUrl + "office/" + this.angajat.office.id);
      }
      if(this.angajat.department && this.angajat.department.officesRoom){
        this.officeService.getAvailableOfficesForOfficeRoom(this.angajat.department.officesRoom.id, this.angajat.id).subscribe(offices =>
            this.offices = (<any>offices)._embedded.offices);

      }
    });

  }

  updateEmployee(employeeForm){
    this.generalService.updateResource(employeeForm, this.angajatId, "employee").subscribe(() => {
      this.toastr.success('Datele au fost modificate!');
      this.ngOnInit();
    });
  }
}
