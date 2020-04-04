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

    getResourceByName(resource, nume){
        return this.httpClient.get(this.baseUrl + resource + '/search/findAllByNameContaining?name=' + nume);
    }

    createResource(formValues, resource: string) {
        return this.httpClient.post(this.baseUrl + resource,
            formValues);
    }
}
