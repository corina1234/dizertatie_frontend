import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MeetingRoomService} from "../../../services/meetingRoom.service";
import {GeneralService} from "../../../services/general.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    templateUrl: './book-meeting-room.component.html'
})

export class BookMeetingRoomComponent implements OnInit {
    resource = "booking";
    baseUrlEmployee = "http://localhost:8080/employee/";
    //TODO delete hardcoded
    currentUserId = 4;
    bookForm: FormGroup;
    meetingRooms = [];
    private meetingRoom: FormControl;
    private subject: FormControl;
    private bookedFrom: FormControl;
    private bookedUntil: FormControl;

    constructor(private meetingRoomService: MeetingRoomService, private generalService: GeneralService, private _snackBar: MatSnackBar) {}

    ngOnInit(): void {
        this.meetingRoom = new FormControl('', Validators.required);
        this.subject = new FormControl();
        this.bookedFrom = new FormControl('', Validators.required);
        this.bookedUntil = new FormControl('', Validators.required);
        this.bookForm = new FormGroup({
            meetingRoom: this.meetingRoom,
            subject: this.subject,
            bookedFrom: this.bookedFrom,
            bookedUntil: this.bookedUntil
        });

        this.meetingRoomService.getAvailableMeetingRooms().subscribe(data => this.meetingRooms = (<any>data)._embedded.meetingRooms);
    }

    vizualizareMeetingRooms(){

    }

    salvareRezervare(formValues){
        if(this.validareFielduri(formValues)){
            formValues.employee = this.baseUrlEmployee + this.currentUserId;
            this.generalService.createResource(formValues, this.resource).subscribe(data => {
                this._snackBar.open("Rezervarea a fost salvata", null,{
                    duration: 1000,
                });
                this.ngOnInit();

            });
        }
    }

    validareFielduri(formValues){
        if(formValues.bookedFrom > formValues.bookedUntil){
            this.bookedUntil.setErrors({key: "Data incorecta"});
            return false;
        } else if(formValues.bookedFrom < this.parseDate()){
            this.bookedFrom.setErrors({key: "Data incorecta"});
            return false;
        } else {
            return true;
        }
    }

    parseDate(){
        let today = new Date();
        var dd = today.getDate() + "";
        var mm = today.getMonth() + 1 + "";
        var hh = today.getHours() + "";
        var min = today.getMinutes() + "";
        if(today.getDate() < 10){
            dd = '0' + dd;
        }
        if(today.getMonth() + 1 < 10){
            mm = '0' + mm;
        }
        if(today.getMinutes() < 10){
            hh = '0' + hh;
        }
        if(today.getHours() < 10){
            min = '0' + min;
        }
        return today.getFullYear() + "-" + mm + "-" + dd + "T" + hh + ":" + min;
    }
}
