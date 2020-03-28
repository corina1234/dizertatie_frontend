import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {MeetingRoomService} from "../../services/meetingRoom.service";
import {getDataHtml, isOpenSpaceSelectedStyle} from "../utils";
import {OfficesRoomService} from "../../services/officesRoom.service";

// @ts-ignore
@Component({
    selector: 'g[etaj-1-component]',
    templateUrl: './etaj-1.component.html',
    styleUrls: ['etaj-1.component.css']
})

export class Etaj1Component implements OnInit{
    @Input() camera;
    @Output() showDetails = new EventEmitter();
    @Output() hideDetails = new EventEmitter();
    isOpenSpaceSelectedStyle = isOpenSpaceSelectedStyle;
    officeRooms = [];
    floorId = 2;

    constructor(private officesRoomService: OfficesRoomService, private meetingRoomService: MeetingRoomService){}

    ngOnInit(): void {
        // this.meetingRoomService.getMeetingRoomsByFloor(this.floorId).subscribe((res) => {
        //     console.log(res);
        //     this.meetingRooms = (<any>res)._embedded.meetingRooms;
        // });
        this.officesRoomService.getOfficesRoomsByFloorId(this.floorId).subscribe((data) => {
            this.officeRooms = (<any>data)._embedded.officesRooms;
            this.officeRooms.forEach((office) => {
                if(office.id == this.camera){
                    let coordinates = office.coordinates.split(",");
                    this.showTooltip({clientX: coordinates[0], clientY: coordinates[1]}, office);

                }
            });
        });

    }

    showTooltip($event, officeData){
        if(officeData){
            let dataHtml = getDataHtml(officeData);
            this.showDetails.emit({event: $event, data: dataHtml});
        }
    }

    showTooltipSimple($event, text){
        this.showDetails.emit({event: $event, data: text});
    }

    hideTooltip($event){
        this.hideDetails.emit($event);
    }

}
