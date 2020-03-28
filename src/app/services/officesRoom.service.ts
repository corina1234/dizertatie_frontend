import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OfficesRoomService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    getOfficesRoomsByFloorId(floorId){
        return this.httpClient.get(this.baseUrl + 'officesRoom/' + 'search/' +
            'findAllByFloor_Id/?floorId=' + floorId + '&projection=officesRoomDetails');
    }
}
