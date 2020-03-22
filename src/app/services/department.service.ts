import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DepartmentService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    getDepartmentDetailsById(departmentId){
        return this.httpClient.get(this.baseUrl + 'department/' + departmentId +
            '?projection=departmentDetails');
    }
}
