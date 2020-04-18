import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthenticationService {

    baseUrl = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    authenticate(username, password){
        return this.httpClient.get(this.baseUrl + 'login/check?username=' + username +
            '&password=' + password);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        return !(user === null)
    }

    logOut() {
        sessionStorage.removeItem('username');
    }
}
