import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AngajatService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    getAngajatDetailedById(angajatId){
        return this.httpClient.get(this.baseUrl + 'employee/' + angajatId +
            '?projection=employeeDetails');
    }
}
