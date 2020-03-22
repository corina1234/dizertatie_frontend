import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GeneralService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    getAllResources(resourceName){
        return this.httpClient.get(this.baseUrl + resourceName);
    }

    getResourceByUrl(resourceUrl){
        return this.httpClient.get(resourceUrl);
    }
}
