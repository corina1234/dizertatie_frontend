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

    getAngajatiDepartamentId(departId, i){
        return this.httpClient.get(this.baseUrl + 'employee/search/findAllByDepartment_Id?id=' + departId + '&page=' + i + '&projection=employeeList');
    }

    searchNameAngajatiDepartamentId(departId, name, i){
        return this.httpClient.get(this.baseUrl + 'employee/search/findAllByNameContainingAndDepartment_Id?name=' + name +'&id=' + departId + '&page=' + i + '&projection=employeeList');
    }

    getAngajatByEmail(email, projection?){
        let url = this.baseUrl + 'employee/search/findByEmail?email=' + email;
        if(projection){
            return this.httpClient.get(url + '&projection=' + projection);
        }
        return this.httpClient.get(url);
    }

    getAllEmployeesDropDown(){
        return this.httpClient.get(this.baseUrl + 'employee/search/customQuery?projection=employeeDropDown');
}
}
