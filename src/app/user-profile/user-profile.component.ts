import { Component, OnInit } from '@angular/core';
import {AngajatService} from "../services/angajat.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OfficeService} from "../services/office.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //TODO delete hardcoded id + salvare modificari
  baseUrl = "http://localhost:8080/";
  angajatId = 4;
  angajat;
  offices = [];
  employeeForm: FormGroup;
  private email: FormControl;
  private telefon: FormControl;
  private birou: FormControl;

  constructor(private angajatService: AngajatService, private officeService: OfficeService) { }

  ngOnInit() {

    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.telefon = new FormControl('', Validators.required);
    this.birou = new FormControl('', Validators.required);
    this.employeeForm = new FormGroup({
      email: this.email,
      telefon: this.telefon,
      birou: this.birou
    });

    this.angajatService.getAngajatDetailedById(this.angajatId).subscribe(data => {
      this.angajat = data;
      this.email.setValue(this.angajat.email);
      this.telefon.setValue(this.angajat.phoneNumber);
      if (this.angajat.office) {
        this.birou.setValue(this.baseUrl + "office/" + this.angajat.office.id);
      }
      if(this.angajat.department && this.angajat.department.officesRoom){
        this.officeService.getAvailableOfficesForOfficeRoom(this.angajat.department.officesRoom.id, this.angajat.id).subscribe(offices =>
        this.offices = (<any>offices)._embedded.offices);

      }
    });
  }

}
