import {Component, OnInit} from "@angular/core";
import {GeneralService} from "../../../../services/general.service";
import {Router} from "@angular/router";
import {DepartmentService} from "../../../../services/department.service";

@Component({
    templateUrl: './details-meeting-room.component.html'
})

export class DetailsMeetingRoomComponent implements OnInit {
    resourceName = "meetingRoom";
    meetingRooms = [];

    constructor(private router:Router){}

    ngOnInit(): void {

    }



    // searchDepartament(value){
    //     if(value){
    //         this.generalService.getResourceByName(this.resourceName, value).subscribe(data => {
    //             this.departamente = (<any>data)._embedded.departments;
    //         }, error => {
    //             console.log(error);
    //         });
    //     } else {
    //         this.ngOnInit();
    //     }
    // }
}
