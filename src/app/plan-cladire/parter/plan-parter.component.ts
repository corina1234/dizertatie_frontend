import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from "@angular/core";
import {OfficesRoomService} from "../../services/officesRoom.service";
import {getDataHtml, isOpenSpaceSelectedStyle} from "../utils";

// @ts-ignore
@Component({
    selector: 'g[parter-component]',
    templateUrl: './plan-parter.component.html',
    styleUrls: ['plan-parter.component.css']
})

export class PlanParterComponent implements OnInit{
    @Input() camera;
    @Output() showDetails = new EventEmitter();
    @Output() hideDetails = new EventEmitter();
    isOpenSpaceSelectedStyle = isOpenSpaceSelectedStyle;
    officeRooms = [];
    floorId = 1;

    constructor(private officesRoomService: OfficesRoomService){}

    ngOnInit(): void {
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


