import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {getDataHtml, getDataMeetingRoomHtml, getOfficeInfo, isOpenSpaceSelectedStyle} from "../utils";
import {OfficesRoomService} from "../../services/officesRoom.service";
import {MeetingRoomService} from "../../services/meetingRoom.service";

// @ts-ignore
@Component({
    selector: 'g[etaj-2-component]',
    templateUrl: './etaj-2.component.html',
    styleUrls: ['etaj-2.component.css']
})

export class Etaj2Component {
    @Input() camera;
    @Input() salaSedinte;
    @Input() officeAngajat;
    isOpenSpaceSelectedStyle = isOpenSpaceSelectedStyle;
    @Output() showDetails = new EventEmitter();
    @Output() hideDetails = new EventEmitter();
    officeRooms = [];
    meetingRooms = [];
    floorId = 3;

    constructor(private officesRoomService: OfficesRoomService, private meetingRoomService: MeetingRoomService){}

    ngOnInit(): void {
        this.meetingRoomService.getMeetingRoomsByFloor(this.floorId).subscribe((res) => {
            this.meetingRooms = (<any>res)._embedded.meetingRooms;
            this.meetingRooms.forEach((meetingRoom) => {
                if(meetingRoom.id == this.salaSedinte){
                    let coordinates = meetingRoom.coordinates.split(",");
                    this.showTootltipMR({clientX: coordinates[0], clientY: coordinates[1]}, meetingRoom);

                }
            });
        });
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

    showTootltipMR($event, meetingRoom){
        if(meetingRoom){
            let dataHtml = getDataMeetingRoomHtml(meetingRoom);
            this.showDetails.emit({event: $event, data: dataHtml});
        }
    }

    showTooltipOffice($event, officeData, parentName){
        if(officeData){
            let dataHtml = getOfficeInfo(officeData, parentName);
            this.showDetails.emit({event: $event, data: dataHtml});
        }
    }
}
