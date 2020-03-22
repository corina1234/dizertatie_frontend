import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {PlanCladireComponent} from "../../plan-cladire/plan-cladire.component";
import {AngajatiComponent} from "./angajati/listing/angajati.component";
import {DetaliiAngajatComponent} from "./angajati/detalii/detalii-angajat.component";
import {BookMeetingRoomComponent} from "./bookMeetingRoom/book-meeting-room.component";
import {DepartDetaliiComponent} from "./departamente/detalii/depart-detalii.component";
import {DepartamenteComponent} from "./departamente/listing/departamente.component";

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    {path: 'plan-cladire', component: PlanCladireComponent},
    { path: 'angajati', component: AngajatiComponent},
    { path: 'angajat/:id',  component: DetaliiAngajatComponent },
    { path: 'departamente',  component: DepartamenteComponent },
    { path: 'departament/:id',  component: DepartDetaliiComponent },
    { path: 'rezervare',  component: BookMeetingRoomComponent }
];
