import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BookingService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    getBusyBookingFromUntil(dateFrom, dateUntil, roomId){
        return this.httpClient.get(this.baseUrl + 'bookings/busy/room?startDate=' + dateFrom + '&endDate=' + dateUntil + '&roomId=' + roomId);
    }
}
