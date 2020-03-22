import {Component, OnInit} from "@angular/core";
import {GeneralService} from "../../../../services/general.service";
import {Router} from "@angular/router";
import {DepartmentService} from "../../../../services/department.service";

@Component({
    templateUrl: './departamente.component.html'
})

export class DepartamenteComponent implements OnInit {
    resourceName = "department";
    departamente = [];

    constructor(private generalService: GeneralService,private departmentService: DepartmentService, private router:Router){}

    ngOnInit(): void {
        this.generalService.getAllResources(this.resourceName).subscribe(data => {
            this.departamente = (<any>data)._embedded.departments;
        }, error => {
            console.log(error);
        })
    }

    vizualizareDetalii(id){
        this.router.navigate(['/departament/' + id]);
    }

    searchDepartament(value){
        if(value){
            this.generalService.getResourceByName(this.resourceName, value).subscribe(data => {
                this.departamente = (<any>data)._embedded.departments;
            }, error => {
                console.log(error);
            });
        } else {
            this.ngOnInit();
        }
    }
}
