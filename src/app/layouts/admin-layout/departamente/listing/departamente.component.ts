import {Component, OnInit} from "@angular/core";
import {GeneralService} from "../../../../services/general.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './departamente.component.html'
})

export class DepartamenteComponent implements OnInit {
    resourceName = "department";
    departamente = [];

    constructor(private generalService: GeneralService, private router:Router){}

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
}
