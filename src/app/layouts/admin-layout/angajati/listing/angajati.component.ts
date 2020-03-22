import {Component, OnInit} from "@angular/core";
import {GeneralService} from "../../../../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngajatService} from "../../../../services/angajat.service";

@Component({
    templateUrl: './angajati.component.html'
})

export class AngajatiComponent implements OnInit {
    resourceName = "employee";
    angajati = [];
    filtruDepart;

    constructor(private generalService: GeneralService, private angajatiService: AngajatService, private router:Router, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.filtruDepart = params.get('departament');
        });

        if(this.filtruDepart){
            this.angajatiService.getAngajatiDepartamentId(this.filtruDepart).subscribe(data => {
                this.angajati = (<any>data)._embedded.employees;
            }, error => {
                console.log(error);
            });
        } else {
            this.generalService.getAllResources(this.resourceName).subscribe(data => {
                this.angajati = (<any>data)._embedded.employees;
            }, error => {
                console.log(error);
            });
        }

    }

    vizualizareDetalii(id){
        this.router.navigate(['/angajat/' + id]);
    }

    searchAngajat(value){
        if(value){
            this.generalService.getResourceByName(this.resourceName, value).subscribe(data => {
                this.angajati = (<any>data)._embedded.employees;
            }, error => {
                console.log(error);
            });
        } else {
            this.ngOnInit();
        }
    }
}
