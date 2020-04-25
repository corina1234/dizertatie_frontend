import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MeetingRoomService} from "../../../services/meetingRoom.service";
import {GeneralService} from "../../../services/general.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {BookingService} from "../../../services/booking.service";
import {ToastrService} from "ngx-toastr";
import {AngajatService} from "../../../services/angajat.service";

@Component({
    templateUrl: './book-meeting-room.component.html',
    styleUrls: ['./book-meeting-room.component.css']
})

export class BookMeetingRoomComponent implements OnInit {
    resource = "bookings/create";
    roomResource = "meetingRoom";
    roomProjection = "meetingRoomDetails";
    currentUserId;
    bookForm: FormGroup;
    meetingRooms = [];
    selectedMeetingRoom;
    private meetingRoom: FormControl;
    private subject: FormControl;
    private bookedFrom: FormControl;
    private bookedUntil: FormControl;
    private participanti: FormControl;

    private disponibilitateSelectata;
    private bookings:any;
    private employees = [];

    constructor(private generalService: GeneralService, private bookingService: BookingService,
                private angajatService: AngajatService,
                private toastr: ToastrService, private router: Router) {}

    ngOnInit(): void {
        this.meetingRoom = new FormControl('0', Validators.required);
        this.subject = new FormControl();
        this.bookedFrom = new FormControl('', Validators.required);
        this.bookedUntil = new FormControl('', Validators.required);
        this.participanti = new FormControl();
        this.bookForm = new FormGroup({
            meetingRoom: this.meetingRoom,
            subject: this.subject,
            bookedFrom: this.bookedFrom,
            bookedUntil: this.bookedUntil,
            participanti: this.participanti
        });

        this.generalService.getAllResources(this.roomResource).subscribe(data =>
        {
            this.meetingRooms = (<any>data)._embedded.meetingRooms;
        });

        this.generalService.getAllResources("employee","employeeList").subscribe(data =>
        this.employees = (<any>data)._embedded.employees);
        this.selectedMeetingRoom = null;
        this.disponibilitateSelectata = false;

        this.angajatService.getAngajatByEmail( sessionStorage.getItem('username')).subscribe((data) => this.currentUserId = (<any>data).id);
    }

    verificaRezervare(formValues){
        this.bookings = [];
        if(this.validareFielduri(formValues)){
            let bookedFrom = formValues.bookedFrom.replace("T", "%20");
            let bookedUntil = formValues.bookedUntil.replace("T", "%20");
            this.bookingService.getBusyBookingFromUntil(bookedFrom, bookedUntil, this.selectedMeetingRoom.id).subscribe(data => {
                this.disponibilitateSelectata = true;
                this.bookings = data;

            });
        }
    }

    salvareRezervare(formValues){
        if(this.validareFielduri(formValues)){
            formValues.employee = {id: this.currentUserId};
            let bookedFrom = formValues.bookedFrom.replace("T", "%20");
            let bookedUntil = formValues.bookedUntil.replace("T", "%20");
            this.bookingService.getBusyBookingFromUntil(bookedFrom, bookedUntil, this.selectedMeetingRoom.id).subscribe(data => {
                if ((<any>data).length > 0) {
                    this.toastr.error('Camera e ocupata!');
                } else {
                    formValues.meetingRoom = {id: this.selectedMeetingRoom.id};
                    if(formValues.participanti){
                        formValues.attendees = formValues.participanti.join(",");
                    }
                    this.generalService.createResource(formValues, this.resource).subscribe(data => {
                        this.toastr.success('Rezervarea a fost salvata!');
                        this.ngOnInit();

                    });
               }
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

    vizualizareHarta(){
        let etaj = this.selectedMeetingRoom.floor.id;
        let salaSedinte = this.selectedMeetingRoom.id;
        this.router.navigate(['/plan-cladire/sedinta/', etaj, salaSedinte]);
    }

    changeSelectedRoom(url){
        this.generalService.getResourceByIdAndProjection(url, this.roomProjection).subscribe((data) =>{
           this.selectedMeetingRoom = data;
        });
    }
}
