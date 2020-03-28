import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {getDataHtml, isOpenSpaceSelectedStyle} from "../utils";
import {OfficesRoomService} from "../../services/officesRoom.service";

// @ts-ignore
@Component({
    selector: 'g[etaj-2-component]',
    templateUrl: './etaj-2.component.html',
    styleUrls: ['etaj-2.component.css']
})

export class Etaj2Component {
    @Input() camera;
    isOpenSpaceSelectedStyle = isOpenSpaceSelectedStyle;
    @Output() showDetails = new EventEmitter();
    @Output() hideDetails = new EventEmitter();
    officeRooms = [];
    floorId = 3;

    constructor(private officesRoomService: OfficesRoomService){}

    ngOnInit(): void {
        this.officesRoomService.getOfficesRoomsByFloorId(this.floorId).subscribe((data) => {
            this.officeRooms = (<any>data)._embedded.officesRooms;
            console.log((<any>data)._embedded.officesRooms)
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
