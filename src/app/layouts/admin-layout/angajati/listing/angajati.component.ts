import {Component, OnInit} from "@angular/core";
import {GeneralService} from "../../../../services/general.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './angajati.component.html'
})

export class AngajatiComponent implements OnInit {
    resourceName = "employee";
    angajati = [];

    constructor(private generalService: GeneralService, private router:Router){}

    ngOnInit(): void {
        this.generalService.getAllResources(this.resourceName).subscribe(data => {
            this.angajati = (<any>data)._embedded.employees;
        }, error => {
            console.log(error);
        })
    }

    vizualizareDetalii(id){
        this.router.navigate(['/angajat/' + id]);
    }
}
