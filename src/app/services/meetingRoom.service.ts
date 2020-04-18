import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MeetingRoomService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    getMeetingRoomsByFloor(floorId){
        return this.httpClient.get(this.baseUrl + 'meetingRoom/' + 'search/' +
            'findAllByFloor_Id/?floorId=' + floorId);
    }
}
