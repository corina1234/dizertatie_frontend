import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GeneralService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    getAllResources(resourceName, projection?){
        let url = this.baseUrl + resourceName;
        if(projection){
            return this.httpClient.get(url + '?projection=' + projection);
        } else {
            return this.httpClient.get(url);
        }
    }

    getAllResourcesByPage(resourceName, i,  projection?){
        let url = this.baseUrl + resourceName + '?page=' + i;
        if(projection){
            return this.httpClient.get(url + '&projection=' + projection);
        } else {
            return this.httpClient.get(url);
        }
    }

    getResourceByIdAndProjection(url, projectionName){
        return this.httpClient.get(url + "?projection=" + projectionName);
    }


    getResourceByName(resource, nume, projection?){
        let url = this.baseUrl + resource + '/search/findAllByNameContaining?name=' + nume;
        if(projection){
            return this.httpClient.get(url + '&projection=' + projection);
        } else {
            return this.httpClient.get(url);
        }
    }

    getResourceByNameAndPage(resource, nume, i, projection?){
        let url = this.baseUrl + resource + '/search/findAllByNameContaining?name=' + nume + '&page=' + i;
        if(projection){
            return this.httpClient.get(url + '&projection=' + projection);
        } else {
            return this.httpClient.get(url);
        }
    }

    createResource(formValues, resource: string) {
        return this.httpClient.post(this.baseUrl + resource,
            formValues);
    }

    updateResource(formValues, id,  resource: string) {
        return this.httpClient.patch(this.baseUrl + resource + "/" + id,
            formValues);
    }

    test(){
        return this.baseUrl + 'home';
    }
}
