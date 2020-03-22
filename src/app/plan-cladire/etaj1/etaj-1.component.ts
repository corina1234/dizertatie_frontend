import {Component, Input, OnInit} from "@angular/core";
import {MeetingRoomService} from "../../services/meetingRoom.service";

// @ts-ignore
@Component({
    selector: 'g[etaj-1-component]',
    templateUrl: './etaj-1.component.html',
    styleUrls: ['etaj-1.component.css']
})

export class Etaj1Component implements OnInit{
    meetingRooms = [];
    floorId = 2;

    constructor(private meetingRoomService: MeetingRoomService){

    }

    ngOnInit(): void {
        this.meetingRoomService.getMeetingRoomsByFloor(this.floorId).subscribe((res) => {
            console.log(res);
            this.meetingRooms = (<any>res)._embedded.meetingRooms;
        });
    }
}
