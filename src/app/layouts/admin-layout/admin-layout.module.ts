import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {PlanCladireComponent} from "../../plan-cladire/plan-cladire.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {PlanParterComponent} from "../../plan-cladire/parter/plan-parter.component";
import {Etaj1Component} from "../../plan-cladire/etaj1/etaj-1.component";
import {Etaj2Component} from "../../plan-cladire/etaj2/etaj-2.component";
import {AppModule} from "../../app.module";
import {MeetingRoomService} from "../../services/meetingRoom.service";
import {AngajatiComponent} from "./angajati/listing/angajati.component";
import {DetaliiAngajatComponent} from "./angajati/detalii/detalii-angajat.component";
import {DepartamenteComponent} from "./departamente/listing/departamente.component";
import {DepartDetaliiComponent} from "./departamente/detalii/depart-detalii.component";
import {BookMeetingRoomComponent} from "./bookMeetingRoom/book-meeting-room.component";
import {GeneralService} from "../../services/general.service";
import {AngajatService} from "../../services/angajat.service";
import {DepartmentService} from "../../services/department.service";
import {OfficesRoomService} from "../../services/officesRoom.service";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonToggleModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    PlanCladireComponent,
      PlanParterComponent,
      Etaj1Component,
      Etaj2Component,
    AngajatiComponent,
      DetaliiAngajatComponent,
      DepartamenteComponent,
      DepartDetaliiComponent,
      BookMeetingRoomComponent
  ], providers: [
      MeetingRoomService,
      GeneralService,
      AngajatService,
      DepartmentService,
      OfficesRoomService
  ]
})

export class AdminLayoutModule {}
