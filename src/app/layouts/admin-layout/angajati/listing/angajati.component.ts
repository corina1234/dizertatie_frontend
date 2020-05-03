import {Component, OnInit} from "@angular/core";
import {GeneralService} from "../../../../services/general.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngajatService} from "../../../../services/angajat.service";

@Component({
    templateUrl: './angajati.component.html'
})

export class AngajatiComponent implements OnInit {
    resourceName = "employee";
    projection = "employeeList";
    angajati = [];
    filtruDepart;
    currentPage = 0;
    totalPages = [];

    constructor(private generalService: GeneralService, private angajatiService: AngajatService, private router:Router, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.filtruDepart = params.get('departament');
        });

        if(this.filtruDepart){
            this.angajatiService.getAngajatiDepartamentId(this.filtruDepart, 0).subscribe(data => {
                this.angajati = (<any>data)._embedded.employees;
                this.currentPage = 0;
                this.totalPages = Array(+(<any>data).page.totalPages).fill(0).map((x, i) => i);
            }, error => {
                console.log(error);
            });
        } else {
            this.generalService.getAllResources(this.resourceName, this.projection).subscribe(data => {
                this.angajati = (<any>data)._embedded.employees;
                this.currentPage = 0;
                this.totalPages = Array(+(<any>data).page.totalPages).fill(0).map((x, i) => i);
            }, error => {
                console.log(error);
            });
        }

    }

    vizualizareDetalii(id){
        if(this.filtruDepart){
            this.router.navigate(['/angajat/' + id + '/departament/' + this.filtruDepart]);
        } else {
            this.router.navigate(['/angajat/' + id]);
        }
    }

    searchAngajat(value){
        if(value){
            if(this.filtruDepart){
                this.angajatiService.searchNameAngajatiDepartamentId(this.filtruDepart, value, 0).subscribe(data => {
                    this.angajati = (<any>data)._embedded.employees;
                    this.currentPage = 0;
                    this.totalPages = Array(+(<any>data).page.totalPages).fill(0).map((x, i) => i);
                }, error => {
                    console.log(error);
                });
            } else {
                this.generalService.getResourceByNameAndPage(this.resourceName, value, 0, this.projection).subscribe(data => {
                    this.angajati = (<any>data)._embedded.employees;
                    this.currentPage = 0;
                    this.totalPages = Array(+(<any>data).page.totalPages).fill(0).map((x, i) => i);
                }, error => {
                    console.log(error);
                });
            }

        } else {
            this.ngOnInit();
        }
    }

    updatePage(i, searchAng){
        if(searchAng != ''){
            if(this.filtruDepart){
                this.angajatiService.searchNameAngajatiDepartamentId(this.filtruDepart, searchAng, i).subscribe(data => {
                    this.angajati = (<any>data)._embedded.employees;
                    this.currentPage = i;
                    this.totalPages = Array(+(<any>data).page.totalPages).fill(0).map((x, i) => i);
                }, error => {
                    console.log(error);
                });
            } else {
                this.generalService.getResourceByNameAndPage(this.resourceName, searchAng, i, this.projection).subscribe(data => {
                    this.angajati = (<any>data)._embedded.employees;
                    this.currentPage = i;
                    this.totalPages = Array(+(<any>data).page.totalPages).fill(0).map((x, i) => i);
                }, error => {
                    console.log(error);
                });
            }

        } else {
            if(this.filtruDepart){
                this.angajatiService.getAngajatiDepartamentId(this.filtruDepart, i).subscribe(data => {
                    this.angajati = (<any>data)._embedded.employees;
                    this.currentPage = i;
                    this.totalPages = Array(+(<any>data).page.totalPages).fill(0).map((x, i) => i);
                }, error => {
                    console.log(error);
                });
            } else {
                this.generalService.getAllResourcesByPage(this.resourceName, i, this.projection).subscribe(data => {
                    this.angajati = (<any>data)._embedded.employees;
                    this.currentPage = i;
                }, error => {
                    console.log(error);
                });
            }
        }
    }
}
