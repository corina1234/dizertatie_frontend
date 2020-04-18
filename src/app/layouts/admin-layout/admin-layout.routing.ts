import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {PlanCladireComponent} from "../../plan-cladire/plan-cladire.component";
import {AngajatiComponent} from "./angajati/listing/angajati.component";
import {DetaliiAngajatComponent} from "./angajati/detalii/detalii-angajat.component";
import {BookMeetingRoomComponent} from "./bookMeetingRoom/book-meeting-room.component";
import {DepartDetaliiComponent} from "./departamente/detalii/depart-detalii.component";
import {DepartamenteComponent} from "./departamente/listing/departamente.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    {path: 'plan-cladire', component: PlanCladireComponent},
    {path: 'plan-cladire/departament/:nivel/:camera', component: PlanCladireComponent},
    {path: 'plan-cladire/angajat/:nivel/:office', component: PlanCladireComponent},
    {path: 'plan-cladire/sedinta/:nivel/:salaSedinte', component: PlanCladireComponent},
    { path: 'angajati', component: AngajatiComponent},
    { path: 'angajati/departament/:departament', component: AngajatiComponent},
    { path: 'angajat/:id',  component: DetaliiAngajatComponent },
    { path: 'departamente',  component: DepartamenteComponent },
    { path: 'departament/:id',  component: DepartDetaliiComponent },
    { path: 'rezervare',  component: BookMeetingRoomComponent }
];
