import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OfficeService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    getAvailableOfficesForOfficeRoom(officesRoomId, employeeId){
        return this.httpClient.get(this.baseUrl + 'office/' + 'search/' +
            'findAllByOfficesRoom_IdAndEmployeeIsNullOrEmployee_Id/?officesRoomId=' + officesRoomId + '&employeeId='  + employeeId + '&projection=officeDropDown');
    }
}
